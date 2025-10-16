"use strict";
function add2(a, b) {
    return a + b;
}
// 即使沒有定義函式的回傳值型別，TypeScript 也會根據 return 的內容自動推斷型別
// --------------------------------------------------------------
// 不包含任何回傳值的函式，可以使用 void 型別來定義回傳值
function log(message) {
    console.log(message);
}
// 同樣地，因為沒有回傳值，TypeScript 也會自動推斷回傳值型別為 void
// --------------------------------------------------------------
// never 型別表示這個函式會在特定情境下拋出錯誤或無限迴圈，導致函式不會有任何回傳值
// 這個型別常見用於錯誤處理的函式
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
// --------------------------------------------------------------
// javascript 中典型的箭頭函式 (Arrow Function) 賦值給變數
const arrowLogMsg = (msg) => {
    console.log(msg);
};
// function 可以被當作值賦予給變數，或做其他用途
function performJob(cb) {
    // ...
    cb("Got new Job!!");
}
performJob(arrowLogMsg); // 把函式當作值傳入另一個函式中
let user1 = {
    name: "Hielapha",
    age: 34,
    greet() {
        console.log("I'm dead!");
        return this.name;
    }
};
