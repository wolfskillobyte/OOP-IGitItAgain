const Engineer = require('../lib/Engineer.js');

jest.mock('../lib/Engineer.js');

test('get engineer obj', () => {
    const engineer = new Engineer;
console.log(engineer);
});