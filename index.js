// Code your solution in this file!

function distanceFromHqInBlocks(block){
    //console.log(Math.abs(42 - block))
    return Math.abs(42 - block)
}

function distanceFromHqInFeet(block){
    let instanceBlocks = distanceFromHqInBlocks(block)
    console.log(instanceBlocks * 264)
    return instanceBlocks * 264
}

distanceFromHqInBlocks(40)
distanceFromHqInFeet(10)

function distanceTravelledInFeet(startBlock,endBlock){
    return 264 * Math.abs(startBlock - endBlock )
}

function calculatesFarePrice(start, destination){
    let totalDistance = distanceTravelledInFeet(start, destination)
    // Conditional
    if (totalDistance < 400 ) {
        return 0;
    } else if (totalDistance >= 400 && totalDistance <= 2000){
        return 2*(totalDistance - 400)/100;
    } else if (totalDistance > 2000 && totalDistance <= 2500) {
        return 25;
    } else if (totalDistance > 2500) {
    return 'cannot travel that far';
}
}