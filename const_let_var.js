// Quel va être l'output ?
const payload = ['a', 'b', 'c'];
for (var i = 0; i < payload.length; i++) {
    setTimeout(function () {
        console.log(`Index => ${i}, Element value => ${payload[i]}`);
    }, 1);
}

// Hoisting
(function() {
    a = 'hello world!';
    console.log(a);
    {
        var a;
    }
})();

// Shadowing with let
{
    let a = 5;
    console.log(a);
    {
        let a = 10;
        console.log(a);
    }
    console.log(a);
}