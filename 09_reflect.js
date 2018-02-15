const Arr = [1, 2];
const Obj = {
    a: 10,
    b: 5
};

console.log(Reflect.has(Obj, 'a'));
console.log(Reflect.has(Arr, 0));
Reflect.defineProperty(Obj, 'c', {
    value: 'hello',
    enumerable: true,
    configurable: true,
    writable: false
});
console.log(Obj.c);
Obj.c = "world!";
console.log(Obj.c);
delete Obj.c;
console.log(Obj);
console.log('-----------');

const EmptyObj = {};
Reflect.defineProperty(EmptyObj, 'ghost', {
    value: 'wouhou!',
    enumerable: false
});
console.log(EmptyObj);
console.log(Object.keys(EmptyObj));
console.log(Reflect.get(EmptyObj, 'ghost'));
console.log(Reflect.ownKeys(EmptyObj));