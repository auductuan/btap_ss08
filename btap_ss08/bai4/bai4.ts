function arr(a:number|number[]):number|number[] {
    if(typeof a === 'number'){
        return a*a
    }else if(Array.isArray(a)){
        return a.map(item=>item*item)
    }
    return a;
}
console.log(arr(4));
console.log(arr([2,3,4]));