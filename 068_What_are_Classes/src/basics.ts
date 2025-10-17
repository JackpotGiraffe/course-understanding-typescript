class User {
    // properties, to make sure every instance has these properties
    // 定義 class 的屬性在 vanilla JS 裡面是不必要的，但在 TypeScript 中相對嚴謹，就變成必要的
    name: string;
    age: number;
    
    // constructor to initialize the properties
    constructor(initName: string, initAge: number) {
        this.name = initName;
        this.age = initAge;
    }
}
new User("John Doe", 30);

// 另一種寫法，使用 public 修飾符來自動建立並初始化屬性
class User2 {
    constructor(public name: string, public age: number) {}
}
const jane = new User2("Jane Doe", 25);
const fred = new User2("Fred Smith", 40);
console.log(jane, fred); // Jane Doe

// 混用寫法，並且給屬性一個預設值
class User3 {
    public hobbies: string[] = []; // 預設值為空陣列

    // shortcut is a nice main feature provided by TypeScript
    constructor(public name: string, private age: number) {}

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const alice = new User3("Alice Johnson", 28);
// alice.age = 18; // 修改屬性值，因為 age 是 private，所以只能在 class 裡面修改
// console.log(alice.age); // private 屬性甚至無法被讀取
alice.greet();

// Readonly properties
class User4 {
    readonly hobbies: string[] = []; // hobbies 是唯讀屬性

    constructor(public name: string, public age: number) {}

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const bob = new User4("Bob Brown", 35);
bob.hobbies.push("Reading"); // 可以修改陣列內容
// bob.hobbies = ["Traveling"]; // Error: Cannot assign to 'hobbies' because it is a read-only property
console.log(bob.hobbies);
