const Engineer = require("../lib/Engineer.js");

const testName = "James Watt";
const testId = "4377";
const testEmail = "jwatt@watertown.net";
const testGithub = "wattsy";
const testRole = "Engineer";

test("creates an Engineer object", () => {
  const employee = new Engineer(testName, testId, testEmail, testGithub);

  expect(employee.name).toBe(testName);
  expect(employee.id).toBe(testId);
  expect(employee.email).toBe(testEmail);
  expect(employee.github).toBe(testGithub);
});

test("check getName function", () => {
  const employee = new Engineer(testName, testId, testEmail, testGithub);

  expect(employee.getName()).toBe(testName);
});

test("check getId function", () => {
  const employee = new Engineer(testName, testId, testEmail, testGithub);

  expect(employee.getId()).toBe(testId);
});

test("check getEmail function", () => {
  const employee = new Engineer(testName, testId, testEmail, testGithub);

  expect(employee.getEmail()).toBe(testEmail);
});

test("check getRole function", () => {
  const employee = new Engineer(testName, testId, testEmail, testGithub);

  expect(employee.getRole()).toBe(testRole);
});

test("check getGithub function", () => {
  const employee = new Engineer(testName, testId, testEmail, testGithub);

  expect(employee.getGithub()).toBe(testGithub);
});
