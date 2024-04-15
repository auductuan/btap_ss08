function calculateArea(a:string, b:number): string | number {
    if(a === "square"){
        return b * b;
    } else if(a === "circle"){
        return b * b +"π";
    }
    return "";
}
console.log(calculateArea("circle", 5));
