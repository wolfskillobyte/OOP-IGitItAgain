const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');

test('get employee obj', () => {
    const employee = new Employee;
console.log(employee);
});