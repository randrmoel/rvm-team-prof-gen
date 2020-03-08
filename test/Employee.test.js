const Employee = require('../lib/employee');
describe("Employee", () =>{
    describe("Initialization", ()=>{
        it("should create an employee object with a name, id, and email", () =>{
            const empl = new Employee("Fred Smith", 123, "fred.smith@abccorp.com");
            expect(empl.name).toEqual("Fred Smith");
            expect(empl.id).toEqual(123);
            expect(empl.email).toEqual("fred.smith@abccorp.com");
            });  

        it("should throw an error if the parameters are empty", ()=>{
            const cb = () => new Employee();
            expect(cb).toThrow();
        });
        
        it("should throw an error if the id isn't a positive number", ()=>{
            const cb = () => new Employee("Fred Smith", "abc", "fred.smith@abccorp.com");
            const err = new Error("Expected a non-negative number");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if there isn't an email", () =>{
            const cb = () => new Employee("Fred Smith", 123, );
            const err = new Error("Expected parameter 'email' to be a non-empty string in the right format");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if the email doesn't conform", () =>{
            const cb = () => new Employee("Fred Smith", 123, "fred.smith.abccorp.com" );
            const err = new Error("Expected parameter 'email' to be a non-empty string in the right format");
            expect(cb).toThrowError(err);
        });
    });
    describe("getName", () =>{
        it("should return name of employee", ()=>{
            const empl = new Employee("Fred Smith", 123, "fred.smith@abccorp.com");
            expect(empl.getName()).toEqual("Fred Smith");
        });
    });
    describe("getId", () =>{
        it("should return ID of employee", () =>{
            const empl = new Employee("Fred Smith", 123, "fred.smith@abccorp.com");
            expect(empl.getId()).toEqual(123);
        })
    });
    describe("getEmail", () =>{
        it("should return email of employee", () =>{
            const empl = new Employee("Fred Smith", 123, "fred.smith@abccorp.com");
            expect(empl.getEmail()).toEqual("fred.smith@abccorp.com");
        })
    });

    describe("getRole", () =>{
        it("should return role of Employee", () =>{
            const empl = new Employee("Fred Smith", 123, "fred.smith@abccorp.com");
            expect(empl.getRole()).toEqual("Employee");
        });
    })
});