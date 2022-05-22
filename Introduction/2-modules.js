//Modules -> Encapsulated code
//Node uses CommonJS, so every file is a module by default
//use ` instead of ' to use ${string}

//module.exports to export objects/functions
//requre to import modules

const names = require('./2.1-names.js');
const Hello = require('./2.2-utils');
const data = require('./2.3-alternativeMethods')

Hello(names.charlie);
Hello(names.delta);
Hello(names.echo);
Hello(data.items);
Hello(data.singlePerson.name);