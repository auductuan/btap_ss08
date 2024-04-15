"use strict";
function a1(a) {
    if (typeof a === 'string') {
        console.log(a);
    }
    else if (typeof a === 'object') {
        a.forEach(i => {
            console.log(i);
        });
    }
}
a1(["a", "b", "c"]);
a1("a");
