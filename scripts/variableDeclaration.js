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
console.info('end:'+j);
