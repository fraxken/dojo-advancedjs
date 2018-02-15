
function onePromise(name) {
    return Promise.resolve(`hello ${name}`);
}
// ES6 
onePromise('Thomas').then(console.log);

// ES8 with Async & Await
async function main() {
    console.log(await onePromise('Thomas'));
}
main().catch(console.error);