// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");
require("./7-mind-grenade");
const data = require("./6-alternative-flavor");

sayHi("susan");
sayHi(john);
sayHi(peter);

// or

/**
 * const names = require("./4-names");
 * const sayHi = require("./5-utils");
 * 
 * console.log(names);

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
 */
