const fs = require("fs");
/*const util = require("util"); */
const inq = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const render = require("./lib/htmlRenderer")

var teamList = [];

// this are all for use with the "when" keyword
const validStr = async (inName) =>{
    if(inName.length===0){
        return "Name cannot be blank"
    }
    return true;
}

const validNum = async(inNum) =>{
    if(isNaN(inNum) || inNum<=0){
        return "ID or Room Number not valid"
    }
    return true;
}

const validEmail = async(inEmail) =>{
    const re = /\S+@\S+\.\S+/;
    if (typeof inEmail !== "string" || !inEmail.trim().length || !re.test(inEmail)){
        return "Not a valid email address"
    }
    return true;    
}

const mngrCheck = async(ans) =>{
    if(ans.teamMemType === "Manager") return true
    else return false
}

const engrCheck = async(ans) =>{
    if(ans.teamMemType === "Engineer") return true
    else return false
}

const intrCheck = async(ans) =>{
    if(ans.teamMemType === "Intern") return true
    else return false
}

const doneCheck = async(ans) => {
    if(ans.teamMemType === "Done") return false
    else return true
}

const QManager = [{
    name:"name", 
    when: doneCheck,
    type:"input",
    message: "Please enter Manager's name",
    validate: validStr
},
{
    name:"id",
    when: doneCheck,
    type:"number",
    message:"Please enter Manager ID number",
    validate: validNum
},
{
    name: "email",
    when: doneCheck,
    message: "Please enter a valid email address",
    validate: validEmail
},
{
    name: "officenum",
    type:"number",
    message: "Please enter your office number",
}]

const QMembers = [{
    name:"teamMemType",
    message: "Please select a team member type",
    default: "Engineer",
    type: "list",
    choices: ["Engineer", "Intern"]
},
{
    name:"name", 
    type:"input",
    message: "Please enter your name",
    validate: validStr
},
{
    name:"id",
    type:"number",
    message:"Please enter an ID number",
    validate: validNum
},
{
    name: "email",
    message: "Please enter a valid email address",
    validate: validEmail
},
{
    name:"github",
    when: engrCheck,
    type:"input",
    message:"Please enter your github username",
    validate: validStr
},
{
    name:"school",
    when:intrCheck,
    message: "Please enter your school",
    validate: validStr
}]

const QDone = 
[
    {
        name:"done",
        message: "Add another team member?",
        default: "Y",
        type:"confirm"
    }
]

function AddMember(){
inq
    .prompt(QMembers).then(function(ans2){
        switch(ans2.teamMemType){
            case "Engineer":
                engr = new Engineer(ans2.name, ans2.id, ans2.email, ans2.github);
                teamList.push(engr);
                break;
            case "Intern":
                intr = new Intern(ans2.name, ans2.id, ans2.email, ans2.school);
                teamList.push(intr);
                break;
        }

        MakeChoice();
    });
}

function AddManager(){
    inq
    .prompt(QManager)
    .then(function(ans3){
        mgr = new Manager(ans3.name, ans3.id, ans3.email,ans3.officenum);
        teamList.push(mgr);
        MakeChoice();
    })
}

function MakeChoice(){
    inq
    .prompt(QDone)
    .then(function(ans4){
        if(!ans4.done){
            BuildHTML();
        } else AddMember();
    });
};

addMgr = false;
function MakeTeam(){
    if(!addMgr) {
        addMgr = true;
        AddManager();
    }
    else {
        AddMember();
    }
}

function BuildHTML(){
    out = render(teamList);
    fs.writeFile('./output/team.html', out, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    
}
MakeTeam();