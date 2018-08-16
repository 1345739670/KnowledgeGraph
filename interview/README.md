---
sidebar: auto
sidebarDepth: 3
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


### 工具函数

1. 获取 2017-06-10 格式的日期
``` js
function formatDate(dt) {
  if (!dt) {
    dt = new Date()
  }
  var year = dt.getFullYear()
  var month = dt.getMonth()
  var date = dt.getDate()
  function addZero(num) {
    // if (num < 10) num = '0' + num
    num = (num < 10) ? '0' + num : num
    return num
  }
  month = addZero(month);
  date = addZero(date);
  return `${yrae}-${month}-${date}`
  formatDate = formatDate()
  console.log(formatDate)
}
```

2. 获取随机数，要求长度一致的字符串格式
``` js
var random = Math.random()
random = random + '0000000000'
random = random.slice(0, 10)
console.log(random)
```

3. 写一个能遍历对象和数组的通用函数
```js
function forEach(obj, fn) {
  var key
  if(obj instanceof Array) {
    // 如果是数组
    obj.forEach(function (item, index) {
      fn(index, item)
    })
  } else {
    // 如果是对象
    for (key in obj) {
      fn(key, obj[key])
    }
  }
}
```

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

### DOM

1. DOM 是哪种基本的数据结构？
树
2. DOM 操作常用的 API 有哪些？
- 新增节点
  -  `document.createElement`
  - `Element.appendChild`
```js
var div1 = document.createElement('div')
var p1 = document.createElement('p')
p1.innerHTML = 'this is p1'
div1.appendChild(p1)
```    
      
- 获取父元素和子元素
  - `Element.parentElement`
  - `Element.childNodes`
```js
var div1 = document.getElementById('div1')
var parent = div1.parentElement
var child = div1.childNodes
```

- 获取 attribute
```js
var p = document.getElementByTagName('p')[0]
p.getAttribute('date-name')
p.setAttribute('date-name', '123')
p.getAttribute('style')
p.setAttribute('style', 'font-size: 30px;')
```

- 获取 property
```js
var p = document.getElementByTagName('p')[0]
console.log(p.style.width) // 获取样式
p.style.width = '100px' // 修改样式
p.className // 获取 class
p.className = 'p1'
console.log(p.nodeName) // 获取 nodeName
console.log(p.nodeType) // 获取 nodeType
```
- 删除节点
  - `Element.removeChild`
```js
div1.removeChild(child[0])
```
3. DOM 节点的 attribute 和 property 有何区别？
- property 只是一个 JS 对象的属性的修改
- attribute 是对 html 标签属性的修改

### 事件
1. 编写一个通用的事件监听函数
```js
function bingEvent(elem, type, selector, fn) {
  if (fn === null) {
    fn = selector
    selector = null
  }
  elem.addEleventListener(type, function(e) {
    var target
    if (selector) {
      target = e.target
      if (target.matches(selector)) {
        fn.call(target, e)
      }
    } else {
      fn(e)
    }
  })
}
```

2. 描述事件冒泡流程

事件冒泡按照 DOM 树形结构进行。
"DOM2级事件"规定的事件流有三个阶段:

- **捕获阶段**：从 `document` 对象传导到触发事件的目标节点，遇到注册的捕获事件会触发。
- **目标阶段**：在目标节点上触发注册的事件。
- **冒泡阶段**：从目标节点传导回 `document` 对象。

虽然"DOM2级事件"规定捕获阶段从 `document` 对象开始，以及冒泡阶段从 `document` 对象结束。但是支持 DON 事件流的浏览器都是从 `windows` 对象开始和结束。

事件触发一般来说会按照上面的顺序进行，但是也有特例，如果给一个目标节点同时注册冒泡和捕获事件，事件触发会按照注册的顺序执行。

3. 对于一个无线下拉加载图片的页面，如何给每个图片绑定事件。

使用事件代理。

### AJAX
1. 手动编写一个 AJAX ,不依赖第三方库。
```js
var xhr = new XMLHttpRequest()
xhr.open("get", "/api", false)
xhr.onreadystatechange = function () {
  // 异步执行代码
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      alert(xhr.responseText)
    }
  }
}
xhr.send(null)
```
### 跨域
1. 跨域的几种实现方式

### 存储

1. 请描述一下 cookie ，sessionStorge 和 localStorage 的区别

- cookie

本身用于客户端和服务端通信

但是它有本地存储的功能，所以在 HTML5 之前被用来存储本地信息。

使用 document.cookie = ... 获取和修改

缺点：

每个 Cookie 的大小一般不能超过4KB。

浏览器每次向服务器发送http请求，就会自动附上这段信息，会影响获取资源的速率。

API 简单，需要封装才能用 document.cookie = ...

- localStorage 和 sessionStorage

HTML5 专门为存储而设计，最大容量 5M

API 简单易用：localStorage.setItem(key, value) localStorage.getItem(key);


## CSS
### [基本概念](/frontend/JS)
## HTML
### [基本概念](/frontend/JS)

