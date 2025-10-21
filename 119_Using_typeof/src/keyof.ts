type User = { name: string; age: number };
type UserKeys = keyof User; // "name" | "age", this operator does not exists in vanilla JS

let validKey: UserKeys;
validKey = "name"; // OK
validKey = "age"; // OK
// validKey = "email"; // Error: Type '"email"' is not assignable to type 'UserKeys'.

// Utility function
function getProp<T extends object, K extends keyof T>(obj: T, key: K) { // 用泛型宣告 (限制) T 為物件型別，K (限制) 為 T 的鍵值型別
    const val = obj[key];
    if (val === undefined || val === null) {
        throw new Error("Accessing undefined or null property");
    }

    return val;
}
const data = { id: 1, isStored: false, values: [1, -1, -109] };
const isStored = getProp(data, "isStored"); // OK
const user = { name: "Hielapha", age: 3.42 };
const val = getProp(user, "age"); // OK