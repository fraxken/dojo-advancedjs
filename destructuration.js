const arr = [1, 2, 3];
const [firstArrValue,,ThirdArrValue] = arr;
console.log(firstArrValue);
console.log(ThirdArrValue);
console.log('-----------');

const [userName, age = 10] = process.argv.slice(2);
console.log(`userName => ${userName}`);
console.log(`age => ${age}`);
console.log('-----------');

const obj = {
    a: 'hello',
    b: 'world!'
}
const { a, b: bNew, c = 'wahou!!!' } = obj;
console.log(a);
console.log(bNew);
console.log(c);
console.log('-----------');

function readFile(fileName, { encoding = 'utf-8' }) {
    console.log(encoding);
}
readFile('hello.txt', {
    encoding: 'iso'
});
console.log('-----------');

const checkArrLength = expectLength => ({ length }) => length === expectLength;
const baseLineSize = checkArrLength(2);
console.log(baseLineSize([1, 2]));
console.log(baseLineSize([1]));
