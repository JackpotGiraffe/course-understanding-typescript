"use strict";
function add2(a, b) {
    return a + b;
}
function log(message) {
    console.log(message);
}
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
const arrowLogMsg = (msg) => {
    console.log(msg);
};
function performJob(cb) {
    cb("Got new Job!!");
}
performJob(arrowLogMsg);
let user1 = {
    name: "Hielapha",
    age: 34,
    greet() {
        console.log("I'm dead!");
        return this.name;
    }
};
