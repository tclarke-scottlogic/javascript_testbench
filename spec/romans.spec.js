function romani(str, one_symbol, five_symbol, ten_symbol){
    str = str.replace(new RegExp(one_symbol.repeat(10), "g"), ten_symbol);
    str = str.replace(new RegExp(one_symbol.repeat(9), "g"),  one_symbol + ten_symbol);
    str = str.replace(new RegExp(one_symbol.repeat(5), "g"), five_symbol);
    str = str.replace(new RegExp(one_symbol.repeat(4), "g"), one_symbol + five_symbol);
    return str;
}

function romanes(n){
	str = "I".repeat(n);
    
    str = romani(str, "I", "V", "X");
    str = romani(str, "X", "L", "C");
    str = romani(str, "C", "D", "M");
    str = romani(str, "M", "Q", "N");

    return str;
}


fdescribe("romanes", function(){
    it("1", function(){
        let input = 1;
        let expected = "I";
        expect(romanes(input)).toEqual(expected);
    });

    it("4", function(){
        let input = 4;
        let expected = "IV";
        expect(romanes(input)).toEqual(expected);
    });

    it("9", function(){
        let input = 9;
        let expected = "IX";
        expect(romanes(input)).toEqual(expected);
    });

    it("10", function(){
        let input = 10;
        let expected = "X";
        expect(romanes(input)).toEqual(expected);
    });

    it("89", function(){
        let input = 89;
        let expected = "LXXXIX";
        expect(romanes(input)).toEqual(expected);
    });

    
    it("90", function(){
        let input = 90;
        let expected = "XC";
        expect(romanes(input)).toEqual(expected);
    });

    it("99", function(){
        let input = 99;
        let expected = "XCIX";
        expect(romanes(input)).toEqual(expected);
    });

    it("100", function(){
        let input = 100;
        let expected = "C";
        expect(romanes(input)).toEqual(expected);
    });

    it("140", function(){
        let input = 140;
        let expected = "CXL";
        expect(romanes(input)).toEqual(expected);
    });

    it("400", function(){
        let input = 400;
        let expected = "CD";
        expect(romanes(input)).toEqual(expected);
    });

    it("900", function(){
        let input = 900;
        let expected = "CM";
        expect(romanes(input)).toEqual(expected);
    });

    it("999", function(){
        let input = 999;
        let expected = "CMXCIX";
        expect(romanes(input)).toEqual(expected);
    });

    it("1000", function(){
        let input = 1000;
        let expected = "M";
        expect(romanes(input)).toEqual(expected);
    });

    it("1994", function(){
        let input = 1994;
        let expected = "MCMXCIV";
        expect(romanes(input)).toEqual(expected);
    });

    it("1997", function(){
        let input = 1997;
        let expected = "MCMXCVII";
        expect(romanes(input)).toEqual(expected);
    });

    it("1998", function(){
        let input = 1998;
        let expected = "MCMXCVIII";
        expect(romanes(input)).toEqual(expected);
    });

    it("1999", function(){
        let input = 1999;
        let expected = "MCMXCIX";
        expect(romanes(input)).toEqual(expected);
    });

    it("2000", function(){
        let input = 2000;
        let expected = "MM";
        expect(romanes(input)).toEqual(expected);
    });

    it("2001", function(){
        let input = 2001;
        let expected = "MMI";
        expect(romanes(input)).toEqual(expected);
    });

    it("10000", function(){
        let input = 10000;
        let expected = "N";
        expect(romanes(input)).toEqual(expected);
    });


    it("16336", function(){
        let input = 16336;
        let expected = "NQMCCCXXXVI";
        expect(romanes(input)).toEqual(expected);
    });

})

