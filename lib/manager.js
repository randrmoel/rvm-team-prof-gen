const Employee = require('../lib/employee');

class Manager extends Employee{
    constructor(name, id, email, officenum){
        super(name, id, email);

        if (typeof officenum !== "number" || isNaN(officenum) || officenum <= 0) {
            throw new Error("Expected parameter 'officenum' to be a non-empty number");
        }

        this.officenum = officenum;
        // There can only be one manager per team
        Manager.nums++;
        this.nums = Manager.nums;

    }

    getOfficeNum(){
        return this.officenum;
    }

    getRole(){
        return "Manager"
    }
}

module.exports = Manager;