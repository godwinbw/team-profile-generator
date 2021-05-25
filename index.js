const interview = require("./src/interview.js");
const generateHtml = require("./src/generateHtml.js");

// if we pass in FALSE to interview function, we get test data (for testing / development)
// if we pass in TRUE we get user input using inquirer functionality

interview(false).then(function (teamData) {
  console.log(teamData);
  generateHtml(teamData).then((teamHtml) => {
    console.log(teamHtml);
  });
});
