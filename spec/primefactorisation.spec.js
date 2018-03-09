function prime_factors(input){
    if(input < 1)
    {
        throw "Invalid input, less than 1";
    }
    if(input === 1){
        return [1];
    }

    let output = [];

    let p = 2;
    while(input > 1){
        if(input % p === 0){
            input = input / p;
            output.push(p);
        }
        else{
            ++p;
        }
    }
    return output;
}



describe("prime factorisation", function(){
    it("1", function(){
        let input = 1;
        let expected = [1];
        expect(prime_factors(input)).toEqual(expected);
    });

    it("2", function(){
        let input = 2;
        let expected = [2];
        expect(prime_factors(input)).toEqual(expected);
    });

    it("4", function(){
        let input = 4;
        let expected = [2,2];
        expect(prime_factors(input)).toEqual(expected);
    });

    it("5", function(){
        let input = 5;
        let expected = [5];
        expect(prime_factors(input)).toEqual(expected);
    });

    it("10", function(){
        let input = 10;
        let expected = [2,5];
        expect(prime_factors(input)).toEqual(expected);
    });

    it("100", function(){
        let input = 100;
        let expected = [2,2,5,5];
        expect(prime_factors(input)).toEqual(expected);
    });

    it("1223", function(){
        let input = 1223;
        let expected = [1223];
        expect(prime_factors(input)).toEqual(expected);
    });

    it("1224", function(){
        let input = 1224;
        let expected = [2,2,2,3,3,17];
        expect(prime_factors(input)).toEqual(expected);
    });
});