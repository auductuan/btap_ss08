"use strict";
function calculateArea(a, b) {
    if (a === "square") {
        return b * b;
    }
    else if (a === "circle") {
        return b * b + "π";
    }
    return "";
}
console.log(calculateArea("circle", 5));
