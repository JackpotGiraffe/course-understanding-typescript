// Getter and Setter in TypeScript
class User5 {
    // constructor(private firstName: string, private lastName: string) {}
    private _firstName: string = "";
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