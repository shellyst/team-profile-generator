const Employee = require("./Employee");

//Engineer class that extends Employee to access parent data, as well as generates Role and Github that is specific to the Engineer class.
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
