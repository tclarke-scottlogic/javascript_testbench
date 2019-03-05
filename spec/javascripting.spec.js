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


it("should invert", function(){
    expect(!undefined).toBe(true);
    expect(!null).toBe(true);
    expect(!0).toBe(true);
})

it("should do undefined checks", function(){
        expect(undefined === undefined).toBe(true);
    expect(null === undefined).toBe(false);
    expect(0 === undefined).toBe(false);

    expect(undefined == undefined).toBe(true);
    expect(null == undefined).toBe(true);
    expect(0 == undefined).toBe(false);

    expect(undefined !== undefined).toBe(false);
    expect(null !== undefined).toBe(true);
    expect(0 !== undefined).toBe(true);

    expect(undefined != undefined).toBe(false);
    expect(null != undefined).toBe(false);
    expect(0 != undefined).toBe(true);
})

it("should do null checks", function(){
    expect(undefined === null).toBe(false);
    expect(null === null).toBe(true);
    expect(0 === null).toBe(false);

    expect(undefined == null).toBe(true);
    expect(null == null).toBe(true);
    expect(0 == null).toBe(false);

    expect(undefined !== null).toBe(true);
    expect(null !== null).toBe(false);
    expect(0 !== null).toBe(true);

    expect(undefined != null).toBe(false);
    expect(null != null).toBe(false);
    expect(0 != null).toBe(true);
})

});