const Employee = require("../lib/Employee.js");

// test values
const testName = "Homer Simpson";
const testId = "301";
const testEmail = "homer@mrburns.net";
const testRole = "Employee";

test("creates an Employee object", () => {
  const employee = new Employee(testName, testId, testEmail);

  expect(employee.name).toBe(testName);
  expect(employee.id).toBe(testId);
  expect(employee.email).toBe(testEmail);
});

test("check getName function", () => {
  const employee = new Employee(testName, testId, testEmail);

  expect(employee.getName()).toBe(testName);
});

test("check getId function", () => {
  const employee = new Employee(testName, testId, testEmail);

  expect(employee.getId()).toBe(testId);
});

test("check getEmail function", () => {
  const employee = new Employee(testName, testId, testEmail);

  expect(employee.getEmail()).toBe(testEmail);
});

test("check getRole function", () => {
  const employee = new Employee(testName, testId, testEmail);

  expect(employee.getRole()).toBe(testRole);
});
