const Engineer = require('../lib/engineer');
describe("Engineer", () =>{
    describe("Initialization", ()=>{
        it("should create an engineer object with a name, id, email, GitHubUsername", () =>{
            const eng = new Engineer("Fred Smith", 123, "fred.smith@abccorp.com", "fsmith");
            expect(eng.name).toEqual("Fred Smith");
            expect(eng.id).toEqual(123);
            expect(eng.email).toEqual("fred.smith@abccorp.com");
            expect(eng.GithubUsername).toEqual("fsmith");
            });  

        it("should throw an error if the parameters are empty", ()=>{
            const cb = () => new Engineer();
            expect(cb).toThrow();
        });
        
        it("should throw an error if the id isn't a positive number", ()=>{
            const cb = () => new Engineer("Fred Smith", "abc", "fred.smith@abccorp.com", "fsmith");
            const err = new Error("Expected a non-negative number");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if there isn't an email", () =>{
            const cb = () => new Engineer("Fred Smith", 123, "" ,"fsmith");
            const err = new Error("Expected parameter 'email' to be a non-empty string in the right format");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if the email doesn't conform", () =>{
            const cb = () => new Engineer("Fred Smith", 123, "fred.smith.abccorp.com", "fsmith");
            const err = new Error("Expected parameter 'email' to be a non-empty string in the right format");
            expect(cb).toThrowError(err);
        });
    });
    describe("getName", () =>{
        it("should return name of Engineer", ()=>{
            const eng = new Engineer("Fred Smith", 123, "fred.smith@abccorp.com","fsmith");
            expect(eng.getName()).toEqual("Fred Smith");
        });
    });
    describe("getId", () =>{
        it("should return ID of Engineer", () =>{
            const eng = new Engineer("Fred Smith", 123, "fred.smith@abccorp.com","fsmith");
            expect(eng.getId()).toEqual(123);
        })
    });
    describe("getEmail", () =>{
        it("should return email of Engineer", () =>{
            const eng = new Engineer("Fred Smith", 123, "fred.smith@abccorp.com", "fsmith");
            expect(eng.getEmail()).toEqual("fred.smith@abccorp.com");
        })
    });

    describe("getGithub", () =>{
        it("should return GithubUsername of Engineer", () =>{
            const eng = new Engineer("Fred Smith", 123, "fred.smith@abccorp.com", "fsmith");
            expect(eng.getGithub()).toEqual("fsmith");
        })
    });

    describe("getRole", () =>{
        it("should return role of Engineer", () =>{
            const eng = new Engineer("Fred Smith", 123, "fred.smith@abccorp.com", "fsmith");
            expect(eng.getRole()).toEqual("Engineer");
        });
    })
});