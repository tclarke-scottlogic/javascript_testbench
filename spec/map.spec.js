


fdescribe("Map", function(){
    it("Length is always 0", function(){
        expect(Map.length).toEqual(0);
    });

    it("Setty getty", function(){
        let obj = {};
        let map = new Map();

        obj[2] = "cheese";
        map.set(2, "cheese");

        for(let x in obj){
            expect(x).toBe("2");
            expect(x).not.toBe(2);
        }

        for(let x of map[Symbol.iterator]()){
            expect(x[0]).toBe(2);
            expect(x).not.toBe("2");
        }
    });




});