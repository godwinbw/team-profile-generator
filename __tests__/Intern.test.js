const Intern = require("../lib/Intern.js");

const testName = "Forest Gump";
const testId = "655";
const testEmail = "gump@shrimpboat.net";
const testSchool = "University of Texas";
const testRole = "Intern";

test("creates an Intern object", () => {
  const intern = new Intern(testName, testId, testEmail, testSchool);

  expect(intern.name).toBe(testName);
  expect(intern.id).toBe(testId);
  expect(intern.email).toBe(testEmail);
  expect(intern.school).toBe(testSchool);
});

test("check getName function", () => {
  const intern = new Intern(testName, testId, testEmail, testSchool);

  expect(intern.getName()).toBe(testName);
});

test("check getId function", () => {
  const intern = new Intern(testName, testId, testEmail, testSchool);

  expect(intern.getId()).toBe(testId);
});

test("check getEmail function", () => {
  const intern = new Intern(testName, testId, testEmail, testSchool);

  expect(intern.getEmail()).toBe(testEmail);
});

test("check getRole function", () => {
  const intern = new Intern(testName, testId, testEmail, testSchool);

  expect(intern.getRole()).toBe(testRole);
});

test("check getSchool function", () => {
  const intern = new Intern(testName, testId, testEmail, testSchool);

  expect(intern.getSchool()).toBe(testSchool);
});
