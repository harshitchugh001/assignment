const express = require('express');
const {
    showrecord,
    addnewrecord,
    deleterecord,
    getstats,
    calculateContractSalaryStats,
    calculateDepartmentSalaryStats,
    fetchSalarySumByDepartmentAndSubDepartmentStats
} = require('../controller');

const router = express.Router();

router.get('/', showrecord);


router.post('/addrecord', addnewrecord);


router.post('/deleterecord', deleterecord);


router.get('/getstats', getstats);


router.get('/calculateContractSalaryStats', calculateContractSalaryStats);


router.get('/calculateDepartmentSalaryStats', calculateDepartmentSalaryStats);


router.get('/fetchSalarySumByDepartmentAndSubDepartmentStats', fetchSalarySumByDepartmentAndSubDepartmentStats);

module.exports = router;



