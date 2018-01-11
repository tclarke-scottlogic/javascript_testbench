const  { Map, List } = require('immutable')
let {toJSON, fromJSON} = require('transit-immutable-js')

it("immutable means immutable - map", function(){
    let x = Map();
    x["test"] = "test1";
    let y= x.set("test", "test2");

    expect(x["test"]).toBe("test1");
    expect(x.get("test")).toBe(undefined);
    expect(y.get("test")).toBe("test2");
})

it("immutable means immutable - list", function(){
    let x = List([3,4,5,6]);

    let y = x.set(2, 3)

    expect(x.get(2)).toBe(5);
    expect(y.get(2)).toBe(3);
})