"use strict";
// let userRole = 0; // 0 = Admin, 1 = Guest, ... 用這樣的定義宣告方式相當不直觀
// --------------------------------------------------------------
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Guest"] = 2] = "Guest"; // 2
})(Role || (Role = {}));
let userRole = Role.Admin; // 使用列舉來定義角色
// ...
userRole = 2; // 正確，可以參考 tsc 編譯後的 choices.js，實際上 javaScript 會被編譯成數值
// --------------------------------------------------------------
// 列舉有預設的數字索引值 (indices)，但也可以自行指定
var RoleCustom;
(function (RoleCustom) {
    RoleCustom[RoleCustom["Admin"] = 5] = "Admin";
    RoleCustom[RoleCustom["Editor"] = 10] = "Editor";
    RoleCustom[RoleCustom["Guest"] = 15] = "Guest";
})(RoleCustom || (RoleCustom = {}));
let custUserRole = RoleCustom.Admin; // 使用列舉來定義角色
// ...
custUserRole = 10; // 正確，可以參考 tsc 編譯後的 choices.js，實際上 javaScript 會被編譯成數值
// custUserRole = 2; // 錯誤，因為沒有這個索引值
// --------------------------------------------------------------
// 甚至索引能用字串
var RoleString;
(function (RoleString) {
    RoleString["Admin"] = "ADMIN";
    RoleString["Editor"] = "EDITOR";
    RoleString["Guest"] = "GUEST";
})(RoleString || (RoleString = {}));
let strUserRole = RoleString.Admin; // 使用列舉來定義角色
// ...
// 但此時反過來是無法用字串來賦值的
// strUserRole = "ADMIN";
// strUserRole = 2; // 錯誤，因為沒有這個索引值
// strUserRole = "SOMETHING"; // 錯誤，因為沒有這個索引值
// --------------------------------------------------------------
// Literal Types (字面型別)
let literalUserRole = "ADMIN"; // 冒號(:)右側、等號(=)左側指的是型別(type)，而不是值(value)
// ...
literalUserRole = "EDITOR"; // 正確
// --------------------------------------------------------------
// 在 ./arrays-objects.ts 中提過的 possibleResultsAny 變數，可以進一步 fine tune 成限制僅能使用 -1 和 1，且長度為 2 的陣列
let literalPossibleResults; // Tuple 限制長度為 2，且每個元素只能是 1 或 -1
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
function access(role) {
    // ...
}
;
let userRoleWithoutType = "ADMIN"; // 冒號(:)右側、等號(=)左側指的是型別(type)，而不是值(value)
access(userRoleWithoutType);
function accessWithType(role) {
    // ...
}
let typeUserRole = "ADMIN";
access(typeUserRole);
let userWithType = {
    name: "Hielapha",
    age: 34,
    role: "ADMIN"
};
