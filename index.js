const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const HTML = require("./src/page-template");

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const teamMembers = [];
const idArray = [];

start();
function start() {
  createManager();
  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is your managers name?",
        },
        {
          type: "input",
          name: "managerId",
          message: "What is your managers ID?",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is your managers email?",
        },
        {
          type: "input",
          name: "managerOfficeNum",
          message: "What is your managers office number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNum
        );
        idArray.push(answers.id);
        teamMembers.push(manager);
        createMembers();
      });
  }

  function createMembers() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "choice",
          message: "Who would you like to create next?",
          choices: ["Engineer", "Intern", "I am Done"],
        },
      ])
      .then((answer) => {
        if (answer.choice === "Engineer") {
          createEngineer();
        } else if (answer.choice === "Intern") {
          createIntern();
        } else {
          build();
        }
      });
  }

  function createEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is your engineer's name?",
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is your engineer's ID?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is your engineer's email?",
        },
        {
          type: "input",
          name: "engineerOfficeNum",
          message: "What is your engineer's office number?",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerOfficeNum
        );
        idArray.push(answers.id);
        teamMembers.push(engineer);
        createMembers();
      });
  }

  function createIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is your intern's name?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is your intern's ID?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is your intern's email?",
        },
        {
          type: "input",
          name: "internOfficeNum",
          message: "What is your intern's office number?",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internOfficeNum
        );
        idArray.push(answers.id);
        teamMembers.push(intern);
        createMembers();
      });
  }
}

function build() {
  fs.writeFile("team.html", HTML(teamMembers), (err) => {
    err ? console.log(err) : console.log("Your HTML file has been created!");
  });
}
