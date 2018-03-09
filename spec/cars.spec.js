let Drive = require( '../module/cars');

function makeCar(id, speed){
    return {
        car_id: id,
        speed: speed
    };
}

describe("cars", function(){
    it("empty road", function(){
        let road = [
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
        ];
        let expected = [
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
        ];
        expect(Drive.drive_time(road,10)).toEqual(expected);
    })

    it("single car", function(){
        let car1 = makeCar("red", 1);
        let road = [
            [car1],
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
        ];
        let expected = [
            [null],
            [null],
            [null],
            [null],
            [null],
            [car1],
            [null],
        ];
        expect(Drive.drive_time(road,5)).toEqual(expected);
    })

    it("two cars", function(){
        let car1 = makeCar("red", 1);
        let car2 = makeCar("blue", 1);
        let road = [
            [car1,car2],
            [null,null],
            [null,null],
            [null,null],
            [null,null],
            [null,null],
            [null,null],
        ];
        let expected = [
            [null,null],
            [null,null],
            [null,null],
            [null,null],
            [null,null],
            [car1,car2],
            [null,null],
        ];
        expect(Drive.drive_time(road,5)).toEqual(expected);
    })

    it("two cars", function(){
        let car1 = makeCar("red", 1);
        let car2 = makeCar("blue", 1);
        let road = [
            [null,car1],
            [null,null],
            [null,null],
            [null,car2],
            [null,null],
            [null,null],
            [null,null],
        ];
        let expected = [
            [null,null],
            [null,null],
            [null,null],
            [null,car1],
            [null,null],
            [null,null],
            [null,car2],
        ];
        expect(Drive.drive_time(road,3)).toEqual(expected);
    })

    it("two cars diff speeds 1", function(){
        let car1 = makeCar("red", 1);
        let car2 = makeCar("blue", 2);
        let road = [
            [car1,car2],
            [null,null],
            [null,null],
            [null,null],
            [null,null],
            [null,null],
            [null,null],
        ];
        let expected = [
            [null,null],
            [null,car1],
            [null,car2],
            [null,null],
            [null,null],
            [null,null],
            [null,null],
        ];
        expect(Drive.drive_time(road,1)).toEqual(expected);
    })

    it("two cars diff speeds 2", function(){
        let car1 = makeCar("red", 1);
        let car2 = makeCar("blue", 2);
        let road = [
            [car1,car2],
            [null,null],
            [null,null],
            [null,null],
            [null,null],
            [null,null],
            [null,null],
        ];
        let expected = [
            [null,null],
            [null,null],
            [null,car1],
            [null,null],
            [null,car2],
            [null,null],
            [null,null],
        ];
        expect(Drive.drive_time(road,2)).toEqual(expected);
    })

    it("two cars diff speeds 3", function(){
        let car1 = makeCar("red", 1);
        let car2 = makeCar("blue", 2);
        let road = [
            [car1,car2],
            [null,null],
            [null,null],
            [null,null],
            [null,null],
            [null,null],
            [null,null],
        ];
        let expected = [
            [null,null],
            [null,null],
            [null,null],
            [null,car1],
            [null,null],
            [null,null],
            [null,car2],
        ];
        expect(Drive.drive_time(road,3)).toEqual(expected);
    })

    it("driving off the end, we lose track of the car", function(){
        let car1 = makeCar("red", 1);
        let car2 = makeCar("blue", 2);
        let road = [
            [car1,car2],
            [null,null],
            [null,null],
            [null,null],
            [null,null],
            [null,null],
            [null,null],
        ];
        let expected = [
            [null,null],
            [null,null],
            [null,null],
            [null,null],
            [null,car1],
            [null,null],
            [null,null],
        ];
        expect(Drive.drive_time(road,4)).toEqual(expected);
    })

    it("driving off the end, we lose track of the car", function(){
        let car1 = makeCar("red", 1);
        let car2 = makeCar("blue", 2);
        let road = [
            [car1,car2],
            [null,null],
            [null,null],
            [null,null],
            [null,null],
            [null,null],
            [null,null],
        ];
        let expected = [
            [null,null],
            [null,null],
            [null,null],
            [null,null],
            [null,car1],
            [null,null],
            [null,null],
        ];
        expect(Drive.drive_time(road,4)).toEqual(expected);
    })

    it("", function(){
        let car1 = makeCar("red", 1);
        let car2 = makeCar("blue", 2);
        let car3 = makeCar("green", 2);
        let road = [
            [car1,car2],
            [car3,null],
            [null,null],
            [null,null],
            [null,null],
            [null,null],
            [null,null],
        ];
        let expected = [
            [null,null],
            [null,null],
            [null,car1],
            [null,null],
            [null,car2],
            [null,car3],
            [null,null],
        ];
        expect(Drive.drive_time(road,2)).toEqual(expected);
    })
}); 