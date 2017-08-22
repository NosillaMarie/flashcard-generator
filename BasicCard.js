//requires
var inquirer = require('inquirer');
var fs = require('fs');
var chalk = require('chalk');

//constructor function
var BasicCard = function (front, back) {
    this.front = front;
    this.back = back;
};
//prompt for question & answer
inquirer.prompt([
    {
        name: 'front',
        message: 'Please Enter a flashcard question: '
}, {
        name: 'back',
        message: 'Please enter the answer to your question: '
}
]).then(function (toPrint) {
    var newBasicCard = new BasicCard(toPrint.front, toPrint.back);
    
    
    //console front and back of BasicCard constructor flashcard.  This is not working it is returning [object, Object] and I'm ot sure why... it is printing everything correctly to the questions.txt though...
//    console.log(chalk.bgCyan(newBasicCard));
    
    
    
    
    //add question and answer submission to question.txt file.    
    fs.appendFile('questions.txt', JSON.stringify(newBasicCard, null, 2) + ';' + "\n", function (err) {
        if (err) {
            console.log(chalk.red(err));
        }
    });
});


module.exports = BasicCard;
