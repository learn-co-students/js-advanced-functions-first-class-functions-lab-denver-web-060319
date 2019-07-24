// Code your solution in this file!
function returnFirstTwoDrivers(arr) {
  return arr.slice(0, 2)
}

function returnLastTwoDrivers(arr) {
  return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num1) {
  return function(num2) {
    return num1 * num2;
  }
}

function fareDoubler(num) {
  return createFareMultiplier(2)(num)
}

function fareTripler(num) {
  return createFareMultiplier(3)(num)
}

function selectDifferentDrivers(arr, func) {
  return func(arr)
}