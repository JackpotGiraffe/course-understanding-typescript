"use strict";
function generateError(msg) {
    throw new Error(msg);
}
let input = "";
const didProvideInput = input || false;
const didProvideInput2 = input ?? false;
console.log(didProvideInput);
console.log(didProvideInput2);
