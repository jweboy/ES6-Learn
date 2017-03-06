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
console.groupEnd();

console.group( 'IIFE-立即执行函数' );
/**
 * 立即执行函数
 * @param  {[String]} name [name]
 * @return {[String]}      [name]
 *
 * 传统函数只有(function() {})(); || (function() {}());
 * es6的立即执行函数只有以下一种
 */
let person = ( ( name ) => {
	return {
		getName: () => {
			return name;
		}
	};
} )( 'JL' );
console.log( person.getName() );
console.groupEnd();

console.group( '没有ths绑定' );
/**
 * es6之前 通过bind(this)来修正,这个过程实际创建了一个新的函数,this绑定到当前的this(以下是当前对象)上
 * @type {Object}
 */
var someObj = {
	init: function () {
		document.addEventListener( 'click', function () {
			console.log( this );
		}, false );
	}
};
someObj.init();

var someObj1 = {
	init: function () {
		document.addEventListener( 'click', ( function () {
				console.log( this );
			} )
			.bind( this ), false );
	}
};
someObj1.init();

/**
 * es6的this是查找作用于链来确定的。
 * 如果箭头函数包含在一个非箭头函数内，this就与该非箭头函数的相等，反之则为undefined
 * @type {Object}
 */
var someObj2 = {
	init: function () {
		document.addEventListener( 'click', () => {
			console.log( this );
		}, false );
	}
};
someObj2.init();

/**
 * 箭头函数缺失[[Construct]]方法
 * 不能通过call() apply() bind()来改变this
 */
var myType = () => {};
// var newType = new myType();
// console.log( newType );
console.groupEnd();

console.group( '箭头函数与数组' );
/**
 * 简化函数回调
 * 同样适用于数组的map() reduce()等方法
 * @type {Array}
 */
var ary = [ 1, 4, 56, 34, 293, 34, 10 ];
var res = ary.sort( ( a, b ) => a - b );
console.log( res );
console.groupEnd();

console.group( '没有arguments绑定' );
/**
 * 箭头函数本身没有arguments
 * @param  {[Number]} a [a]
 * @param  {[Number]} b [b]
 * @return {Object,Array}   [arguments]
 */
var arrowFunc1 = ( a, b ) => {
	console.log( arguments );
};
//arrowFunc1( 1, 2 );
/**
 * 箭头函数可以访问包含它的函数的arguments
 * @return {Object,Array} [arguments]
 */
function arrowFunction() {
	return () => arguments;
}
var arrowFunc = arrowFunction( 2, 3, 5, 'JL' );

console.log( arrowFunc() );
console.groupEnd();

console.group( '识别箭头函数' );
/**
 * 箭头函数可以使用call() apply() bind()方法
 * 但是this绑定始终不会有影响
 */
let obj = {
	a: 1,
	b: 2
};
var sum = ( a, b ) => {
	console.log( 'func中：' + this );
	return a + b;
};
var bindSum = sum.bind( obj, 1, 2 );
console.log( sum() );
console.log( sum.call( obj, 1, 2 ) );
console.log( sum.apply( obj, [ 1, 2 ] ) );
console.log( bindSum() );
console.groupEnd();

console.group( '尾调用优化 —— 引擎优化' );
/**
 * 尾调用优化(tail call)
 * 调用函数的语句是另一个函数的最后语句
 * 在es5中过程如下：
 * 一个新的栈帧(stack frame)被创建并推到调用栈之上，用于表示该次函数调用。
 * 这意味着之前每个栈帧都被保留在内存中，当调用栈太大时会出问题。
 */
function doSomething() {
	return todo(); //尾调用
}
/**
 * es6在严格模式下位特定尾调用减少调用栈的大小(飞严格模式保持不变)
 * 尾调用优化会清除当前栈帧并再次利用它，而不是为尾调用创建新的栈帧
 * 条件：
 * 1. 尾调用不能引用当前栈帧中的变量（ 意味着该函数不能是闭包） ；
 * 2. 进行尾调用的函数在尾调用返回结果后不能做额外操作；
 * 3. 尾调用的结果作为当前函数的返回值
 */
"use strict";

function a() {
	return b(); //被优化
}

function c() {
	d(); //未被优化 ：缺失return
}

function e() {
	return 1 + f(); //未被优化 ：在返回之后还执行计算
}

function g() {
	/**
	 * 未被优化 ：调用不在尾部
	 * h()的值没有立即被返回
	 */
	let res = h();
	return res;
}

function i() {
	let num = 1,
		func = () => num;

	return func(); // 未被优化 ：闭包函数
}
/**
 * 控制尾调用优化
 */

/**
 * 原函数
 * 如果n是一个大数字，调用栈大小势必整长，可能会导致堆栈溢出
 */
function factorial( n ) {
	if ( n <= 1 ) {
		return 1;
	} else {
		return n * factorial( n - 1 ); //未被优化：在返回后还要执行计算
	}
}
/**
 * 参数p,默认值为1,保存着前一次乘法的结果,下一次的结果就能在进行函数调用之前被算出
 */
function factorial( n, p = 1 ) {
	if ( n <= 1 ) {
		return 1 * p;
	} else {
		let res = n * p;

		return factorial( n - 1, res );
	}
}

console.groupEnd();
