// 1
const returnFirstTwoDrivers = (array) => {
    return array.slice(0,2)
};

// 2
const returnLastTwoDrivers = (array) => {
    return array.slice(-2)
};

// 3
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// 4
const createFareMultiplier = (int) => {
    return (fare) => int * fare
};

// 5
const fareDoubler = createFareMultiplier(2);

// 6
const fareTripler = createFareMultiplier(3);

// 7
const selectDifferentDrivers = (driversArray, eitherFirstOrLast) => {
    return eitherFirstOrLast(driversArray)
};

