//commonJS, file is module (by default)
//Modules - only share minimum

const name = require ('./name');
const sayHi = require('./utils')
const data = require ('./alternative-flavor')
require('./mind-gernade')
sayHi('zohaib')
sayHi(name.kumar)
sayHi(name.john)