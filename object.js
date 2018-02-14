const obj = {
    a: 5,
    b: 10,
    c: void 0
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

for(const [key, value = NaN] of Object.entries(obj)) {
    console.log(`key => ${key}, value => ${value}`);
}

Object.assign(obj, { a: 10, c: 20 });
console.log(obj);