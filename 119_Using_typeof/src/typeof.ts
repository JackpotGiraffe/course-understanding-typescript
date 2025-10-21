let userName = "Max";
console.log(typeof userName); // "string", this is a JavaScript feature

// type UserName = typeof userName; // "string" type in TypeScript, here the typeof operator is from TypeScript
type UserName = string;

const settings = {
    difficulty: "easy",
    minLevel: 10,
    didStart: false,
    players: ["John", "Jane"]
};

// type Settings = { // 這樣的設計很容易因為一些 typo 而導致錯誤
//     difficulty: string;
//     minLevel: number;
// }
type Settings = typeof settings; // 使用 typeof 來自動推斷 settings 的類型

// function loadData(settings: Settings) {
function loadData(s: typeof settings) {
    // ...
}

loadData(settings);