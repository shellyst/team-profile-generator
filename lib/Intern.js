const Employee = require("./Employee");

//Intern class that extends Employee to access parent data, as well as generate Role and School hat are specific to Intern class.
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
