function deepEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (typeof(objA) !== 'object' || objA === null || typeof(objB) !== 'object' || objB === null) {
        return false;
    }
    let keyA=Object.keys(objA);
    let keyB=Object.keys(objB);
    if (keyA.length !== keyB.length) {
     return false;
    }
    for (let key of keyA){
        if (!keyB.includes(key)){
            return false;
        }
        if (!deepEqual(objA[key],objB[key])){
            return false;
        }
    }
    return true;
}


console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }))
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } }))
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 }))

