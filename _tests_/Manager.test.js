const Manager = require("../lib/Manager");

test("creates a new manager", () => {
  const manager = new Manager("Michelle");

  expect(manager.name).toBe("Michelle");
});
