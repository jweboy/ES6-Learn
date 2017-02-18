/*jshint esversion:6*/
class Test {
  test() {
    return 'test';
  }
}


const age = 24;
// var age = 24222;

{
  var test1  = 2111;
  let test = 1;
  console.dir(test);
}
console.dir(test1);

/**
 * const声明对象，会阻止变量绑定与变量自身值修改,不阻止对于变量成员的修改
 * @type {Object}
 */
const person = {
  name:'JL'
};
//ok
person.name = 'xb';
//error
// person = {};
// person = {
//   name:'nihao'
// }

/**
 * 暂时性死区(TDZ)
 * let 或 const 声明的变量在声明处之前无法被访问, 甚至影响了通常安全的 typeof 运算符
 */
// console.log(typeof value);
// console.log(typeof value1);
// let value = 'blue';
// const value1 = 'red';

/**
 * for循环块级绑定
 * @type {Number}
 */
for (var i = 0; i < 10; i++) {
  console.log('ing:'+i);
}
console.log('end:'+i);

for (let j = 0; j < 10; j++) {
  console.info('ing:'+j);
}
// console.info('end:'+j); //error

// for (const h = 0; h< 5; h++) {//error
//   console.log(h);
// }

var object = {
  a:true,
  b:false,
  c:2
};
/**
 * const变量可以在for-in和for-of中使用，同let
 * 循环为每次迭代创建一个新的变量绑定，而不是试图修改已有的变量值
 */
for (const key in object) {
  console.log(key);
}
for (const key of [1,2]) {
  console.log(key);
}

/**
 * var 声明全局变量，成为全局对象window的属性
 * const与let声明，只会屏蔽全局变量，不会污染全局作用域
 */
console.group('全局块级绑定');
console.log(window.alert);
/**
var alert = 'Hello World';
const alert = 'Hello World';
**/
let alert = 'Hello World';
console.log(alert);
console.log(window.alert);
console.groupEnd();

/**
 * 小结
 *
 *
 * 最佳实践：
 * 1.默认情况下用const
 * 2.知道变量值需要更改时用let
 * 3.全局用var
 */
