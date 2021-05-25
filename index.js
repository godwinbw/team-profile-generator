const interview = require("./src/interview.js");

// if we pass in FALSE to interview function, we get test data (for testing / development)
// if we pass in TRUE we get user input using inquirer functionality

interview(false).then(function (answers) {
  console.log(answers);
});
