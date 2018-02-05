describe("Map", function(){
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

    it("keys", function(){
        let map = new Map();
        map.set("test", 1);
        map.set("toast", 2);
        map.set("tust", 3);
        map.set("tist", 4);
        map.set("tast", 5);
        
        let actual_keys = [];
        for(let key of map.keys()){
            actual_keys.push(key);
        }
        let expected_keys = ["test", "toast", "tust", "tist", "tast"];
        expect(actual_keys).toEqual(expected_keys);
    });

    it("values", function(){
        let map = new Map();
        map.set("test", 1);
        map.set("toast", 2);
        map.set("tust", 3);
        map.set("tist", 4);
        map.set("tast", 5);
        
        let actual_values = [];
        for(let val of map.values()){
            actual_values.push(val);
        }
        let expected_values = [1,2,3,4,5];
        expect(actual_values).toEqual(expected_values);
    })

});