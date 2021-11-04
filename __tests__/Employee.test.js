const Employee = require('../lib/Employee.js');

test('get employee name', () => {
    const emp = new Employee('Dave');

    expect(emp.name).toBe('Dave');
});