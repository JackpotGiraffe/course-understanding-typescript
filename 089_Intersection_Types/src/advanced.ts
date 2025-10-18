// index type
type DataStore = {
    // placeholder for any property of any name
    // don't know the type yet, and don't know how many properties there will be
    [prop: string]: number | boolean;
};

// 跟 index type 類似的還有 Record<Keys, Type> 工具型別
let someObj: Record<string, number | boolean>;

let store: DataStore = {};

// ...
store.id = 5;
store.isOpen = false;
// store.name = "Hielapha";
// 這個特性類似一些語言 (e.g. python) 的 dictionary 或 map 結構

let roles = ["admin", "guest", "editor"] as const;
// roles.push("owner"); // 錯誤：不能新增不在 roles 陣列中的字串
const firstRole = roles[0]; // "admin" 類型


// satisfies 關鍵字
// 可以用 python 的 dict 跟 defaultdict 類比
const dataEntries: Record<string, number> = {
    entry1: 0.51,
    entry2: -1.23
};

// ...

dataEntries.entry3 // 合法

const dataEntriesSatisfies = {
    entry1: 0.51,
    entry2: -1.23
} satisfies Record<string, number>;

// ...

// dataEntriesSatisfies.entry3 // 錯誤：Property 'entry3' does not exist on type '{ entry1: number; entry2: number; }'.