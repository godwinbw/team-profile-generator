const Engineer = require("../lib/Engineer.js");

const testName = "James Watt";
const testId = "4377";
const testEmail = "jwatt@watertown.net";
const testGithub = "wattsy";
const testRole = "Engineer";

test("creates an Engineer object", () => {
  const engineer = new Engineer(testName, testId, testEmail, testGithub);

  expect(engineer.name).toBe(testName);
  expect(engineer.id).toBe(testId);
  expect(engineer.email).toBe(testEmail);
  expect(engineer.github).toBe(testGithub);
});

test("check getName function", () => {
  const engineer = new Engineer(testName, testId, testEmail, testGithub);

  expect(engineer.getName()).toBe(testName);
});

test("check getId function", () => {
  const engineer = new Engineer(testName, testId, testEmail, testGithub);

  expect(engineer.getId()).toBe(testId);
});

test("check getEmail function", () => {
  const engineer = new Engineer(testName, testId, testEmail, testGithub);

  expect(engineer.getEmail()).toBe(testEmail);
});

test("check getRole function", () => {
  const engineer = new Engineer(testName, testId, testEmail, testGithub);

  expect(engineer.getRole()).toBe(testRole);
});

test("check getGithub function", () => {
  const engineer = new Engineer(testName, testId, testEmail, testGithub);

  expect(engineer.getGithub()).toBe(testGithub);
});
