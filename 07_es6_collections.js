// Set
const Teams = new Set(['red', 'blue']);
console.log(Teams.has('red'));
console.log(Teams.has('green'));
Teams.add('green');
console.log(Teams.size);

console.log(new Set([1, 1, 1, 2, 3, 3]));
console.log('-----------');

class User {
    constructor(name) {
        this.name = name;
    }
}
const Thomas = new User('thomas');
const Alexandre = new User('alexandre');

const NodeJS_Team = new Set([Thomas, Alexandre]);
for(const Developer of NodeJS_Team.values()) {
    console.log(Developer)
}
console.log('-----------');

// Map
const Players = new Map();
Players.set('Thomas', {
    score: 10
});
Players.set('Alexandre', {
    score: 2
});
for(const [k, v] of Players.entries()) {
    console.log(k, v.score);
}
Players.delete('Thomas');
console.log(Players.size);
console.log(Players.has('Alexandre'));