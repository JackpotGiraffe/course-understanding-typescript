"use strict";
function processAny(val) {
    val.log();
}
function processUnknown(val) {
    if (typeof val === "object" &&
        !!val &&
        "log" in val &&
        typeof val.log === "function") {
        val.log();
    }
}
