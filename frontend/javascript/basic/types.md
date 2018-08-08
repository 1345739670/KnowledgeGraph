
# 数据类型

JavaScript 的数据类型，共有六种。(ES6 又新增了第七种 Symbol 类型，这里暂不涉及)：

- Undefined
- Null
- Boolean
- Number
- String
- Object

前五种被称为基本数据类型，而最后一种 Object 则是引用类型。

Object（对象），又可以分为三个子类型：
- 狭义的对象（object）
- 数组（array）
- 函数（function）

## typeof

``typeof`` 运算符可以返回一个值的数据类型。

准确的来说，能准确区分基本数据类型，除了 ``null``。 但是区分不了引用类型（Object），除了函数。

``` js
// 问：JS中使用 typeof 能得到哪些类型？
typeof undefined // undefined
typeof 'abc' // string
typeof 123 // number
typeof true // boolean
typeof {} // object
typeof [] // object
typeof null // object
typeof console.log // function
```

``null`` 的类型是``object``，是引用类型。这是由于历史原因造成的。1995年的 JavaScript 语言第一版，只设计了五种数据类型（对象、整数、浮点数、字符串和布尔值），没考虑null，只把它当作object的一种特殊值。后来null独立出来，作为一种单独的数据类型，为了兼容以前的代码，typeof null返回object就没法改变了。

从逻辑的角度看，``null`` 表示一个空对象指针，所以使用 ``typeof`` 操作符检测 null 的时候会返回 ``object``。

此外，``typeof`` 还可以检查没有声明的变量，而不报错。
``` js
v
// ReferenceError: v is not defined

typeof v
// "undefined"
```
如果变量没有使用 ``var`` 声明，直接使用会报错，但放在 ``typeof`` 后面就不会报错，而是返回 ``undefined``

这个歌通常用在判断语句：
``` js
// 错误的写法
if (v) {
  // ...
}
// ReferenceError: v is not defined

// 正确的写法
if (typeof v === "undefined") {
  // ...
}
```

## Undefined
## Null




## Boolean
## Number
## String
## Object


