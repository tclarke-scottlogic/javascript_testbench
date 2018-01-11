//"use strict";
let deepFreeze = require('deep-freeze');

describe("into the freezer", function(){
    it("should deep freeze", function(){
    let things = {
        thing1: "a",
        thing2: "b",
        thing3: "c",
        thing4: "d"
    }

    deepFreeze(things);

    things.thing5 = "new"; 
    things["thing5"] = "new-thing"; 

    console.info(things);
    expect(things.thing5).toBe(undefined);
})
})