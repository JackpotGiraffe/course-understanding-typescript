"use strict";
console.log("Hello, World!");
let userName; // 如果僅宣告不賦值，建議加上型別註記
let userAge = 34; // 如果在宣告時賦值，那麼建議不要加上型別註記，讓 TypeScript 自動推斷型別
// ...
userName = "Max";
// userAge = "34";
// --------------------------------------------------------------
function add(a, b = 5) {
    return a + b;
}
add(10);
// add("10"); // 錯誤，因為第二個參數預設值是數字型別
add(10, 20);
// add(10, "20"); // 錯誤，因為第二個參數預設值是數字型別
