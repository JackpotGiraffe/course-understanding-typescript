type Operations = {
    readonly add: (a: number, b: number) => number;
    readonly sub: (a: number, b: number) => number;
};

type Results<T> = {
    -readonly [prop in keyof T]?: number; // if we add -readonly, and if any property is readonly in T, it will become writable here
}

let mathOperations: Operations = {
    add: (a: number, b: number) => a + b,
    sub: (a: number, b: number) => a - b,
};

let mathResults: Results<Operations> = {
    add: mathOperations.add(5, 3),
    sub: mathOperations.sub(10, 4),
}

console.log(mathResults); // { add: 8, sub: 6 }

mathResults.add = 20; // OK, because we removed readonly