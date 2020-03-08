const Employee = require('../lib/employee');

class Engineer extends Employee{
    constructor(name, id, email, GithubUsername){
        super(name, id, email);

        if (typeof GithubUsername !== "string" || !GithubUsername.trim().length) {
            throw new Error("Expected parameter 'GithubUsername' to be a non-empty string");
        }

        this.GithubUsername = GithubUsername;

    }

    getGithub(){
        return this.GithubUsername;
    }

    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;