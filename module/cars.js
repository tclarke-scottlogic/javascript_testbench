// Cars should move forward
// Cars should always move into the left hand lane if there's space
// Cars should move into the right hand lane to overtake

function car([...strip], lane_num){
    return strip[lane_num];
}

function strip([...road], distance){
    return road[distance];
}

function carStepForward(car, [...road], lane, strip){
    if(car){
        road[strip][lane] = null;
        let next_pos = strip + car.speed;
        if(next_pos < road.length){
            road[next_pos][lane] = car;
        }
    }

    return road;
}

function carStepInner([...curr_strip], j){
    let curr_car = car(curr_strip, j);
    let next_car = car(curr_strip, j+1);
    if(curr_car && !next_car){
        curr_strip[j+1] = curr_car;
        curr_strip[j] = null;
    }
    return curr_strip;
}

function goForward([...road]){
    for(let i = road.length - 1; i >= 0; --i){
        let curr_strip = strip(road, i);
        for(let j = 0; j < curr_strip.length; ++j){
            let curr_car = car(curr_strip, j);
            road = carStepForward(curr_car, road, j, i);
        }
    }
    return road;
}

function changeLane([...road]){
    for(let i = 0; i < road.length; ++i){
        let curr_strip = strip(road, i);
        for(let j = 0; j < curr_strip.length - 1; ++j){
            curr_strip = carStepInner(curr_strip, j);
        }
        road[i] = curr_strip;
    }
    return road;
}

function Drive([...road]){
    road = goForward(road);
    road = changeLane(road);
    return road;
}

function DriveTime(road, time){
    if(time === 0){
        return road;
    }
    
    road = Drive(road);
    return DriveTime(road, time-1);;
}

module.exports = {
    drive: Drive,
    drive_time: DriveTime
};