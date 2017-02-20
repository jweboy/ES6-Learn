/*jshint esversion:6*/
/**
 * 模板字面量，提供创建领域专用语言的语法
 * 反引号(``)包裹
 */
console.group( '基本语法' );
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
