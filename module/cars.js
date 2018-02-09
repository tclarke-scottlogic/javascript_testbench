// Cars should move forward
// Cars should always move into the left hand lane if there's space
// Cars should move into the right hand lane to overtake

function makeEmpty(length){
    return Array.apply(null, new Array(length)).map(function(){
        return null;
    });
}

function Drive(road){
    road = [...road];
    for(let x = road.length - 1; x > 0; x--){
        road[x] = [...road[x-1]];
    }
    road[0] = makeEmpty(road[0].length);
    return road;
}

function DriveTime(road, time){
    console.log("\n--------");
    for(let t = 0; t < time; ++t){
        road = Drive(road);
    }
    console.log(road);
    console.log("--------");
    return road;
}

module.exports = {
    drive: Drive,
    drive_time: DriveTime
};