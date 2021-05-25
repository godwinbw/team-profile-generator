const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");

// we will generate same html structure for each employee, and just supply whatever extra info is unique to each employee type
const generateEmployeeInfo = function (
  name,
  roleIcon,
  role,
  id,
  email,
  extraInfo
) {
  return `
        <div class="employee-container">
            <div class="employee-card">
              <div class = "employee-header">
                  <div class="employee-name">
                      ${name}
                  </div>
                  <div class="employee-role">
                      <div class="role-icon">
                          ${roleIcon}
                      </div>
                      <div class="role-description">
                          ${role}
                      </div>
                  </div>
              </div>
              <div class = "employee-content">
                  <div class="employee-detail">
                      <div class="employee-id">
                          ID: ${id}
                      </div>
                      <div class="employee-email">
                          <p>Email: </p>
                          <a href="mailto:${email}">${email}</a>
                      </div>
                      <div class="extra-info">
                          ${extraInfo}
                      </div>
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
        `<i class="fas fa-mug-hot"></i>`,
        manager.getRole(),
        manager.getId(),
        manager.getEmail(),
        `Office number : ${manager.getOfficeNumber()}`
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
        `<i class="fas fa-glasses"></i>`,
        engineer.getRole(),
        engineer.getId(),
        engineer.getEmail(),
        `<p>Github: </p><a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a>`
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
        `<i class="fas fa-user-graduate"></i>`,
        intern.getRole(),
        intern.getId(),
        intern.getEmail(),
        `School: ${intern.getSchool()}`
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
        <div class = "employee-row" id="managers">
            ${generateManagerHtml(teamData.managers)}
        </div>
        <div class = "employee-row" id="engineers">
            ${generateEngineerHtml(teamData.engineers)}
        </div>
        <div class = "employee-row" id="interns">
            ${generateInternsHtml(teamData.interns)}
        </div>
      </main>

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
