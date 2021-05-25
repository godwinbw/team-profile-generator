const Manager = require("../lib/Manager.js");

const testName = "Barney Fife";
const testId = "402";
const testEmail = "barney@mayberry.com";
const testOfficeNumber = "Room 314";
const testRole = "Manager";

test("creates an Manager object", () => {
  const employee = new Manager(testName, testId, testEmail, testOfficeNumber);

  expect(employee.name).toBe(testName);
  expect(employee.id).toBe(testId);
  expect(employee.email).toBe(testEmail);
  expect(employee.officeNumber).toBe(testOfficeNumber);
});

test("check getName function", () => {
  const employee = new Manager(testName, testId, testEmail, testOfficeNumber);

  expect(employee.getName()).toBe(testName);
});

test("check getId function", () => {
  const employee = new Manager(testName, testId, testEmail, testOfficeNumber);

  expect(employee.getId()).toBe(testId);
});

test("check getEmail function", () => {
  const employee = new Manager(testName, testId, testEmail, testOfficeNumber);

  expect(employee.getEmail()).toBe(testEmail);
});

test("check getRole function", () => {
  const employee = new Manager(testName, testId, testEmail, testOfficeNumber);

  expect(employee.getRole()).toBe(testRole);
});

test("check getOfficeNumber function", () => {
  const employee = new Manager(testName, testId, testEmail, testOfficeNumber);

  expect(employee.getOfficeNumber()).toBe(testOfficeNumber);
});
