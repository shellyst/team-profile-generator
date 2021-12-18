const Engineer = require("../lib/Engineer");

test("creates a new engineer", () => {
  const engineer = new Engineer("Michelle");

  expect(engineer.name).toBe("Michelle");
});
