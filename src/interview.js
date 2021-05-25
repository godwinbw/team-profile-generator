const inquirer = require("inquirer");

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
    name: "employee-id",
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
    name: "office-number",
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
  return inquirer.prompt(managerQuestions).then(function (newManager) {
    teamData.managers.push(newManager);
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
    name: "employee-id",
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
    name: "github-username",
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
  return inquirer.prompt(engineerQuestions).then(function (newEngineer) {
    teamData.engineers.push(newEngineer);
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
    name: "employee-id",
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
  return inquirer.prompt(internQuestions).then(function (newIntern) {
    teamData.interns.push(newIntern);
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
      return promptEngineer(teamData).then(function (engineerAnswers) {
        return true;
      });
    } else if (answer.selection === "Add an intern") {
      return promptIntern(teamData).then(function (internAnswers) {
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
  testData.managers.push({
    name: "Rocky Balboa",
    "employee-id": "101",
    email: "rocky@rock.it",
    "office-number": "367-4309",
  });

  // add engineer 1
  testData.engineers.push({
    name: "thomas edison",
    "employee-id": "102",
    email: "light@lettherebe.com",
    "github-username": "teddyboy",
  });

  // add engineer 2
  testData.engineers.push({
    name: "thomas edison",
    "employee-id": "102",
    email: "light@lettherebe.com",
    "github-username": "teddyboy",
  });

  // add intern 1
  testData.interns.push({
    name: "chadwick worthington",
    "employee-id": "201",
    email: "ching@chingching.com",
    school: "harvard",
  });

  // add intern 2
  testData.interns.push({
    name: "sally mcdownsy",
    "employee-id": "202",
    email: "sallygirl",
    school: "dusty culvert community college",
  });

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
