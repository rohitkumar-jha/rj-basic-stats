let objModal = {
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

let objLength = 0;
//Check whether is a number or not
const isNum = (arr) => {
    return arr.map(a => !isNaN(a) && a !== null && a != undefined && a !== '').every(v => v === true);
}

const CalObjModal = (obj, col, isPopulation = false) => {
    if (obj) {
        const arr = obj.map(x => x[col]);
        //console.log(arr1);
        const isValid = arr && isNum(arr);
        if (isValid) {
            objLength = arr.length;
            const sortedArr = arr.sort((a, b) => (a - b));
            objModal.isValid = isValid;
            objModal.minValue = sortedArr[0];
            objModal.maxValue = sortedArr[sortedArr.length - 1];
            objModal.sum = sum(arr);
            objModal.median = median(sortedArr);
            objModal.mean = mean(sortedArr);
            objModal.variance = variance(sortedArr, isPopulation);
            objModal.standardDeviation = sd(sortedArr);
            objModal.standardError = se(sortedArr);
        }
        return objModal;
    } else {
        return objModal;
    }

}

//calculate the sum of a number array
const sum = (arr) => {
    return parseFloat(arr.reduce((acc, val) => (acc + val), 0));
}

//calculate the mean of a number array
const mean = (arr) => {
    return parseFloat(objModal.sum / objLength);
}

//calculate the variance of a number array
const variance = (arr, isPopulation) => {
    const v = parseFloat(arr.reduce((acc, val) => (acc + ((val - objModal.mean) ** 2)), 0));
    const len = isPopulation ? objLength : objLength - 1;
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
const sd = (arr) => objModal.variance ? Math.sqrt(objModal.variance) : null;
//Standard error
const se = (arr) => objModal.variance ? Math.sqrt(objModal.variance / (arr.length - 1)) : null;

module.exports = { CalObjModal }