"use strict"
const { Map, List, fromJS } = require('immutable')
let immutableMatchers = require('jasmine-immutable-matchers')

describe("immutable js tests", function () {
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

    it("can do fromJS", function(){
        const nested = fromJS({ a: { b: { c: [ 3, 4, 5 ] } } })

        const nested2 = nested.mergeDeep({ a: { b: { d: 6 } } })
        // Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 6 } } }
        
        expect(nested2.getIn([ 'a', 'b', 'd' ])).toBe(6);
        expect(nested2.get('a').get('b').get('d')).toBe(6);
        
        const nested3 = nested2.updateIn([ 'a', 'b', 'd' ], value => value + 1)
        const expected = fromJS({ a:  { b:  { c:  [ 3, 4, 5 ], d: 7 } } });
        expect(nested3).toEqualImmutable(expected);
        
        const nested4 = nested3.updateIn([ 'a', 'b', 'c' ], list => list.push(6))
        // Map { a: Map { b: Map { c: List [ 3, 4, 5, 6 ], d: 7 } } }
        //console.log(nested4) 
    })

    it("can do a thing you shouldn't do - inject a normal object into a Map", function(){
        const expected = fromJS({ a:  { b:  { c:  [ 3, 4, 5 ], d: 7 } } });
        const actual = Map({ a:  { b:  { c:  [ 3, 4, 5 ], d: 7 } } });
        expect(expected.get("a")).not.toEqualImmutable(actual.get("a"));
    })

    it("can do a thing you shouldn't do(?) - inject a normal object into a Map via set", function(){
        const expected = fromJS({ a:  [ 3, 4, 5 ] });
        const set_value = expected.set("a", [3, 4, 5]);
        const merge_value = expected.merge({"a": [3, 4, 5]});
        expect(expected.get("a")).not.toEqualImmutable(set_value.get("a"));
        expect(expected.get("a")).toEqualImmutable(merge_value.get("a"));
    })

/*
    xit("let's do something horrific", function(){
        let stuff = { a:  [ 3, 4, 5 ] };
        const expected = fromJS(stuff);
        const set_value = expected.set("a", stuff.a);

        console.log("stuff", stuff);
        console.log("expected", expected);
        console.log("set_value", set_value);

        set_value.get("a")[2] = 6;

        console.log("stuff", stuff);
        console.log("expected", expected);
        console.log("set_value", set_value);
    })
*/

});