"use strict"
const { Map, List } = require('immutable')
let { toJSON, fromJSON } = require('transit-immutable-js')
let immutableMatchers = require('jasmine-immutable-matchers')

fdescribe("javascript tests", function () {
    beforeEach(function(){
        jasmine.addMatchers(immutableMatchers);
    });

    it("immutable means immutable - map", function () {
        let x = Map();
        x["test"] = "test1";
        let y = x.set("test", "test2");

        expect(x["test"]).toBe("test1");
        expect(x.get("test")).toBe(undefined);
        expect(y.get("test")).toBe("test2");
    })

    it("immutable means immutable - list", function () {
        let x = List([3, 4, 5, 6]);

        let y = x.set(2, 3)

        expect(x.get(2)).toBe(5);
        expect(y.get(2)).toBe(3);
    })

    it("immutable set unchanged", function () {
        let x = Map({
            current_account: null,
            new_action: "buy",
            new_quantity: 0,
            new_price: 0,
            aggregate_orders: [],
            my_orders: [],
            trades: []
        });

        let y = x.set("new_action", "buy");

        expect(y).toBe(x);
        expect(y).toEqual(x);
    })

    it("immutable set changed", function () {
        let x = Map({
            current_account: null,
            new_action: "buy",
            new_quantity: 0,
            new_price: 0,
            aggregate_orders: [],
            my_orders: [],
            trades: []
        });

        let y = x.set("new_action", "sell");

        expect(y).not.toBe(x);
        expect(y).not.toEqualImmutable(x);
    })

    it("immutable set double changed", function () {
        let x = Map({
            current_account: null,
            new_action: "buy",
            new_quantity: 0,
            new_price: 0,
            aggregate_orders: [],
            my_orders: [],
            trades: []
        });

        let y = x.set("new_action", "sell");
        let z = y.set("new_action", "buy");

        expect(z).not.toBe(x);
        // Buh? Turns out jasmine standard equality doesn't work well with Immutables 
        expect(z).not.toEqual(x);

        expect(x.equals(z)).toBeTruthy();

        expect(z).toEqualImmutable(x);
    })

    it("immutable matcher checks immutable", function () {
        let mutable = {
            current_account: null,
            new_action: "buy",
            new_quantity: 0,
            new_price: 0,
            aggregate_orders: [],
            my_orders: [],
            trades: []
        };

        let immutable = Map(mutable);

        expect(mutable).not.toBeImmutable();
        expect(immutable).toBeImmutable();
    });
});