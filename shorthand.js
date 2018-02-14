const a = 5;
const b = 10;
const obj = { a, b };
console.log(obj);
console.log('-----------');

const fn = {
    greet() {
        console.log('hello');
    }
}
fn.greet();
console.log('-----------');

const keyName = 'hello';
const _t = {
    [keyName]: 'world!'
};
console.log(_t.hello);