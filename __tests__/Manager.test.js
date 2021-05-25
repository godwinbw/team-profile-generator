const Manager = require("../lib/Manager.js");

const testName = "Barney Fife";
const testId = "402";
const testEmail = "barney@mayberry.com";
const testOfficeNumber = "Room 314";
const testRole = "Manager";

test("creates an Manager object", () => {
  const manager = new Manager(testName, testId, testEmail, testOfficeNumber);

  expect(manager.name).toBe(testName);
  expect(manager.id).toBe(testId);
  expect(manager.email).toBe(testEmail);
  expect(manager.officeNumber).toBe(testOfficeNumber);
});

test("check getName function", () => {
  const manager = new Manager(testName, testId, testEmail, testOfficeNumber);

  expect(manager.getName()).toBe(testName);
});

test("check getId function", () => {
  const manager = new Manager(testName, testId, testEmail, testOfficeNumber);

  expect(manager.getId()).toBe(testId);
});

test("check getEmail function", () => {
  const manager = new Manager(testName, testId, testEmail, testOfficeNumber);

  expect(manager.getEmail()).toBe(testEmail);
});

test("check getRole function", () => {
  const manager = new Manager(testName, testId, testEmail, testOfficeNumber);

  expect(manager.getRole()).toBe(testRole);
});

test("check getOfficeNumber function", () => {
  const manager = new Manager(testName, testId, testEmail, testOfficeNumber);

  expect(manager.getOfficeNumber()).toBe(testOfficeNumber);
});
