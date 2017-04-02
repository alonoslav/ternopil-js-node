const arithmeticModule = require('./module-exports');
const someData = require('./default-exports');

const { a, b } = someData;

console.log(arithmeticModule.add(a, b)); // 5
console.log(arithmeticModule.sub(a, b)); // 3
