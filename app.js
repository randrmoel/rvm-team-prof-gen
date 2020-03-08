const fs = require("fs");
const inq = require("inquirer");
const mngr = require("./lib/manager");
const engr = require("./lib/engineer");
const intr = require("./lib/intern");

function concatJSON(json1, json1){
    return JSON.stringify(JSON.parse(json1).concat(JSON.parse(json2)));
}

var teamList = [];

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

async function addMembers(){
    ans2 = await inq
    .prompt([
        {
            name:"teamMemType",
            message: "Please select a team member type",
            default: "Engineer",
            type: "list",
            choices: ["Manager", "Engineer", "Intern", "Done"]
        },
        {
            name:"name",
            when: doneCheck,
            message: "Please enter your name",
            validate: validStr
        },
        {
            name:"id",
            when: doneCheck,
            type:"number",
            message:"Please enter an ID number",
            validate: validNum
        },
        {
            name: "email",
            when: doneCheck,
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
            name: "officenum",
            when: mngrCheck,
            type:"number",
            message: "Please enter your office number",
            validate: validNum
        },
        {
            name:"school",
            when:intrCheck,
            message: "Please enter your school",
            validate: validStr
        }
    ])
    if(ans2.teamMemType !== "Done"){
        teamList.push(ans2);
        console.log("teamList:");
        console.log(teamList)
        addMembers();
    } else {
        console.log("at function return");
        console.log(teamList);
        return teamList;
    }
}
    out = addMembers();
    console.log(out);
    console.log("After return");
    console.log(teamList);