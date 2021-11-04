// this will be the constructor that the other employee types will inherit
// class Employee
// name
// employee ID
// email

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    };

    getID() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return "Employee";
    };
}

module.exports = Employee;