'use strict';
foo();
foo2();
function foo() {
    alert('foo is working');
}
let foo2 = function () {
    alert('foo2 is working');
}

function foo3() {
    return 'foo3 is working';
}
console.log(foo3())
function sayHi(name) {
    alert('Привет' + name)
}
sayHi("Иван")
sayHi("Вася")
sayHi("Наташа")
function sum(a, b) {
    return a + b;
}
let answer = sum(2, 2);
console.log(answer)
let sum2 = (a, b) => a + b