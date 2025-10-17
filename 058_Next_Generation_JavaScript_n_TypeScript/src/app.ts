// const userName = "Hielapha";
// userName = "AnotherName"; // This will cause an error because userName is a constant
// let age = 34;

// age = 35; // This is valid since age is declared with let

// let vs. var
// var 只有 global scope 和 function scope
// let 有 global scope, function scope, 以及 block scope
// function add(a: number, b: number): number {
//     // var result = a + b; // Using var, it's a function-scoped variable (local to the function)
//     let result;
//     result = a + b;
//     return result;
// }
// console.log(result); // This will cause an error because result is not defined outside the function

// if (age > 30) {
//     let isOld = true;
// }

// console.log(isOld);
// 直接將 Line 18 ~ Line 22 複製到瀏覽器的 console 中執行，可以看到 isOld 仍然可以被存取，因為 JavaScript 除了 function scope 以及 global scope 外沒有其他作用域
// 當使用 var 宣告變數時，會忽略 block scope (例如 if, for, while 等等區塊)
// 但是對 TypeScript 來說，建議還是使用 let 來取代 var，以避免作用域不清楚的問題 (所以可以看到 IDE 以及 tsc 編譯器都會對 var 提供警告)
// 改為使用 let 後，再次將Line 18 ~ Line 22 複製到瀏覽器的 console 中執行，可以看到 isOld 會因為 block scope 而無法在外部存取，這樣可以避免潛在的錯誤


// arrow function
// const add = (a: number, b: number) => {
//     return a + b;
// }

// 簡化寫法
// const add = (a: number, b: number = 25) => a + b;

// console.log(add(2, 3));

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector("button")!;
// if (button) {
//     button.addEventListener("click", event => console.log(event));
// }

// function 的 default parameter 不能放在非 default parameter 前面
// printOutput(add(5));


// arrays & objects
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
// activeHobbies.push(hobbies[0]); // array indexing
activeHobbies.push(...hobbies); // 使用 spread operator 展開陣列，這會將 hobbies 陣列中的每個元素逐一加入 activeHobbies 陣列中
// 展開陣列的另一個活用
// const activeHobbies = ["Hiking", ...hobbies];
const person = {
    firstName: "Hielapha",
    age: 34
};
const copiedPerson = { ...person }; // 使用 spread operator 複製物件，並且這樣的複製行為是淺層複製 (shallow copy)

// 以展開運算子來實現可變參數函式 (variadic function)
const add = (...numbers: number[]) => {
    // 這邊會遞迴地將陣列中的每個數字加總起來
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
}
const addNumbers1 = add(5, 10, 2, 3.7);
const addNumbers2 = add(2.5, 1.7, 10, 5.3, 6.1, 4);
console.log(addNumbers1);
console.log(addNumbers2);

// array destructuring
// 陣列取元素的原始方法
const hobby1 = hobbies[0];
const hobby2 = hobbies[1];
console.log(hobby1, hobby2);
// 解構賦值 (destructuring assignment)，效果跟上面原始方法相同
const [hobbyA, hobbyB] = hobbies; // 這樣的做法也不會改變原本的 hobbies 陣列
console.log(hobbyA, hobbyB, hobbies);
// const [hobbyA, hobbyB, ...restHobbies] = hobbies; // 也可以用 rest operator 收集剩餘的元素
// const [hobbyA, , hobbyC] = hobbies; // 如果陣列中有多餘的元素，可以用逗號跳過不需要的元素

// object destructuring
const { firstName, age} = person; // 物件的解構賦值必須跟物件的屬性名稱完全相同，因為與陣列不同，物件的屬性是沒有順序的
const { firstName: newFirstName, age: newAge } = person; // 這邊同時示範了重新命名的語法
console.log(firstName, age);
console.log(newFirstName, newAge);