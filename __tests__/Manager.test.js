const Manager = require('../lib/Manager.js');

jest.mock('../lib/Manager.js');

test('get manager obj', () => {
    const manager = new Manager;
console.log(manager);
});