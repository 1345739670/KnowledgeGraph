

# EventTarget 接口

DOM 的事件操作（监听和触发），都定义在EventTarget接口。所有节点对象都部署了这个接口，其他一些需要事件通信的浏览器内置对象（比如，XMLHttpRequest、AudioNode、AudioContext）也部署了这个接口。

该接口主要提供三个实例方法。

- `addEventListener`：绑定事件的监听函数
- `removeEventListener`：移除事件的监听函数
- `dispatchEvent`：触发事件

## EventTarget.addEventListener()

`EventTarget.addEventListener()`用于在当前节点或对象上，定义一个特定事件的监听函数。一旦这个事件发生，就会执行监听函数。

- 语法:

```js
target.addEventListener(type, listener[, useCapture]);
```

- 参数:
  - `type`: 事件名称。大小写敏感。
  - `listener`：监听函数。事件发生时，会调用该监听函数。
  - `useCapture`：（可选）布尔值，表示监听函数是否在捕获阶段触发，默认为 `false` （监听函数只在冒泡阶段被触发）。

- 返回值: 没有返回值。

- 例子：

```js
function hello() {
  console.log('Hello world');
}

var button = document.getElementById('btn');
button.addEventListener('click', hello, false);
```

上面代码中，`button` 节点的 `addEventListener` 方法绑定 `click` 事件的监听函数 `hello` ，该函数只在冒泡阶段触发。

::: tip
`addEventListener` 方法可以为针对当前对象的同一个事件，添加多个不同的监听函数。这些函数按照添加顺序触发，即先添加先触发。如果为同一个事件多次添加同一个监听函数，该函数只会执行一次，多余的添加将自动被去除（不必使用removeEventListener方法手动去除）。
:::

```js
function hello() {
  console.log('Hello world');
}

document.addEventListener('click', hello, false);
document.addEventListener('click', hello, false);
```

执行上面代码，点击文档只会输出一行Hello world。

::: tip
如果希望向监听函数传递参数，可以用匿名函数包装一下监听函数。
:::

```js
function print(x) {
  console.log(x);
}

var el = document.getElementById('div1');
el.addEventListener('click', function () { print('Hello'); }, false);
```
上面代码通过匿名函数，向监听函数 `print` 传递了一个参数。


::: tip
监听函数内部的this，指向当前事件所在的那个对象。
:::

```js
// HTML 代码如下
// <p id="para">Hello</p>
var para = document.getElementById('para');
para.addEventListener('click', function (e) {
  console.log(this.nodeName); // "P"
}, false);
```

## EventTarget.removeEventListener()

`EventTarget.removeEventListener` 方法用来移除 `addEventListener` 方法添加的事件监听函数。该方法没有返回值。

该方法的参数，与addEventListener方法完全一致，而且也没有返回值。

- 例子：

```js
function hello() {
  console.log('Hello world');
}
```

::: warning
`removeEventListener` 方法移除的监听函数，必须是 `addEventListener` 方法添加的那个监听函数，而且必须在同一个元素节点，否则无效。
:::

```js
div.addEventListener('click', function (e) {}, false);
div.removeEventListener('click', function (e) {}, false);
```
上面代码中，`removeEventListener` 方法无效，因为监听函数不是同一个匿名函数。

```js
element.addEventListener('mousedown', handleMouseDown, true);
element.removeEventListener("mousedown", handleMouseDown, false);
```

上面代码中， `removeEventListener` 方法也是无效的，因为第三个参数不一样。

## EventTarget.dispatchEvent()

`EventTarget.dispatchEvent` 方法在当前节点上触发指定事件，从而触发监听函数的执行。该方法返回一个布尔值，只要有一个监听函数调用了Event.preventDefault()，则返回值为false，否则为true。

- 语法:

```js
target.dispatchEvent(event)
```

- 参数:
  - `event`: `Event` 对象的实例

- 返回值: 布尔值。只要有一个监听函数调用了 `Event.preventDefault()` ，则返回值为 `false` ，否则为 `true` 。

- 例子：

```js
para.addEventListener('click', hello, false);
var event = new Event('click');
para.dispatchEvent(event);
```

上面代码在当前节点触发了 `click` 事件。

::: warning
如果 `dispatchEvent` 方法的参数为空，或者不是一个有效的事件对象，将报错。
:::

::: tip
根据dispatchEvent方法的返回值，判断事件是否被取消了。
:::

```js
var canceled = !cb.dispatchEvent(event);
if (canceled) {
  console.log('事件取消');
} else {
  console.log('事件未取消');
}
```

