---
sidebar: auto
sidebarDepth: 2
---
# 面试
## JS
### 基础知识
1. JS中使用 typeof 能得到哪些类型？

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

``typeof`` 能准确区分基本数据类型，除了 ``null``。 但是区分不了引用类型（Object），除了函数。
``null`` 表示一个空对象指针，所以使用 ``typeof`` 操作符检测 null 的时候会返回 ``object``。

2. 何时使用 === 何时使用 ==

``` js
// 问：何时使用 === 何时使用 ==
if (obj.a == null) {
  // 这里相当于 obj.a === null || obj.a === undefined 的简写形式
  // 也是 jQuery 中的写法
}
```
当判断某个变量等于``null`` 或等于 ``undefined`` 即 ``obj.a === null || obj.a === undefined`` 这种情况用 ``==`` ，其他都用``===``

== 会进行强制类型转换，而 === 不会进行转换。


3. JS 中有哪些内置函数 —— 数据封装类对象
``` js
// 问：JS 中有哪些内置函数 —— 数据封装类对象
Object
Array
Boolean
Number
Function
Date
Math
RegRxp
Error
```

3. JS 变量按存储方式区分为哪些类型，并描述其特点。
``` js
// 问：JS 变量按存储方式区分为哪些类型，并描述其特点。

// 基本数据类型
var a = 10;
var b = a;
a = 11;
console.log(b) // 10

// 引用类型
var obj1 = {x: 100};
var obj2 = obj1;
obj1.x = 300;
console.log(obj2.x) // 300
```

基本数据类型：多个变量分开不同的内存空间存储。
引用类型：多个变量共用一个内存存储空间。

4. 如何理解 JSON
``` js
// 问：如何理解 JSON
JSON.stringify({a: 10, b: 20})
JSON.parse('{"a": 10, "b": 20}')
```

JSON 是一种数据格式。
在 js 语法中，JSON 只是一个 js 内置的原生对象，有两个静态方法：``JSON.stringify()``和``JSON.parse()``。

5. 如何准确判断一个变量是数据类型

``` js
// 问：如何准确判断一个变量是数据类型
var arr = []
arr instanceof Array //true
typeof arr // object
```

6. 写一个原型链继承的例子

``` js
// 封装 DOM 查询的例子

function Elem (id) {
  this.elem = document.getElementById(id)
}

Elem.prototype.html = function (val) {
  var elem = this.elem
  if (val) {
    elem.innerHTML = val
    // return 出去方便链式操作
    return this
  } else {
    return elem.innerHTML
  }
}

Elem.prototype.on = function (type, fn) {
  var elem = this.elem
  elem.addEleventListener(type, fn)
  return this
}

var div1 = new Elem('div1')
```

7. 描述 new 一个对象的过程

- 创建一个新的空对象
- [[prototype]]连接。即将空对象的原型，指向构造函数的 ``prototype`` 属性.
- 将空对象绑定到构造函数内部的this。
- 执行函数的代码。如果构造函数没有返回其他对象，那么返回这个新对象。

8. 变量提升

- 创建一个新的空对象
- [[prototype]]连接。即将空对象的原型，指向构造函数的 ``prototype`` 属性.
- 将空对象绑定到构造函数内部的this。
- 执行函数的代码。如果构造函数没有返回其他对象，那么返回这个新对象。

### 执行上下文

1. 对变量提升的理解

### 原型

### 作用域

1. 如何理解作用域

- 自由变量
- 作用域链，即自由变量的查找
- 闭包的两个使用场景
  - 函数作为返回值
  - 函数作为参数传递

### 闭包

1. 创建10个``<a>``标签点击的时候弹出相应序号
2. 实际开发中闭包的使用场景


### this
1. this 的几种不同的使用场景
- 作为构造函数执行
- 作为对象属性执行
- 作为普通函数执行
- call apply bind

### 异步
1. 前端使用异步的场景有哪些？
- 定时任务： settimeout, setinverval
- 网络请求： ajax 请求，动态 ``<img>``加载
- 事件绑定




## CSS
### [基本概念](/frontend/JS)
## HTML
### [基本概念](/frontend/JS)

