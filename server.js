var chalk = require('chalk');
var server = require('./');

console.log(chalk.yellow('----- Sever Starting -----'));
console.log(chalk.yellow('Title:', process.title));
console.log(chalk.yellow('NODE_ENV:', process.env.NODE_ENV));

server.listen(3000);
