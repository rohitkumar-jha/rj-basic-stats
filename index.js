const bl = require('./logics/basicLogic');
const ol = require('./logics/objectLogic');

const CalNumModal = (arr, isPopulation = false) => (bl.CalNumModal(arr, isPopulation));

const CalObjModal = (arr, col, isPopulation = false) => (ol.CalObjModal(arr, col, isPopulation));

module.exports = { CalNumModal, CalObjModal }