/*jshint esversion:6*/
/**
 * 箭头函数与传统JS的区别
 * 1.没有this, arguments, super, new.target绑定;
 * 2.不能被new调用，也就是不能作为构造函数，也就没有[[Construct]]方法;
 * 3.没有原型，也就是没有prototype属性
 * 4.不能更改函数内部的this，整个函数声明周期中保持不变
 * 5.没有arguments绑定，必须使用具名参数或剩余参数来访问函数的参数部分;
 * 6.不允许有重复的具名参数，无论是否在严格模式中。
 *
 * 相同点：
 * 箭头函数有name属性，遵循与其他函数相同的规则。
 */
console.group( '语法' );
/**
 * 单个参数
 * @param  {[param]} value [param]
 * @return {[param]}       [param]
 *
 */
//参数 => 函数体
var reflect = value => value;
var testReflect = reflect( 1 );
console.log( testReflect );
//传统函数
var reflect = function ( value ) {
	return value;
};

/**
 * 多参数
 * @param  {[Number]} num1 [num1]
 * @param  {[Number]} num2 [num1]
 * @return {[Number]}      [num1+num2]
 */
var sum = ( num1, num2 ) => num1 + num2;

/**
 * 无参数
 * @return {[String]} ['JL']
 */
var getName = () => 'JL';

/**
 * 函数体内多语句
 * @param  {[Number]} num1 [num1]
 * @param  {[Number]} num2 [num2]
 * @return {[Number]}      [num1 + num2 + num3]
 */
var sum = ( num1, num2 ) => {
	let num3 = 111;
	return num1 + num2 + num3;
};
var all = sum( 1, 2 );
console.log( all );
/**
 * 空函数
 */
var dothing = () => {};
/**
 * 函数体返回对象
 * @param  {[Number]} id   [id]
 * @param  {[String]} name [name]
 * @return {[Object]}      [object]
 */
var getTempItem = ( id, name ) => ( {
	id: id,
	name: name
} );
var testObj = getTempItem( 1, 'JL' );
console.log( testObj );
