const chalk = require('chalk');
const validator = require('validator');

const em = validator.isEmail('foo@bar.com');
console.log(em ? chalk.green.inverse(em) : chalk.red.inverse(em)); 
