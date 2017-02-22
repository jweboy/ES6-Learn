/*jshint esversion:6*/
console.group( '基本语法' );
/**
 * 模板字面量，提供创建领域专用语言的语法
 * 反引号(``)包裹
 */
const msg = `Hello World`;
/**
 * 反斜杠(\)转义,双引号+单引号无需转义
 * @type {[type]}
 */
const msg1 = `\`Hello\` World1`;
const msg2 = `"Hello" world`;
const msg3 = `'Hello World'`;

console.log( msg );
console.log( msg1 );
console.log( msg2 );
console.log( msg3 );
console.groupEnd();

console.group( '字符串换行方案' );
/**
 * es6之前的语法bug，反斜线(\)创建多行字符串，
 * 打印不会输出 \ , 它被视为延续符号，不是换行符号
 * @type {String}
 */
var msg4 = 'hello \
world \
2222';
console.log( msg4 );
/**
 * 显示换行 \n\
 * 被认为是js的bug 不推荐使用
 * @type {String}
 */
var msg5 = '1.Multiline \n\
2.string\n\
3.number';
console.log( msg5 );

/**
 * es6 简单换行解决方案
 * 反引号之内的空白会作为字符串的一部分存在
 * @type {[type]}
 */
let msg6 = `hello
            world`;
let msg7 = `hello world`;
console.log( msg6 );
console.log( msg7 );

/**
 * 多行文本合适缩进，设置模板字面量的第一行空置，再用trim()移除起始的空格
 * @type {[type]}
 */
let html = `
<div>
  <p>title</p>
  <p>name</p>
</div>`.trim();
console.log( html );
// document.write( html );
console.groupEnd();

console.group( '替换位' );
/**
 * 将有效的js表达式嵌入到字面量中，并将结果输出为字符串的一部分
 * 可以嵌入变量名，表达式，函数
 */
let name = 'JL',
	message = `hello, ${name}`;
console.log( message );

let count = 10,
	price = 0.5,
	mess = `${count} items cost $${(count*price).toFixed(2)}`;
console.log( mess );
