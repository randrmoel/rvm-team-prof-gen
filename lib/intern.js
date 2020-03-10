const Employee = require('../lib/employee');

// create Intern class from base employee
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);

        if (typeof school !== "string" || !school.trim().length) {
            throw new Error("Expected parameter 'school' to be a non-empty string");
        }

        // add school attribute
        this.school = school;

    }

    // create getSchool method to return school
    getSchool(){
        return this.school;
    }

    // create getRole method to return Intern type
    getRole(){
        return "Intern"
    }
}

// Make Intern class available
module.exports = Intern;
