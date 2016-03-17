var strToObj = require('./dotted-str-to-obj');

console.log(strToObj('a.b'));
console.log(strToObj('a.b.c'));
console.log(strToObj('a.b.c.d'));
