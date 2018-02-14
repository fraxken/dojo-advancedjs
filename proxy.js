const originalObject = {
    a: 5,
    b: 10
}

const proxyObject = new Proxy(originalObject, {
    get: function(target, propertyKey) {
        if(!Reflect.has(target, propertyKey)) {
            throw new RangeError(`property ${propertyKey} doesn't exist on the targeted object!`)
        }
        return Reflect.get(target, propertyKey) ** 2;
    },
    set: function(obj, propertyKey, propertyValue) {
        if(typeof(propertyValue) !== 'number') {
            throw new TypeError('This object only support number type');
        }
        Reflect.set(obj, propertyKey, propertyValue);
    }
});

console.log(proxyObject.a);
console.log(proxyObject.c);
proxyObject.c = 10;
proxyObject.d = "hello";