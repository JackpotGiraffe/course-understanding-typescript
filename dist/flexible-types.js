"use strict";
let age = 36; // 如果在某些情境下，非得需要使用多種型別，可以使用 any
// 這個方法僅提供彈性，但在 TypeScript 的語法精神下，不建議這麼做
// ...
// 因為 age 是 any 型別，所以以下賦值都不會有錯誤
age = "34";
age = false;
age = {};
age = [];
// --------------------------------------------------------------
let unionAge = 36; // 如果需要使用多種型別，建議使用聯合型別 (Union Types)
// 這個方法雖然沒有 any 彈性，但可以保有 TypeScript 的型別安全檢查
// ...
unionAge = "34"; // 正確
unionAge = 56; // 正確
// unionAge = false; // 錯誤，因為聯合型別中沒有 boolean
// unionAge = {}; // 錯誤，因為聯合型別中沒有 object
// unionAge = []; // 錯誤，因為聯合型別中沒有 array
