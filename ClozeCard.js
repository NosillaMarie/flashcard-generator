var inquirer = require('inquirer');
var fs = require('fs');
var chalk = require('chalk');

var ClozeCard = function (fullText, partial, cloze)
    {
        this.fullText = fullText;
        this.partial = partial;
        this.cloze = cloze;
    };

inquirer.prompt([
    {
        type: 'input',
        name: 'fullText',
        message: 'Full Text: '
    },
    {
        type: 'input',
        name: 'partial',
        message: 'Partial text without Cloze answer: '
    },
    {
        type: 'input',
        name: 'cloze',
        message: 'Deleted Cloze answer: '
    },
]).then(function (clozePrint) {
    var newCloze = new ClozeCard(clozePrint.fullText, clozePrint.partial, clozePrint.cloze);
    console.log(chalk.bgMagenta(newCloze));

    fs.appendFile('questions.txt', JSON.stringify(newCloze, null, 2) + ';' + '\n', function (err) {
        if (err) {
            console.log(chalk.blue(err));
        }
    });

});

module.exports = ClozeCard;
