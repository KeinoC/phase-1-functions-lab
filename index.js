// Code your solution in this file!
function distanceFromHqInBlocks(start) {
    let blocks = Math.abs(start - 42);
    return blocks;
}

function distanceFromHqInFeet(start) {
    let blocks = distanceFromHqInBlocks(start);
    let feet = blocks * 264;
    return feet;
}

function distanceTravelledInFeet(start, end) {
    let blocks = Math.abs(start - end);
    let feet = blocks * 264;
return feet;
}

function calculatesFarePrice(start, end) {
    let feet = distanceTravelledInFeet(start, end);
    let rate = .02
    let price
    if (feet <= 400) {
        price = 0;
    } else if (feet > 400 && feet < 2000) {
        price = (feet - 400) * rate;
    } else if (feet > 2000 && feet <= 2500) {
        price = 25;
    } else price = `cannot travel that far`;
    return price;
}




