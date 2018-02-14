const { readFile }  = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(readFile);

const filesToLoad = [
    readFileAsync('./json/a.json'),
    readFileAsync('./json/b.json')
];

async function main() {
    const filesContent = await Promise.all(filesToLoad);
    console.log(filesContent.map($=>JSON.parse($)));

    for await (const buf of filesToLoad) {
        console.log(JSON.parse(buf));
    }
}
main().catch(console.error);