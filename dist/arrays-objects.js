"use strict";
let hobbies = ["Sports", "Cooking"]; // let hobbies: string[] = ["Sports", "Cooking"]
// hobbies.push(10); // 錯誤，因為 hobbies 被推斷為 string[] 型別
// --------------------------------------------------------------
let users; // union type 也可以用在陣列型別中，array of (string or number)
users = ["Max", 10]; // 正確
users = [10, 20, 30]; // 正確
users = ["Max", "Anna"]; // 正確
// --------------------------------------------------------------
let arrayUser; // 也可以使用泛型 (Generics) 的語法來定義陣列型別
arrayUser = ["Max", 10]; // 正確
arrayUser = [10, 20, 30]; // 正確
arrayUser = ["Max", "Anna"]; // 正確
// --------------------------------------------------------------
// 如果希望變數只有兩個元素
let possibleResultsAny; // 這樣雖然能達到目的，但無法限制長度
possibleResultsAny = [1, -1];
possibleResultsAny = [1, 2, 3];
// 使用 Tuple 型別，來限制陣列的長度和每個元素的型別
let possibleResults;
possibleResults = [1, -1]; // 正確
// possibleResults = [1, 2, 3]; // 錯誤，因為 Tuple 長度只能是 2
// --------------------------------------------------------------
let user = {
    name: "Hielapha",
    age: 34,
    hobbies: ["Sports", "Cooking"],
    role: {
        description: "yahaha",
        id: 1
    }
};
// --------------------------------------------------------------
let val = "some text"; // 型別 {} 可以接受任何非 null 和 undefined 的值
// val = null; // 錯誤，因為 null 不是物件
// val = undefined; // 錯誤，因為 undefined 不是物件
val = 34; // 正確，因為 number 是物件
val = []; // 正確，因為 array 是物件
val = {}; // 正確，因為 object 是物件
// --------------------------------------------------------------
// 假若有一個變數，可以確定他是物件，但還未具體定義其結構，使用 {} 作為型別註記顯然不是那麼適當
// 這時候可以考慮使用 Record 來定義物件型別，但必須先定義 key 和 value 的型別
let data; // key 可以是 string 或 number，value 可以是 string 或 number
// data = "some text"; // 錯誤，此時就不需要擔心 data 被誤賦值為非物件
data = {}; // 正確，因為空物件符合 Record<string, string | number> 的定義
data = {
    name: "Hielapha",
    age: 34
};
