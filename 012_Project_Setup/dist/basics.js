"use strict";
console.log("Hello, World!");
let userName;
let userAge = 34;
userName = "Max";
function add(a, b = 5) {
    return a + b;
}
add(10);
add(10, 20);
