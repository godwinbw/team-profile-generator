const interview = require("./src/interview.js");
const generateHtml = require("./src/generateHtml.js");
const putHtmlAndCssInDestFolder = require("./src/putHtmlAndCssInDestFolder");

// if we pass in FALSE to interview function, we get test data (for testing / development)
// if we pass in TRUE we get user input using inquirer functionality

interview(false)
  .then(function (teamData) {
    //console.log(teamData);
    generateHtml(teamData)
      .then((teamHtml) => {
        //console.log(teamHtml);
        putHtmlAndCssInDestFolder(teamHtml)
          .then(() => {
            console.log("--SUCCESS! Team html and css are in dest directory");
          })
          .catch((err) => {
            console.log(
              "--ERROR : there was an error saving the HTML and CSS to the dest directory!"
            );
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(
          "--ERROR : there was a problem generating HTML from the team data!"
        );
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(
      "--ERROR : there was an error getting team data from the user!"
    );
    console.log(err);
  });
