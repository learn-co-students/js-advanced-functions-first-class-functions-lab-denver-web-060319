// Code your solution in this file!
const returnFirstTwoDrivers = function(arrayOfDrivers) {
  return arrayOfDrivers.slice(0, 2)
}

const returnLastTwoDrivers = function(arrayOfDrivers) {
  return arrayOfDrivers.slice(arrayOfDrivers.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(i) {
  return function(fare) {
    return fare * i;
  };
}

const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare);
}

const selectDifferentDrivers = function(arrayOfDrivers, func) {
  return func(arrayOfDrivers);
}