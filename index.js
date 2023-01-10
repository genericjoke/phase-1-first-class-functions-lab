// Code your solution in this file!
const returnFirstTwoDrivers = (divers) => ([divers[0], divers[1]]);
const returnLastTwoDrivers = (divers) => ([divers[divers.length - 2], divers[divers.length - 1]]);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(integ) {
    return function mult(fare) { return fare * integ; };
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(arry, funcyTown){
    return funcyTown(arry);
}