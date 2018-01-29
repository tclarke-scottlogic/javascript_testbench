describe("regexes", function(){
    it("it can find a match", function(){
        let regex = /t/g;
        let word = "test";

        let expected = ['t'];
        expected.index = 0;
        expected.input = 'test';
        expect(regex.exec(word)).toEqual(expected);
    })

    it("it can find 2 matches", function(){
        let regex = /t/g;
        let word = "test";

        let expected = ['t'];
        expected.index = 0;
        expected.input = 'test';
        expect(regex.exec(word)).toEqual(expected);

        expected.index = 3;
        expect(regex.exec(word)).toEqual(expected);
    })

    it("it can find 3 matches", function(){
        let regex = /it/g;
        expect(regex.source).toEqual("it");
        expect(regex.lastIndex).toEqual(0);

        let word = "tritestrdtititoits";
        
        let expected = ['it'];
        expected.input = 'tritestrdtititoits';
        
        expected.index = 2;
        expect(regex.exec(word)).toEqual(expected);
        expect(regex.lastIndex).toEqual(4);

        expected.index = 10;
        expect(regex.exec(word)).toEqual(expected);
        expect(regex.lastIndex).toEqual(12);
        
        expected.index = 12;
        expect(regex.exec(word)).toEqual(expected);
        expect(regex.lastIndex).toEqual(14);
        
        expected.index = 15;
        expect(regex.exec(word)).toEqual(expected);
        expect(regex.lastIndex).toEqual(17);

        expect(regex.exec(word)).toEqual(null);
        expect(regex.lastIndex).toEqual(0);

        expected.index = 2;
        expect(regex.exec(word)).toEqual(expected);
        expect(regex.lastIndex).toEqual(4);

        expected.index = 10;
        expect(regex.exec(word)).toEqual(expected);
        expect(regex.lastIndex).toEqual(12);
        
        expected.index = 12;
        expect(regex.exec(word)).toEqual(expected);
        expect(regex.lastIndex).toEqual(14);
        
    })

    it("it can test a match", function(){
        let regex = /test/g;
        let word = "test";
        expect(regex.test(word)).toBeTruthy(); 
    })

    it("it can find a match", function(){
        let regex = /t/g;
        let word = "test";
        expect(word.match(regex)).toEqual(['t', 't']);
    })

    it("it can find a match", function(){
        let regex = /t/g;
        let word = "test";
        expect(word.search(regex)).toBe(0);
        expect(word.search(regex)).toBe(0);
    })

    it("doesn't treat a . as a wildcard inside the []'s", function(){
        let regex = /[.]/g;
        let input = "10.100";

        let expected = ['.'];
        expected.index = 2;
        expected.input = input;
        expect(regex.exec(input)).toEqual(expected);

        let wildcard_regex = /./g;

        let wildcard_expected = ['1'];
        wildcard_expected.index = 0;
        wildcard_expected.input = input;
        expect(wildcard_regex.exec(input)).toEqual(wildcard_expected);
    })

    it("it can handles numbers", function(){
        let regex = /1{1,2}/g;
        let single_regex = /1{1}/g;
        let double_regex = /1{2}/g;
        let triple_regex = /1{3}/g;
        let word = "101101";
        expect(word.match(regex)).toEqual(['1', '11', '1']);
        expect(word.match(single_regex)).toEqual(['1', '1', '1', '1']);
        expect(word.match(double_regex)).toEqual(['11']);
        expect(word.match(triple_regex)).toEqual(null);
    })

    it("can handle parentheses", function(){
        var cartoonCrying = /boo+(hoo+)+/i;
        let input = "Boohoooohoohooo";
        expect(cartoonCrying.test(input)).toBeTruthy();

        let expected = [ 'Boohoooohoohooo', 'hooo' ];
        expected.index = 0;
        expected.input = input;

        expect(input.match(cartoonCrying)).toEqual(expected);
     })

     it("is a quirky thing", function(){
        let good_regex = /bad(ly)?/;

        let bad_expected = ["bad", undefined];
        bad_expected.input = "bad";
        bad_expected.index = 0;
        expect(good_regex.exec("bad")).toEqual(bad_expected);

        let badly_expected = ["badly", "ly"];
        badly_expected.input = "badly";
        badly_expected.index = 0;
        expect(good_regex.exec("badly")).toEqual(badly_expected);
     })

     it("test boundaries", function(){
        let bounded_regex = /\bstuff\b/;

        expect(bounded_regex.test("goodstuff")).not.toBeTruthy();

        expect(bounded_regex.test("my stuff")).toBeTruthy();

        expect(bounded_regex.test("my-stuff-thing")).toBeTruthy();
        expect(bounded_regex.test("my!stuff!thing")).toBeTruthy();
        expect(bounded_regex.test("my1stuff1thing")).not.toBeTruthy();
     })

     it("is fine with an inner loop", function(){
        let backtrack_good = /([01]+)b/;
        expect(backtrack_good.test("1010101010010101001010101010101010101010101010101010101011111110000011110101010110b")).toBeTruthy();
        expect(backtrack_good.test("1010101010010101001010101010101010101010101010101010101011111110000011110101010110")).not.toBeTruthy();
     })

     it("is fine with an outer loop", function(){
        let backtrack_good = /([01])+b/;
        expect(backtrack_good.test("1010101010010101001010101010101010101010101010101010101011111110000011110101010110b")).toBeTruthy();
        expect(backtrack_good.test("1010101010010101001010101010101010101010101010101010101011111110000011110101010110")).not.toBeTruthy();
     })

     it("encounters a backtracking bug if you do both inner and outer loop", function(){
        let backtrack_bug = /([01]+)+b/;
        expect(backtrack_bug.test("1010101010010101001010101010101010101010101010101010101011111110000011110101010110b")).toBeTruthy();
        
        // Utterly non-performant
        // expect(backtrack_bug.test("1010101010010101001010101010101010101010101010101010101011111110000011110101010110")).not.toBeTruthy();
     })

     it("uppercases stuff", function(){
        let tla_regex = /\b(\w\w(\w|\d))\b/ig;
        let input = "currently watched by the CiA, the fbi and mI6";
        expect(input.replace(tla_regex, function(str){
            if(str.toLowerCase() === "the" || str.toLowerCase() === "and"){
                return str;
            }
            return str.toUpperCase();
        })).toEqual("currently watched by the CIA, the FBI and MI6");
     })

     it("greedy vs non-greedy", function(){
        let greedy_regex = /\(.*\)/ig;
        let input = "(well, )this is a bit of a (sodding )problem";
        expect(input.replace(greedy_regex, "")).toEqual("problem"); // Failure

        let lazy_regex = /\(.*?\)/ig;
        expect(input.replace(lazy_regex, "")).toEqual("this is a bit of a problem"); // Success
    })

    it("can handle 'deathlord' by escaping stupid characters", function(){
        var name = "dea+hl[]rd";
        var text = "This dea+hl[]rd guy is super annoying.";
        var escaped = name.replace(/[^\w\s]/g, "\\$&");
        var regexp = new RegExp("\\b(" + escaped + ")\\b", "gi");
        expect(text.replace(regexp, "_$1_")).toEqual("This _dea+hl[]rd_ guy is super annoying.")
    })
})