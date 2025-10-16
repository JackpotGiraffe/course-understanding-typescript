"use strict";
function generateError(msg) {
    throw new Error(msg);
}
// ---------------------------------------------------------------
// ?? 可選串接 (optional chaining, an operator)
let input = "";
const didProvideInput = input || false; // 當 input 是 falsy 值 (null, undefined, 0, "", false) 時，會回傳 false
const didProvideInput2 = input ?? false; // 只有當 input 是 null 或 undefined 時，才會回傳 false，空字串 "" 和 0 都會被視為有效值
console.log(didProvideInput); // false
console.log(didProvideInput2); // ""
