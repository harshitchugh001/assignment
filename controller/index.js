let sampledata = [
    {
        "name": "Abhishek",
        "salary": 145000,
        "currency": "USD",
        "department": "Engineering",
        "sub_department": "Platform"
    },
    {
        "name": "Anurag",
        "salary": 90000,
        "currency": "USD",
        "department": "Banking",
        "on_contract": true,
        "sub_department": "Loan"
    },
    {
        "name": "Himani",
        "salary": 240000,
        "currency": "USD",
        "department": "Engineering",
        "sub_department": "Platform"
    },
    {
        "name": "Yatendra",
        "salary": 30,
        "currency": "USD",
        "department": "Operations",
        "sub_department": "CustomerOnboarding"
    },
    {
        "name": "Ragini",
        "salary": 30,
        "currency": "USD",
        "department": "Engineering",
        "sub_department": "sample"
    },
    {
        "name": "Nikhil",
        "salary": 110000,
        "currency": "USD",
        "on_contract": true,
        "department": "Engineering",
        "sub_department": "Platform"
    },
    {
        "name": "Guljit",
        "salary": 30,
        "currency": "USD",
        "department": "Administration",
        "sub_department": "Agriculture"
    },
    {
        "name": "Himanshu",
        "salary": 70000,
        "currency": "EUR",
        "department": "Operations",
        "sub_department": "CustomerOnboarding"
    },
    {
        "name": "Anupam",
        "salary": 200000000,
        "currency": "INR",
        "department": "Engineering",
        "sub_department": "Platform"
    }
];


exports.addnewrecord = async (req, res) => {
    console.log("hlo");
    
    console.log(req.body);
    let { name, salary, currency, department, sub_department, on_contract } = req.body;
    let newRecord = {
        name,
        salary,
        currency,
        department,
        sub_department,
        on_contract
    };
    sampledata.push(newRecord);
    res.json(newRecord);

}


exports.showrecord = async (req, res) => {
    sampledata.forEach((obj, index) => {
        obj.index = index;
    });

    // let mappedData = sampledata.map(entry => {
    //     return {
    //         index: entry.index,
    //         name: entry.name,
    //         salary: entry.salary,
    //         currency: entry.currency,
    //         department: entry.department,
    //         sub_department: entry.sub_department,
    //         on_contract: entry.on_contract
    //     };
    // });

    res.json(sampledata);
};

exports.deleterecord = async (req, res) => {
    let { index } = req.body;
    sampledata.splice(index, 1);
    res.json(sampledata);
}



exports.getstats = function(req, res) {
    let salaries = sampledata.map(entry => parseInt(entry.salary));
    let minSalary = Math.min(...salaries);
    let maxSalary = Math.max(...salaries);
    let totalSalary = salaries.reduce((acc, curr) => acc + curr, 0);
    let meanSalary = totalSalary / sampledata.length;

    
    res.json({
        minSalary,
        maxSalary,
        meanSalary
    });
};


exports.calculateContractSalaryStats = function(req,res){
    const contractEntries = sampledata.filter(entry => entry.on_contract === true);
    if (contractEntries.length === 0) {
        return {
            minSalary: null,
            maxSalary: null,
            meanSalary: null
        };
    }
    const salaries = contractEntries.map(entry => entry.salary);
    const minSalary = Math.min(...salaries);
    const maxSalary = Math.max(...salaries);
    const totalSalary = salaries.reduce((acc, curr) => acc + curr, 0);
    const meanSalary = totalSalary / contractEntries.length;

    res.json( {
        minSalary,
        maxSalary,
        meanSalary
    });

}

exports.calculateDepartmentSalaryStats=function(req, res){
    const departmentStats = {};

    sampledata.forEach(entry => {
        const { department, salary } = entry;
        if (!departmentStats[department]) {
            departmentStats[department] = {
                minSalary: Infinity,
                maxSalary: -Infinity,
                totalSalary: 0,
                count: 0
            };
        }

        departmentStats[department].minSalary = Math.min(departmentStats[department].minSalary, salary);
        departmentStats[department].maxSalary = Math.max(departmentStats[department].maxSalary, salary);
        departmentStats[department].totalSalary += salary;
        departmentStats[department].count++;
    });

    for (let department in departmentStats) {
        departmentStats[department].meanSalary = departmentStats[department].totalSalary / departmentStats[department].count;
    }

    res.json( departmentStats);

}

exports.fetchSalarySumByDepartmentAndSubDepartmentStats = function ( req,res){
    let result = {};

    sampledata.forEach(entry => {
        let key = entry.department + '-' + entry.sub_department;

        if (!result.hasOwnProperty(key)) {
            result[key] = 0;
        }

        result[key] += parseInt(entry.salary);
    });

    res.json( result);

}





















