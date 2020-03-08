const Manager = require('../lib/Manager');
describe("Manager", () =>{
    describe("Initialization", ()=>{
        it("should create an Manager object with a name, id, email, officenum", () =>{
            const mngr = new Manager("Fred Smith", 123, "fred.smith@abccorp.com", 999);
            expect(mngr.name).toEqual("Fred Smith");
            expect(mngr.id).toEqual(123);
            expect(mngr.email).toEqual("fred.smith@abccorp.com");
            expect(mngr.officenum).toEqual(999);
            });  

        it("should throw an error if the parameters are empty", ()=>{
            const cb = () => new Manager();
            expect(cb).toThrow();
        });
        
        it("should throw an error if the id isn't a positive number", ()=>{
            const cb = () => new Manager("Fred Smith", "abc", "fred.smith@abccorp.com", 999);
            const err = new Error("Expected a non-negative number");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if there isn't an email", () =>{
            const cb = () => new Manager("Fred Smith", 123, "" ,999);
            const err = new Error("Expected parameter 'email' to be a non-empty string in the right format");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if the email doesn't conform", () =>{
            const cb = () => new Manager("Fred Smith", 123, "fred.smith.abccorp.com", 999);
            const err = new Error("Expected parameter 'email' to be a non-empty string in the right format");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if the office number is missing or an non-number", () =>{
            const cb = () => new Manager("Fred Smith", 123, "fred.smith@abccorp.com", "aaa");
            const err = new Error("Expected parameter 'officenum' to be a non-empty number");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if the office number is missing or an non-number", () =>{
            const cb = () => new Manager("Fred Smith", 123, "fred.smith@abccorp.com", "");
            const err = new Error("Expected parameter 'officenum' to be a non-empty number");
            expect(cb).toThrowError(err);
        });


    });

    describe("getName", () =>{
        it("should return name of Manager", ()=>{
            const mngr = new Manager("Fred Smith", 123, "fred.smith@abccorp.com",999);
            expect(mngr.getName()).toEqual("Fred Smith");
        });
    });
    describe("getId", () =>{
        it("should return ID of Manager", () =>{
            const mngr = new Manager("Fred Smith", 123, "fred.smith@abccorp.com",999);
            expect(mngr.getId()).toEqual(123);
        })
    });
    describe("getEmail", () =>{
        it("should return email of Manager", () =>{
            const mngr = new Manager("Fred Smith", 123, "fred.smith@abccorp.com", 999);
            expect(mngr.getEmail()).toEqual("fred.smith@abccorp.com");
        })
    });

    describe("getOfficeNum", () =>{
        it("should return the office number of the Manager", () =>{
            const mngr = new Manager("Fred Smith", 123, "fred.smith@abccorp.com", 999);
            expect(mngr.getOfficeNum()).toEqual(999);
        })
    });

    describe("getRole", () =>{
        it("should return role of Manager", () =>{
            const mngr = new Manager("Fred Smith", 123, "fred.smith@abccorp.com", 999);
            expect(mngr.getRole()).toEqual("Manager");
        });
    })
});