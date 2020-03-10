const Employee = require('../lib/employee');

// create engineer class from employee, add github
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);

        if (typeof github !== "string" || !github.trim().length) {
            throw new Error("Expected parameter 'GithubUsername' to be a non-empty string");
        }

        // add github variable
        this.github = github;

    }

    // return github name
    getGithub(){
        return this.github;
    }

    // return role for Engineer, hard coded
    getRole(){
        return "Engineer"
    }
}

// make class available
module.exports = Engineer;
