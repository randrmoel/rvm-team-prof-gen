class Employee{
    constructor(name, id, email){
/* class test function failed with these more stringent requirements */
/*     if (typeof name !== "string" || !name.trim().length) {
        throw new Error("Expected parameter 'name' to be a non-empty string");
      }
    
    if(typeof id !== 'number' || isNaN(id) || id <= 0){
        throw new Error("Expected a non-negative number");
    }

    const re = /\S+@\S+\.\S+/;
    if (typeof email !== "string" || !email.trim().length || !re.test(email)){
        throw new Error("Expected parameter 'email' to be a non-empty string in the right format");
      }
 */
    // Create name, id, and email variables to create base class
    this.name = name;
    this.id = id;
    this.email = email;
    }

    // method to return name
    getName(){
        return this.name;
    }

    // method to return ID
    getId(){
        return this.id;
    }

    //method to return email
    getEmail(){
        return this.email;
    }

    //method to return Employee, hard coded
    getRole(){
        return "Employee"
    }
}
//Make class available
module.exports = Employee;
