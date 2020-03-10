const Employee = require('../lib/employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);

        if (typeof github !== "string" || !github.trim().length) {
            throw new Error("Expected parameter 'GithubUsername' to be a non-empty string");
        }

        this.github = github;

    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;