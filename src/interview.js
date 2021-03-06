const inquirer = require("inquirer");
const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");

// this function will ensure that a question has an answer provided by the user
const validateInputEntry = function (input) {
  if (input) {
    return true;
  } else {
    console.log("This entry is required.  Try again.");
    return false;
  }
};

// MANAGER questions
const managerQuestions = [
  {
    name: "name",
    type: "input",
    message: "What is the manager's name (Required) ?",
    validate: validateInputEntry,
  },
  {
    name: "id",
    type: "input",
    message: "What is the manager's employee id (Required) ?",
    validate: validateInputEntry,
  },
  {
    name: "email",
    type: "input",
    message: "What is the manager's email (Required) ?",
    validate: validateInputEntry,
  },
  {
    name: "officenumber",
    type: "input",
    message: "What is the manager's office number (Required) ?",
    validate: validateInputEntry,
  },
];

const promptManager = function (teamData) {
  console.log(`
=================
Add a New Manager
=================
`);
  if (!teamData.managers) {
    teamData.managers = [];
  }
  return inquirer.prompt(managerQuestions).then(function (answer) {
    // create a new manager object
    teamData.managers.push(
      new Manager(answer.name, answer.id, answer.email, answer.officenumber)
    );
    return teamData;
  });
};

// ENGINEER questions

const engineerQuestions = [
  {
    name: "name",
    type: "input",
    message: "What is the engineer's name (Required) ?",
    validate: validateInputEntry,
  },
  {
    name: "id",
    type: "input",
    message: "What is the engineer's employee id (Required) ?",
    validate: validateInputEntry,
  },
  {
    name: "email",
    type: "input",
    message: "What is the engineer's email (Required) ?",
    validate: validateInputEntry,
  },
  {
    name: "github",
    type: "input",
    message: "What is the engineer's github username (Required) ?",
    validate: validateInputEntry,
  },
];

const promptEngineer = function (teamData) {
  console.log(`
==================
Add a New Engineer
==================
`);
  if (!teamData.engineers) {
    teamData.engineers = [];
  }
  return inquirer.prompt(engineerQuestions).then(function (answer) {
    teamData.engineers.push(
      new Engineer(answer.name, answer.id, answer.email, answer.github)
    );
    return teamData;
  });
};

// MANAGER questions
const internQuestions = [
  {
    name: "name",
    type: "input",
    message: "What is the intern's name (Required) ?",
    validate: validateInputEntry,
  },
  {
    name: "id",
    type: "input",
    message: "What is the intern's employee id (Required) ?",
    validate: validateInputEntry,
  },
  {
    name: "email",
    type: "input",
    message: "What is the intern's email (Required) ?",
    validate: validateInputEntry,
  },
  {
    name: "school",
    type: "input",
    message: "What is the interns's school (Required) ?",
    validate: validateInputEntry,
  },
];

const promptIntern = function (teamData) {
  console.log(`
================
Add a New Intern
================
`);
  if (!teamData.interns) {
    teamData.interns = [];
  }
  return inquirer.prompt(internQuestions).then(function (answer) {
    teamData.interns.push(
      new Intern(answer.name, answer.id, answer.email, answer.school)
    );
    return teamData;
  });
};

// Selection questions
const selectionQuestions = [
  {
    type: "list",
    message: "What would you like to do?",
    name: "selection",
    choices: ["Add an engineer", "Add an intern", "Finish building my team"],
  },
];

const promptSelection = function (teamData) {
  return inquirer.prompt(selectionQuestions).then(function (answer) {
    if (answer.selection === "Add an engineer") {
      return promptEngineer(teamData).then(function () {
        return true;
      });
    } else if (answer.selection === "Add an intern") {
      return promptIntern(teamData).then(function () {
        return true;
      });
    } else {
      return false;
    }
  });
};

// TEST DATA
const getTestData = function () {
  var testData = [];
  testData.managers = [];
  testData.engineers = [];
  testData.interns = [];

  // add the manager
  testData.managers.push(
    new Manager("Rocky Balboa", "101", "rocky@rock.it", "367-5309")
  );

  // add engineers
  testData.engineers.push(
    new Engineer("Thomas Edison", "102", "light@lettheirbe.com", "teddyboy")
  );
  testData.engineers.push(
    new Engineer("Nikola Tesla", "108", "nikola@crazy.net", "sparky")
  );
  testData.engineers.push(
    new Engineer("Eli Whitney", "112", "eli@oldguy.net", "cottonboy")
  );

  // add interns
  testData.interns.push(
    new Intern("Chadwick Worthington", "201", "ching@chingching.com", "Harvard")
  );
  testData.interns.push(
    new Intern(
      "Sally McDownsy",
      "202",
      "sallygirl@acc.edu",
      "Dusty Culvert Communicty College"
    )
  );

  // now return the data
  return testData;
};

//
// Interview Function
//
// calling interview function with value TRUE will use inquirier prompts to collect user data
// calling intervie function with value FALSE will supply test data

const interview = function (useRealData) {
  var teamData = [];

  if (!useRealData) {
    // we want to use test data, just return a promise that resolves with test data
    return new Promise((resolve, reject) => {
      resolve(getTestData());
    });
  } else {
    // we want to use data collected from the user, use the prompt functions to return data
    return promptManager(teamData).then(async function () {
      do {
        keepAdding = await promptSelection(teamData);
      } while (keepAdding);
      return teamData;
    });
  }
};

/*
var teamData = [];

promptManager(teamData).then(async function () {
  do {
    keepAdding = await promptSelection(teamData);
  } while (keepAdding);
  console.log("finished adding data");
  console.log(teamData);
});


var testData = getTestData();
console.log(testData);

*/

module.exports = interview;
