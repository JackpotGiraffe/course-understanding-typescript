"use strict";
// null
let a;
a = null;
// a = 34; // 錯誤，因為 null 只能賦值 null
a = "hello"; // 正確，因為 a 的型別是 null | string，這可以用在有 "reset" 需求的情境或變數上
// undefined
let b;
// ---------------------------------------------------------------
// demo
// const formEle = document.getElementById("form");
// scenario 1: 不確定 formEle 是否為 null
// console.log(formEle.value); // 錯誤，因為 TypeScript 無法保證 querySelector 一定會找到元素
// scenario 2: 使用非 null 斷言運算子 (Non-null Assertion Operator) "!"
// 並且在 formEle 為 null 時，程式會拋出錯誤
// if (!formEle) {
//     throw new Error("Could not find the form element.");
// }
// console.log(formEle.value); // 正確，因為經過 if 判斷後，TypeScript 可以確定 formEle 不會是 null
// ---------------------------------------------------------------
// 使用 "!" 告訴 TypeScript 這個值不會是 null
// const anotherFormEle = document.getElementById("form")!;
// 使用非 null 斷言運算子 "!"，TypeScript 可以確定 anotherFormEle 不會是 null
// console.log(anotherFormEle!.value);
// 使用選擇鏈運算子 "?"，如果 anotherFormEle 是 null，就不會執行後面的屬性存取
// console.log(anotherFormEle?.value);
// --------------------------------------------------------------
// 假設某一個 type 的元素不一定含有目標屬性
// type casting
const nameInput = document.getElementById("input-in-the-form"); // 告訴 TypeScript 這個元素是 HTMLInputElement
console.log(nameInput?.value); // 使用選擇鏈運算子 "?"，如果 nameInput 是 null，就不會執行後面的屬性存取，如果不是 null 就會存取 value 屬性
