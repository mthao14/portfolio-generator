const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));

// require statement is a built-in function that allows the app.js file to access the fs module's functions
//const fs = require('fs'); 
//const generatePage = require('./src/page-template');

//const pageHTML = generatePage(name, github);

//fs.writeFile('./index.html', pageHTML, err => {
    //if (err) throw err;

    //console.log('Portfolio complete! Checkout index.html to see the output!');
//});