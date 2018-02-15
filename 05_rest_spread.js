function restArg(...args) {
    console.log(args);
}
restArg(1, 2, 3);
console.log('-----------');

const arr = [1, 2, 3];
restArg(...arr);

const arrEmpty = ['a'];
arrEmpty.push(...['b', 'c']);
console.log(arrEmpty);
console.log('-----------');

const fusion = [...arr, ...arrEmpty];
console.log(fusion);