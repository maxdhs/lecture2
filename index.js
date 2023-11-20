// we want to build a calculator app - all functions have to be written in other files (modules)

// named exports (the name of your import has to exactly match the name of your export)
import myDivide from "./operations.js";
import { add, subtract } from "./operations.js";
// default import (only one default export and import)

// why do we need modules?
// our human organization

console.log(add(2, 2));

console.log(subtract(4, 2));

console.log(myDivide(4, 2));

// each module is its own kingdom and knows nothing about anyone else
// if we want to share info we have to explicitly import and export
