xdescribe("Map", function(){
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

    xit("keys and values", function(){
        let map = new Map();
        map.set("test", 1);
        map.set("toast", 2);
        map.set("tust", 3);
        map.set("tist", 4);
        map.set("tast", 5);
        for(let key of map.keys()){
            console.info(key);
        }
    })

});