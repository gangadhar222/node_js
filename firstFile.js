const path = require('path'); //require function is used to load external modules

console.log(__dirname); //gives current directory name including path
console.log(__filename); // gives current file name path

console.log(`the file name is ${path.basename(__filename)}`) // gives just file name using basename function
console.log(`the directory name is ${path.basename(__dirname)}`) // gives just directory name using basename function
