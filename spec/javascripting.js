const  { Map, List } = require('immutable')
let {toJSON, fromJSON} = require('transit-immutable-js')

describe("javascript tests", function(){
    it("should coalesce", function(){
    let things = {
        thing1: "a",
        thing1: "a",
        thing1: "a",
        thing1: "a"
    }
    
    expect(Object.keys(things).length).toBe(1);
})


it("should not coalesce", function(){
    let things = {
        thing1: "a",
        thing1: "a",
        thing1: "a",
        thing1: "a"
    }
    
    expect(Object.keys(things).length).toBe(1);
})

it("should merge", function(){
    let things = {
        thing1: "a",
        thing2: "a",
        thing3: "a",
        thing4: "a"
    }
    let stuff = {...things};
    expect(Object.keys(stuff).length).toBe(4);
})

it("gets interesting", function(){
    let things = {thing: "a", thing2: "b", thing3: "c", thing4: "d"};
    let pre = {pre1: "p1", pre2: "p2", pre3: "p3"}
    let post = {post1: "pt1", post2: "pt2", post3: "pt3"}
    let override1 = {thing: "wool"}
    let override2 = {thing: "wall"}

    let merged1 = {
        ...things
    };
    expect(merged1).toEqual({thing: "a", thing2: "b", thing3: "c", thing4: "d"});

    let merged2 = {
        ...pre,
        ...things
    };
    expect(merged2).toEqual({pre1: "p1", pre2: "p2", pre3: "p3", thing: "a", thing2: "b", thing3: "c", thing4: "d"});

    let merged3 = {
        ...things,
        ...pre
    };
    expect(merged3).toEqual({thing: "a", thing2: "b", thing3: "c", thing4: "d", pre1: "p1", pre2: "p2", pre3: "p3"});

    let merged4 = {
        ...pre,
        ...things,
        ...post
    };
    expect(merged4).toEqual({pre1: "p1", pre2: "p2", pre3: "p3", thing: "a", thing2: "b", thing3: "c", thing4: "d", post1: "pt1", post2: "pt2", post3: "pt3"});

    let merged5 = {
        ...override1,
        ...things
    };
    expect(merged5).toEqual({thing: "a", thing2: "b", thing3: "c", thing4: "d"});

    let merged6 = {
        ...things,
        ...override1
    };
    expect(merged6).toEqual({thing: "wool", thing2: "b", thing3: "c", thing4: "d"});

    let merged7 = {
        ...override1,
        ...things,
        ...override2
    };
    expect(merged7).toEqual({thing: "wall", thing2: "b", thing3: "c", thing4: "d"});
})

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
});