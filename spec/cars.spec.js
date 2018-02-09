let Drive = require( '../module/cars');

function makeCar(id, speed){
    return {
        car_id: id,
        speed: speed
    };
}

fdescribe("cars", function(){
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
}); 