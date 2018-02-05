



xdescribe("Set", function(){
    
    it("adds values", function(){
        let set = new Set();
        set.add("test");
        set.add("toast");
        set.add("tust");
        set.add("tist");
        set.add("tast");
        for(let t of set.keys()){
            console.info(t);
        }
        for(let t of set.values()){
            console.info(t);
        }
        for(let t of set.entries()){
            console.info(t);
        }
        expect(set.count()).toBe(5);
    })

});