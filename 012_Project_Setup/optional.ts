function generateError(msg?: string) { // 可選參數 (optional parameter)
    throw new Error(msg);
}

// generateError("An error occurred!");
// generateError(); // 可以不傳參數，因為 msg 是可選參數


// --------------------------------------------------------------
type optionalUser = {
    name: string;
    age: number;
    role?: "admin" | "guest"; // 可選屬性 (optional property)
};


// ---------------------------------------------------------------
// ?? 可選串接 (optional chaining, an operator)
let input = "";
const didProvideInput = input || false; // 當 input 是 falsy 值 (null, undefined, 0, "", false) 時，會回傳 false
const didProvideInput2 = input ?? false; // 只有當 input 是 null 或 undefined 時，才會回傳 false，空字串 "" 和 0 都會被視為有效值

console.log(didProvideInput); // false
console.log(didProvideInput2); // ""