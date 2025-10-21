type StringArray = string[];
type ElementType = StringArray[number]; // string
// type ElementType<T> = T[number]; // generic version, can be reused for other array types

type Example0<T extends any[]> = T[number]; // generic version that works for any array type

type Example1 = Example0<StringArray>; // string
let text = 1;

// type Example2 = Example0<typeof text>; // Error: Type 'number' does not satisfy the constraint 'any[]'.

type GetElementType<T> = T extends any[] ? T[number] : never; // conditional type to check if T is an array
type Example2 = GetElementType<StringArray>; // string
type Example3 = GetElementType<typeof text>; // never

type FullnamePerson = {
    firstName: string;
    lastName: string;
};
type FullnameOrNothing<T> = T extends FullnamePerson ? string : never;

function getFullName<T extends object>(person: T): FullnameOrNothing<T> {
    if (
        "firstName" in person &&
        "lastName" in person &&
        person.firstName &&
        person.lastName
    ) {
        return `${person.firstName} ${person.lastName}` as FullnameOrNothing<T>;
    }

    throw new Error("No firstName or / and lastName property found.");
}

// getFullName({ firstName: "Hielapha" }); // Error at compile time
// getFullName({ lastName: "Lin" }); // Error at compile time

console.log(getFullName({ firstName: "Hielapha", lastName: "Lin" })); // OK, returns string