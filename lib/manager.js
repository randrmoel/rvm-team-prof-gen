const Employee = require('../lib/employee');

// Create manager class from employee
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);

        if (typeof officeNumber !== "number" || isNaN(officeNumber) || officeNumber <= 0) {
            throw new Error("Expected parameter 'officeNumber' to be a non-empty number");
        }
        // Add officeNumber attribute
        this.officeNumber = officeNumber;

    }

    // add getOfficeNumber method
    getOfficeNumber(){
        return this.officeNumber;
    }

    // Add get role method, hard coded as "Manager"
    getRole(){
        return "Manager"
    }
}

// make manager class available.
module.exports = Manager;
