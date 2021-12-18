const Employee = require("../lib/Employee");

test("creates a new employee", () => {
  const employee = new Employee("Michelle");

  expect(employee.name).toBe("Michelle");
});
