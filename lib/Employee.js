//Parent class that will hold the shared information for Manager, Engineer and Intern classes.
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.email = email;
    this.id = id;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getId() {
    return this.id;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
