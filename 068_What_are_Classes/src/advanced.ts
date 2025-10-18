// Getter and Setter in TypeScript
class User5 {
    // constructor(private firstName: string, private lastName: string) {}
    protected _firstName: string = "";
    private _lastName: string = "";

    set firstName(name: string) {
        if (name.trim() === "") {
            throw new Error("Invalid first name");
        }
        this._firstName = name;
    }

    set lastName(name: string) {
        if (name.trim() === "") {
            throw new Error("Invalid last name");
        }
        this._lastName = name;
    }

    get fullName() {
        return `${this.firstName}, ${this.lastName}`;
    }

    // static property
    static eid = "USER";

    // static method
    static greet() {
        console.log("Hello from User5 class!");
    }
}

// const hielapha = new User5("Hielapha", "Wu");
// console.log(hielapha.lastName); // Error: Property 'lastName' is private and only accessible within class 'User5'.
const hielapha = new User5();
// hielapha.firstName = "Johnnny";
// hielapha.lastName = ""; // Error thrown in runtime here: Invalid last name
// console.log(hielapha.fullName); // not going to be executed
// Valid sample
hielapha.firstName = "Johnnny";
hielapha.lastName = "Tu";
console.log(hielapha.fullName);


console.log(User5.eid); // Accessing static property without creating an instance
// User5.firstName = "NewName"; // Error: Cannot assign to 'firstName' because it is a read-only property.
User5.greet(); // Calling static method without creating an instance


class Employee extends User5 {
    // 繼承 User5 class，可以使用它的屬性和方法，也可以自己擴展新的功能，甚至能 override（覆寫）父類別的方法
    constructor(public jobTitle: string) {
        super(); // 呼叫父類別的建構子0
        // super.firstName = "EmployeeFirstName"; // 使用父類別的 setter
    }

    // 自行實作新的方法
    work() {
        // ...
        console.log(this._firstName); // 因為父類別的屬性改為 protected，所以可以在類別內直接存取
        // 但如果換到類別外，以實例化的物件來存取就不行了
    }
}


// 抽象類別，原生 JavaScript 目前還不支援 abstract class，但 TypeScript 支援
abstract class UIElement {
    constructor(public identifier: string) {}

    // abstract method to duplicate the UI element to a target location
    abstract clone(targetLocation: string): void;
}

// 實作 (繼承) 抽象類別
class SideDrawerElement extends UIElement {
    constructor(public identifier: string, public position: "left" | "right") {
        super(identifier);
    }

    clone(targetLocation: string): void {
        // implementation of cloning the side drawer element to the target location
    }
}