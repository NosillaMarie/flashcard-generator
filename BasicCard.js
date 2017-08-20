var inquirer = require('inquirer');
var fs = require('fs');
var chalk = require('chalk');

var BasicCard = function (front, back) {
    this.front = front;
    this.back = back;
};

inquirer.prompt([{
        type: 'input',
        name: 'front',
        message: 'Enter question to be displayed on flash card.'
}, {
        type: 'input',
        name: 'back',
        message: 'Enter answer to the question to display on the back of the flash card.'
}
]).then(function (toPrint) {
    newBasicCard = new BasicCard(toPrint.front, toPrint.back);
    console.log(chalk.green(newBasicCard));
})

module.exports = BasicCard;
