/*jshint esversion:6*/
console.group('禁止重复声明');
const age = 24;
// var age = 24222;
// let age = 23;
console.groupEnd();

console.groupCollapsed('块级声明');
{
  var test1  = 2111;
  let test = 1;
  console.dir(test);
}
console.dir(test1);
console.groupEnd();

console.group('常量声明');
/**
 * const声明对象，会阻止变量绑定与变量自身值修改,不阻止对于变量成员的修改
 * @type {Object}
 */
const person = {
  name:'JL'
};
person.name = 'xb';
console.dir(person);
//error
// person = {};
// person = {
//   name:'nihao'
// }
console.groupEnd();

console.groupCollapsed('暂时性死区(TDZ)');
/**
 * 暂时性死区(TDZ)
 * let 或 const 声明的变量在声明处之前无法被访问, 甚至影响了通常安全的 typeof 运算符
 */
// console.log(typeof value);
// console.log(typeof value1);
// let value = 'blue';
// const value1 = 'red';
console.groupEnd();

console.groupCollapsed('循环中的块级绑定');
/**
 * var导致变量提升,i变为全局变量,每次循环结束依然能够访问的到
 * @type {Number}
 */
for (var i = 0; i < 10; i++) {
  console.log('ing:'+i);
}
//始终输出最后的数值,i在每次迭代被共享，即引用同一变量
console.log('end:'+i);
/**
 * let声明也适用于for-in for-of循环
 * @type {Number}
 */
for (let j = 0; j < 10; j++) {
  console.info('ing:'+j);
}
// console.info('end:'+j); //此处访问不到j

/**
* const变量可以在for-in和for-of中使用，同let
* 循环为每次迭代创建一个新的变量绑定，而不是试图修改已有的变量值
*/
// for (const h = 0; h< 5; h++) {//试图修改已有的变量值，error
//   console.log(h);
// }
var object = {
  a:true,
  b:false,
  c:2
};
for (const key in object) {
  console.log(key);
}
for (const key of [1,2]) {
  console.log(key);
}
console.groupEnd();

console.groupCollapsed('全局块级绑定');
/**
 * var 声明全局变量，成为全局对象window的属性
 * const与let声明，只会屏蔽全局变量，不会污染全局作用域
 */
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
 *for-in和for-of循环，let和const在每次迭代创建一个新的绑定
 *var 统一使用循环结束的变量值
 *for循环不能用const
 *
 * 最佳实践：
 * 1.默认情况下用const
 * 2.知道变量值需要更改时用let
 * 3.全局用var
 */
