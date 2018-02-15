function greet(name = 'bob') {
    console.log(`Hello ${name}`);
}
greet('Thomas');
greet(undefined);
console.log('-----------');

function throwNotEmpty(varName) {
    throw new TypeError(`${varName} argument can't be undefined`);
}
function greetThrow(name = throwNotEmpty('name')) {
    console.log(`Hello ${name}`);
}
greetThrow('Thomas');
greetThrow(undefined);