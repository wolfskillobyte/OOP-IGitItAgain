const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');

test('get employee name', () => {
    const employee = new Employee;
console.log(employee);
});