

# 事件模型
浏览器的事件模型，就是通过监听函数（listener）对事件做出反应。事件发生后，浏览器监听到了这个事件，就会执行对应的监听函数。这是事件驱动编程模式（event-driven）的主要编程方式。

JavaScript 有三种方法，可以为事件绑定监听函数。

## 监听函数

响应某个事件的函数就叫做监听函数（或事件侦听器、事件处理程序）。

监听函数的名字以 `on` 开头。因此， `click` 事件的监听函数就是 `onclick` , 同理， `load` 事件的监听函数就是 `onload` 。

### HTML 的 on- 特性

HTML 语言允许在元素的特性（attribute）中，直接定义某些事件的监听代码。

通过与相应监听函数同名的 HTML 的特性，也就是以 `on` 开头加上事件名的 HTML 事件监听特性来指定事件监听函数。

例如：

```html
<body onload="doSomething()">
<div onclick="console.log('触发事件')">
```

上面的代码为 `body` 节点 的 `load` 事件、 `div` 节点的 `click` 事件，指定监听的事件发生后执行的代码。


::: warning
监听特性的值是将会执行的代码，而不是函数名。
:::

一旦指定的事件发生，监听特性的值是原样传入 JavaScript 引擎执行。因此如果要执行函数，不要忘记加上一对圆括号。
```html
<!-- 正确 -->
<body onload="doSomething()">

<!-- 错误 -->
<body onload="doSomething">
```

::: tip
该方法指定的监听代码，只会在冒泡阶段触发。
:::

```html
<div onClick="console.log(2)">
  <button onClick="console.log(1)">点击</button>
</div>
```

上面代码中， `<button>` 是 `<div>` 的子元素。 `<button>` 的 `click` 事件，也会触发 `<div>` 的 `click` 事件。由于监听特性的监听代码，只在冒泡阶段触发，所以点击结果是先输出1，再输出2，即事件从子元素开始冒泡到父元素。

### 元素节点的事件属性
通过对元素节点对象的事件属性（property），来指定监听函数。

例如：

```js
window.onload = doSomething;

div.onclick = function (event) {
  console.log('触发事件');
};
```

::: tip
该方法指定的监听代码，只会在冒泡阶段触发。
:::

::: warning 注意
该方式与 HTML 的 监听属性指定监听函数方法的差异是，它的值是函数名（doSomething），而不像后者，必须给出完整的监听代码（doSomething()）。
:::

### EventTarget.addEventListener()

所有 DOM 节点实例都有addEventListener方法，用来为该节点定义事件的监听函数。

```js
window.addEventListener('load', doSomething, false);
```

### 小结
- “HTML 的 on- 特性”，违反了 HTML 与 JavaScript 代码相分离的原则，将两者写在一起，造成 HTML 与 JavaScript 代码高度耦合。因此不推荐使用。

- 元素节点的事件属性”的缺点在于，同一个事件只能定义一个监听函数，也就是说，如果定义两次onclick属性，后一次定义会覆盖前一次。因此，也不推荐使用。

- EventTarget.addEventListener是推荐的指定监听函数的方法。它有如下优点：
    - 同一个事件可以添加多个监听函数。
    - 能够指定在哪个阶段（捕获阶段还是冒泡阶段）触发监听函数。
    - 除了 DOM 节点，其他对象（比如 `window` 、 `XMLHttpRequest` 等）也有这个接口，它等于是整个 JavaScript 统一的监听函数接口。

## this 的指向
监听函数内部的 `this` 指向触发事件的那个元素节点。
```html
<button id="btn" onclick="console.log(this.id)">点击</button>
```
执行以上代码，输出 `btn`

其他两种监听函数的写法，this的指向也是如此。

```js
// HTML 代码如下
// <button id="btn">点击</button>
var btn = document.getElementById('btn');

// 写法一
btn.onclick = function () {
  console.log(this.id);
};

// 写法二
btn.addEventListener(
  'click',
  function (e) {
    console.log(this.id);
  },
  false
);
```
## 事件的传播

"DOM2级事件"规定的事件流有三个阶段:

- **捕获阶段**：从 `document` 对象传导到触发事件的目标节点，遇到注册的捕获事件会触发。
- **目标阶段**：在目标节点上触发注册的事件。
- **冒泡阶段**：从目标节点传导回 `document` 对象。

::: warning 注意
虽然"DOM2级事件"规定捕获阶段从 `document` 对象开始，以及冒泡阶段从 `document` 对象结束。但是支持 DON 事件流的浏览器都是从 `windows` 对象开始和结束。
:::

::: tip
事件触发一般来说会按照上面的顺序进行，但是也有特例，如果给一个目标节点同时注册冒泡和捕获事件，事件触发会按照注册的顺序执行。
:::

```js
// 以下会先打印冒泡然后是捕获
node.addEventListener('click',(event) =>{
	console.log('冒泡')
},false);
node.addEventListener('click',(event) =>{
	console.log('捕获 ')
},true)
```

## 事件的代理
由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。这种方法叫做事件的代理（delegation）。

```js
var ul = document.querySelector('ul');

ul.addEventListener('click', function (event) {
  if (event.target.tagName.toLowerCase() === 'li') {
    // some code
  }
});
```

上面代码中，`click` 事件的监听函数定义在 `<ul>`节点，但是实际上，它处理的是子节点 `<li>` 的click事件。这样做的好处是，只要定义一个监听函数，就能处理多个子节点的事件，而不用在每个 `<li>` 节点上定义监听函数。而且以后再添加子节点，监听函数依然有效。

如果希望事件到某个节点为止，不再传播，可以使用事件对象的 `stopPropagation` 方法。

```js
// 事件传播到 p 元素后，就不再向下传播了
p.addEventListener('click', function (event) {
  event.stopPropagation();
}, true);

// 事件冒泡到 p 元素后，就不再向上冒泡了
p.addEventListener('click', function (event) {
  event.stopPropagation();
}, false);
```

上面代码中，stopPropagation方法分别在捕获阶段和冒泡阶段，阻止了事件的传播。

但是， `stopPropagation` 方法只会阻止事件的传播，不会阻止该事件触发 `<p>` 节点的其他 `click` 事件的监听函数。也就是说，不是彻底取消 `click` 事件。

```js
p.addEventListener('click', function (event) {
  event.stopPropagation();
  console.log(1);
});

p.addEventListener('click', function(event) {
  // 会触发
  console.log(2);
});
```

上面代码中，p元素绑定了两个click事件的监听函数。stopPropagation方法只能阻止这个事件的传播，不能取消这个事件，因此，第二个监听函数会触发。输出结果会先是1，然后是2。

如果想要彻底取消该事件，不再触发后面所有click的监听函数，可以使用stopImmediatePropagation方法。

```js
p.addEventListener('click', function (event) {
  event.stopImmediatePropagation();
  console.log(1);
});

p.addEventListener('click', function(event) {
  // 不会被触发
  console.log(2);
});
```

上面代码中，stopImmediatePropagation方法可以彻底取消这个事件，使得后面绑定的所有click监听函数都不再触发。所以，只会输出1，不会输出2。
