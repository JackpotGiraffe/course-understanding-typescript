/*
Generic: Combination of multiple types
         Building flexible and reusable components
*/
let names: Array<string> = ["Max", "Anna"];
// let names: string[] = ["Max", "Anna"];

// 原本的 type 方法
type DataStore = {
    [prop: string]: string | number;
};

let store: DataStore = {};
store.name = "Max";
// store.isInstructor = true; // Error: Type 'boolean' is not assignable to type 'string | number'

// 運用 Generic 改寫
type GenericDataStore<T> = {
    [prop: string]: T;
};

let genericStore: GenericDataStore<string | boolean> = {};
genericStore.name = "Max";
genericStore.isInstructor = true;


// Generic Function
// function merge(a: any, b: any) { // what type will a and b be?
function merge<T>(a: T, b: T) {
    return [a, b];
}

const ids = merge(1, 2); // TypeScript can infer the type of array as number[], because both arguments are numbers

// Multi-Generic Function
function multiMerge<T, U>(a: T, b: U) {
    return [a, b];
}

const multiIds = multiMerge("1", 2); // TypeScript is able to infer the types of both arguments separately

// Limited Multi-Generic Function
function mergeObj<T extends object, U extends object>(a: T, b: U) { // Use "extends" to limit the type to object only
    return { ...a, ...b };
}

// const merged = mergeObj(1, 2); // Error: Type 'number' does not satisfy the constraint 'object'.
const merged = mergeObj({ userName: "Max" }, { age: 30 });
console.log(merged);

// Generic Class
class User<T> {
    constructor(public id: T) {}
}

const user1 = new User("i1");
const user2 = new User(2);
// const user3 = new User(true); // Valid, but may not make sense in real-world scenarios