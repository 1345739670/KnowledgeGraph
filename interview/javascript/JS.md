---
sidebar: auto
---

# JS
## 基础概念

### 数据类型

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

### typeof

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
