import fs from "node:fs"; // 這邊原始狀態下是沒有辦法引用 node 模組的
// 因為 TypeScript 預設不支援 node 環境，比較直接的方式是在專案中執行 npm init -y
// 然後安裝 @types/node 套件以排除障礙

// fs.readFileSync();

let userName: string;

userName = "Hielapha";

console.log(`Hello, ${userName}! Welcome to TypeScript.`);

function add(a: number, b: number): number {
    return a + b;
}

add(2, 3);