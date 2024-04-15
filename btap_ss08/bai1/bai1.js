"use strict";
function parseInput(a) {
    if (a === "null") {
        return null;
    }
    else if (a === "undefined") {
        return undefined;
    }
    else if (a === "true" || a === "false") {
        return a === "true";
    }
    else if (a === "string") {
        return a;
    }
    else {
        return a;
    }
}
console.log(parseInput("123"));
console.log(parseInput("undefined"));
