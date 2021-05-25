const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");

// we will generate same html structure for each employee, and just supply whatever extra info is unique to each employee type
const generateEmployeeInfo = function (name, role, id, email, extraInfo) {
  return `
        <div class="employee-container">
            <div class = "employee-header">
                <div class="employee-name>
                    ${name}
                </div>
                <div class="employee-role>
                    <div class="role-icon-${role}></div>
                    <div class="role-description>
                        ${role}
                    </div>
                </div>
            </div>
            <div class = "employee-content">
                <div class="employee-card>
                    <div class="employee-id>
                        ${id}
                    </div>
                    <div class="employee-email">
                        ${email}
                    </div>
                    <div class="extra-info>
                        ${extraInfo}
                    </div>
                </div>
            </div>
        </div>
    `;
};

const generateManagerHtml = function (managers) {
  managerHtml = "";
  managers.forEach((manager) => {
    managerHtml =
      managerHtml +
      generateEmployeeInfo(
        manager.getName(),
        manager.getRole(),
        manager.getId(),
        manager.getEmail(),
        manager.getOfficeNumber()
      );
  });
  return managerHtml;
};

const generateEngineerHtml = function (engineers) {
  engineerHtml = "";
  engineers.forEach((engineer) => {
    engineerHtml =
      engineerHtml +
      generateEmployeeInfo(
        engineer.getName(),
        engineer.getRole(),
        engineer.getId(),
        engineer.getEmail(),
        engineer.getGithub()
      );
  });
  return engineerHtml;
};

const generateInternsHtml = function (interns) {
  internHtml = "";
  interns.forEach((intern) => {
    internHtml =
      internHtml +
      generateEmployeeInfo(
        intern.getName(),
        intern.getRole(),
        intern.getId(),
        intern.getEmail(),
        intern.getSchool()
      );
  });
  return internHtml;
};

const getHtmlForTeam = function (teamData) {
  return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="banner">
            <h1>My Team</h1>
        </div>
      </header>
      <main class="team-info">
        <div class = "manager-row">)}
            ${generateManagerHtml(teamData.managers)}
        </div>
        <div class = "engineer-row">
            ${generateEngineerHtml(teamData.engineers)}
        </div>
        <div class = "interns">
            ${generateInternsHtml(teamData.interns)}
        </div>
      </main>

      <footer class="container text-center py-3">
        <h3 class="text-dark">Generated ${new Date().toLocaleString()}</h3>
      </footer>
    </body>
    </html>
    `;
};

const generateHtml = function (teamData) {
  return new Promise((resolve, reject) => {
    resolve(getHtmlForTeam(teamData));
  });
};

module.exports = generateHtml;
