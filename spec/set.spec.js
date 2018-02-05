
describe("Set", function(){
    
    it("adds values", function(){
        let set = new Set();
        set.add("test");
        set.add("toast");
        set.add("tust");
        set.add("tist");
        set.add("tast");
        for(let t of set.entries()){
            expect(set[0]).toBe(set[1]);
        }
        expect(set.size).toBe(5);
    })

});