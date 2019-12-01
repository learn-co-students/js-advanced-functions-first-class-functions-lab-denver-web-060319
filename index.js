function returnFirstTwoDrivers(drivers) {
    return (drivers.slice(0,2));  
}

function returnLastTwoDrivers(drivers){
    return (drivers.slice(-2))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare){
        return int * fare
    }
}

function fareDoubler(int1){
    return createFareMultiplier(2)(int1)
}

function fareTripler(int1){
    return createFareMultiplier(3)(int1)
}

function selectDifferentDrivers (drivers, fun) {
    return fun(drivers)
} 