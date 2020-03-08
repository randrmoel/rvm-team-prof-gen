const Intern = require('../lib/Intern');
describe("Intern", () =>{
    describe("Initialization", ()=>{
        it("should create an Intern object with a name, id, email, school", () =>{
            const intn = new Intern("Fred Smith", 123, "fred.smith@abccorp.com", "Orlando University");
            expect(intn.name).toEqual("Fred Smith");
            expect(intn.id).toEqual(123);
            expect(intn.email).toEqual("fred.smith@abccorp.com");
            expect(intn.school).toEqual("Orlando University");
            });  

        it("should throw an error if the parameters are empty", ()=>{
            const cb = () => new Intern();
            expect(cb).toThrow();
        });
        
        it("should throw an error if the id isn't a positive number", ()=>{
            const cb = () => new Intern("Fred Smith", "abc", "fred.smith@abccorp.com", "Orlando University");
            const err = new Error("Expected a non-negative number");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if there isn't an email", () =>{
            const cb = () => new Intern("Fred Smith", 123, "" ,"Orlando University");
            const err = new Error("Expected parameter 'email' to be a non-empty string in the right format");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if the email doesn't conform", () =>{
            const cb = () => new Intern("Fred Smith", 123, "fred.smith.abccorp.com", "Orlando University");
            const err = new Error("Expected parameter 'email' to be a non-empty string in the right format");
            expect(cb).toThrowError(err);
        });
    });
    describe("getName", () =>{
        it("should return name of Intern", ()=>{
            const intn = new Intern("Fred Smith", 123, "fred.smith@abccorp.com","Orlando University");
            expect(intn.getName()).toEqual("Fred Smith");
        });
    });
    describe("getId", () =>{
        it("should return ID of Intern", () =>{
            const intn = new Intern("Fred Smith", 123, "fred.smith@abccorp.com","Orlando University");
            expect(intn.getId()).toEqual(123);
        })
    });
    describe("getEmail", () =>{
        it("should return email of Intern", () =>{
            const intn = new Intern("Fred Smith", 123, "fred.smith@abccorp.com", "Orlando University");
            expect(intn.getEmail()).toEqual("fred.smith@abccorp.com");
        })
    });

    describe("getSchool", () =>{
        it("should return the school of the Intern", () =>{
            const intn = new Intern("Fred Smith", 123, "fred.smith@abccorp.com", "Orlando University");
            expect(intn.getSchool()).toEqual("Orlando University");
        })
    });

    describe("getRole", () =>{
        it("should return role of Intern", () =>{
            const intn = new Intern("Fred Smith", 123, "fred.smith@abccorp.com", "Orlando University");
            expect(intn.getRole()).toEqual("Intern");
        });
    })
});