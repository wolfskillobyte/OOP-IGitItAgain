const Intern = require('../lib/Intern.js');

jest.mock('../lib/Intern.js');

test('get intern obj', () => {
    const intern = new Intern;
console.log(intern);
});