//  class equivalent to the following C structure:
//  struct User { char username[16]; float age }
class User {

    constructor(username, age) {
        this.buffer = new ArrayBuffer(20);
        this.username = username;
        this.age = age;
    }

    set buffer(buffer) {
        this._buffer = buffer;
        this._username = new Uint8Array(this._buffer, 0, 12)
        this._age = new Float32Array(this._buffer, 16, 1)
    }
    get buffer() { return this._buffer }

    set username(v) { this._username[0] = v }
    get username() { return this._username[0] }

    set age(v) { this._age[0] = v }
    get age() { return this._age[0] }
}

const Thomas = new User('Thomas.G', 23);
console.log(Thomas);