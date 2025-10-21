// 使用 infer 關鍵字來推斷回傳值型別
type FnReturnValueType<T> = T extends (...args: any[]) => infer R ? R : never;

// One example
function add(a: number, b: number) {
    return a + b;
}
type AddFn = typeof add; // (a: number, b: number) => number
type AddFnReturnType = FnReturnValueType<AddFn>; // number

// Another example
function concatenate(a: string, b: string): string {
    return a + b;
}
type ConcatenateFn = typeof concatenate; // (a: string, b: string) => string
type ConcatenateFnReturnType = FnReturnValueType<ConcatenateFn>; // string