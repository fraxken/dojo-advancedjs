const add = (a,b) => a+b;
const currying = a => b => a+b;

console.log(add(5,10));
console.log(currying(5)(10));
console.log('-----------');

global.name = 'bob';

const Personne01 = {
    name: 'thomas',
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
}
Personne01.greet();
const greet = Personne01.greet;
greet();
console.log('-----------');

const Personne02 = {
    name: 'alexandre',
    greet: () => {
        console.log(`Hello ${this.name}`);
    }
}
Personne02.greet();
const greetArrow = Personne02.greet;
greetArrow();