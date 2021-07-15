let statModal = {
    isValid: false,
    minValue: null,
    maxValue: null,
    sum: null,
    median: null,
    mean: null,
    variance: null,
    standardDeviation: null,
    standardError: null
}

let arrLength = 0;
//Check whether is a number or not
const isNum = (arr) => {
    return arr.map(a => !isNaN(a) && a !== null && a != undefined && a !== '').every(v => v === true);
}

const CalNumModal = (arr, isPopulation = false) => {
    // console.log(arr)
    const isValid = arr && isNum(arr);
    if (isValid) {
        arrLength = arr.length;
        const sortedArr = arr.sort((a, b) => (a - b));
        statModal.isValid = isValid;
        statModal.minValue = sortedArr[0];
        statModal.maxValue = sortedArr[sortedArr.length - 1];
        statModal.sum = sum(arr);
        statModal.median = median(sortedArr);
        statModal.mean = mean(sortedArr);
        statModal.variance = variance(sortedArr, isPopulation);
        statModal.standardDeviation = sd(sortedArr);
        statModal.standardError = se(sortedArr);
    }
    return statModal;
}

//calculate the sum of a number array
const sum = (arr) => {
    return parseFloat(arr.reduce((acc, val) => (acc + val), 0));
}

//calculate the mean of a number array
const mean = (arr) => {
    return parseFloat(statModal.sum / arrLength);
}

//calculate the variance of a number array
const variance = (arr, isPopulation) => {
    const v = parseFloat(arr.reduce((acc, val) => (acc + ((val - statModal.mean) ** 2)), 0));
    const len = isPopulation ? arrLength : arrLength - 1;
    return parseFloat(v / len);
}

const median = (arr) => {
    var median = 0;
    if (arr.length % 2 == 1) {
        median = arr[(arr.length + 1) / 2 - 1];
    }
    else {
        median = (1 * arr[arr.length / 2 - 1] + 1 * arr[arr.length / 2]) / 2;
    }
    return median;
}
//Standard deviation
const sd = (arr) => statModal.variance ? Math.sqrt(statModal.variance) : null;
//Standard error
const se = (arr) => statModal.variance ? Math.sqrt(statModal.variance / (arr.length - 1)) : null;

module.exports = { CalNumModal}