"use strict";
// 還不清楚變數型別時，雖然可以列舉所有可能的型別，但這樣會讓程式碼變得冗長且難以維護
// 如果使用 any，可以不進行任何檢查直接使用
function processAny(val) {
    val.log(); // 但如此一來在相當多場景下，會直接產生 runtime error
}
// 雖然相似於 any，但 unknown 比 any 更安全，因為 unknown 不允許直接對其進行操作，必須先進行型別檢查或型別斷言，才能使用該變數
function processUnknown(val) {
    // val.log(); // 錯誤，因為 unknown 不能直接使用
    // 進行型別檢查或型別斷言
    if (typeof val === "object" &&
        !!val &&
        "log" in val &&
        typeof val.log === "function") {
        val.log(); // 正確，因為已經確認 val 有 log 方法
    }
}
