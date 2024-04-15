"use strict";
function check(a) {
    if (typeof a === "number") {
        return "number";
    }
    else if (Array.isArray(a)) {
        return "Array";
    }
    else if (typeof a === "object" && a !== null) {
        return "object";
    }
    else {
        return "ko xác định";
    }
}
console.log(check(5));
console.log(check([1, 2, 3]));
console.log(check({ name: "Tuan" }));
console.log(check("hello"));
console.log(check(null));
