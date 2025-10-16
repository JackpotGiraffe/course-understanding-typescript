// let userRole = 0; // 0 = Admin, 1 = Guest, ... 用這樣的定義宣告方式相當不直觀


// --------------------------------------------------------------
enum Role { // enumeration 列舉
    Admin, // 0
    Editor, // 1
    Guest // 2
}

let userRole: Role = Role.Admin; // 使用列舉來定義角色

// ...

userRole = 2; // 正確，可以參考 tsc 編譯後的 choices.js，實際上 javaScript 會被編譯成數值


// --------------------------------------------------------------
// 列舉有預設的數字索引值 (indices)，但也可以自行指定
enum RoleCustom {
    Admin = 5,
    Editor = 10,
    Guest = 15
}

let custUserRole: RoleCustom = RoleCustom.Admin; // 使用列舉來定義角色

// ...

custUserRole = 10; // 正確，可以參考 tsc 編譯後的 choices.js，實際上 javaScript 會被編譯成數值
// custUserRole = 2; // 錯誤，因為沒有這個索引值


// --------------------------------------------------------------
// 甚至索引能用字串
enum RoleString {
    Admin = "ADMIN",
    Editor = "EDITOR",
    Guest = "GUEST"
}

let strUserRole: RoleString = RoleString.Admin; // 使用列舉來定義角色

// ...

// 但此時反過來是無法用字串來賦值的
// strUserRole = "ADMIN";
// strUserRole = 2; // 錯誤，因為沒有這個索引值
// strUserRole = "SOMETHING"; // 錯誤，因為沒有這個索引值


// --------------------------------------------------------------
// Literal Types (字面型別)
let literalUserRole: "ADMIN" | "EDITOR" | "GUEST" = "ADMIN"; // 冒號(:)右側、等號(=)左側指的是型別(type)，而不是值(value)

// ...

literalUserRole = "EDITOR"; // 正確


// --------------------------------------------------------------
// 在 ./arrays-objects.ts 中提過的 possibleResultsAny 變數，可以進一步 fine tune 成限制僅能使用 -1 和 1，且長度為 2 的陣列
let literalPossibleResults: [1 | -1, 1 | -1]; // Tuple 限制長度為 2，且每個元素只能是 1 或 -1

// 以下賦值皆合法
literalPossibleResults = [1, 1];
literalPossibleResults = [1, -1];
literalPossibleResults = [-1, 1];
literalPossibleResults = [-1, -1];

// (包含但不限於)以下賦值會產生錯誤
// literalPossibleResults = [5, 1];
// literalPossibleResults = [1, "test"];
// literalPossibleResults = [true, false];
// literalPossibleResults = [-1, {}];


// --------------------------------------------------------------
// 使用字面型別時，這樣的宣告方式雖然可以達到目的，但不易維護
// 因為當下方 Line 84 的 Role 型別列舉有變動時，這裡也要跟著改，e.g. 新增一個 "READER" 角色
function access(role: "ADMIN" | "EDITOR" | "GUEST") {
    // ...
};
let userRoleWithoutType: "ADMIN" | "EDITOR" | "GUEST" = "ADMIN"; // 冒號(:)右側、等號(=)左側指的是型別(type)，而不是值(value)
access(userRoleWithoutType);

// 可以使用 type alias 來解決這個問題
type RoleTypes = "ADMIN" | "EDITOR" | "GUEST"; // type alias (抽象化型別)
function accessWithType(role: RoleTypes) { // 這樣的宣告方式就比較好維護
    // ...
}
let typeUserRole: RoleTypes = "ADMIN";
access(typeUserRole);

// type alias 甚至能用在複雜的物件型別
type User = {
    name: string;
    age: number;
    role: RoleTypes; // 這裡也能用 type alias
}
let userWithType: User = {
    name: "Hielapha",
    age: 34,
    role: "ADMIN"
}