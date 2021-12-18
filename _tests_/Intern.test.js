const Intern = require("../lib/Intern");

test("creates a new intern", () => {
  const intern = new Intern("Michelle");

  expect(intern.name).toBe("Michelle");
});
