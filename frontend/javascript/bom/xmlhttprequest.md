

# XMLHttpRequest 对象

## 概述

浏览器与服务器之间，采用 HTTP 协议通信。用户在浏览器地址栏键入一个网址，或者通过网页表单向服务器提交内容，这时浏览器就会向服务器发出 HTTP 请求。

2005年2月，AJAX 这个词第一次正式提出，它是 Asynchronous JavaScript and XML 的缩写，指的是通过 JavaScript 的异步通信，从服务器获取 XML 文档从中提取数据，再更新当前网页的对应部分，而不用刷新整个网页。后来，AJAX 这个词就成为 JavaScript 脚本发起 HTTP 通信的代名词，也就是说，只要用脚本发起通信，就可以叫做 AJAX 通信。W3C 也在2006年发布了它的国际标准。

具体来说，AJAX 包括以下几个步骤。

1. 创建 XMLHttpRequest 实例
2. 发出 HTTP 请求
3. 接收服务器传回的数据
4. 更新网页数据

概括起来，就是一句话，AJAX 通过原生的 `XMLHttpRequest` 对象发出 HTTP 请求，得到服务器返回的数据后，再进行处理。现在，服务器返回的都是 JSON 格式的数据，XML 格式已经过时了，但是 AJAX 这个名字已经成了一个通用名词，字面含义已经消失了。

`XMLHttpRequest` 对象是 AJAX 的主要接口，用于浏览器与服务器之间的通信。尽管名字里面有 `XML` 和 `Http` ，它实际上可以使用多种协议（比如 `file` 或 `ftp` ），发送任何格式的数据（包括字符串和二进制）。

`XMLHttpRequest` 本身是一个构造函数，可以使用new命令生成实例。它没有任何参数。

```js
var xhr = new XMLHttpRequest();
```

一旦新建实例，就可以使用open()方法发出 HTTP 请求。

```js
xhr.open('GET', 'http://www.example.com/page.php', true);
```

上面代码向指定的服务器网址，发出 GET 请求。

然后，指定回调函数，监听通信状态（readyState属性）的变化。

```js
ajax.onreadystatechange = handleStateChange;

function handleStateChange() {
  // ...
}
```

上面代码中，一旦 `XMLHttpRequest` 实例的状态发生变化，就会调用监听函数 `handleStateChange`

一旦拿到服务器返回的数据，AJAX 不会刷新整个网页，而是只更新网页里面的相关部分，从而不打断用户正在做的事情。

::: warning
AJAX 只能向同源网址（协议、域名、端口都相同）发出 HTTP 请求，如果发出跨域请求，就会报错。
:::

下面是 `XMLHttpRequest` 对象简单用法的完整例子。

```js
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
  // 通信成功时，状态值为4
  if (xhr.readyState === 4){
    if (xhr.status === 200){
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};

xhr.onerror = function (e) {
  console.error(xhr.statusText);
};

xhr.open('GET', '/endpoint', true);
xhr.send(null);
```

## 构造方法

### `XMLHttpRequest()`

构造函数初始化一个 `XMLHttpRequest` 对象。必须在所有其他方法被调用前调用构造函数。

## 实例属性

### XMLHttpRequest.readyState

`XMLHttpRequest.readyState` 返回一个整数，表示实例对象的当前状态。该属性只读。它可能返回以下值。


| 值 | 状态              | 描述                                             |
| --|:----------------- | :------------------------------------------------|
| 0 | `UNSET`           | 代理被创建，但尚未调用 `open()` 方法。             |
| 1 | `OPPENED`         | `open()` 方法已经被调用。                         |
| 2 | `HEADER_RECEIVED` | `send()` 方法已经被调用，并且头部和状态已经可获得。 |
| 3 | `LOADING`         | 下载中；`responseText` 属性已经包含部分数据。      |
| 4 | `DONE`            | 下载操作已完成。                                  |

状态如下：
- UNSENT

    XMLHttpRequest 代理已被创建， 但尚未调用 open() 方法。

- OPENED

    open() 方法已经被触发。在这个状态中，可以通过  setRequestHeader() 方法来设置请求的头部， 可以调用 send() 方法来发起请求。

- HEADERS_RECEIVED

    send() 方法已经被调用，响应头也已经被接收。

- LOADING

    响应体部分正在被接收。如果 `responseType` 属性是“text”或空字符串， `responseText` 将会在载入的过程中拥有部分响应数据。

- DONE

    请求操作已经完成。这意味着数据传输已经彻底完成或失败。

### XMLHttpRequest.onreadystatechange()

`XMLHttpRequest.onreadystatechange` 属性指向一个监听函数。`readystatechange` 事件发生时（实例的readyState属性变化），就会执行这个属性。

如果使用实例的abort()方法，终止 XMLHttpRequest 请求，也会造成readyState属性变化，导致调用XMLHttpRequest.onreadystatechange属性。

例子:

```js
var xhr = new XMLHttpRequest();
xhr.open( 'GET', 'http://example.com' , true );
xhr.onreadystatechange = function () {
  if (xhr.readyState !== 4 || xhr.status !== 200) {
    return;
  }
  console.log(xhr.responseText);
};
xhr.send();
```



### XMLHttpRequest.status

`XMLHttpRequest.status` 属性返回一个整数，表示服务器回应的 HTTP 状态码。该属性只读。
一般来说，如果通信成功的话，这个状态码是200；如果服务器没有返回状态码，那么这个属性默认是200。
请求发出之前，该属性为0。



<!-- 
| 值 | 状态              | 描述                                             |
| --|:----------------- | :------------------------------------------------|
| 2xx | `UNSET`           | 表示成功处理请求。如200             |
| 3xx | `OPPENED`         | `open()` 方法已经被调用。                         |
| 2 | `HEADER_RECEIVED` | `send()` 方法已经被调用，并且头部和状态已经可获得。 |
| 3 | `LOADING`         | 下载中；`responseText` 属性已经包含部分数据。      |
| 4 | `DONE`            | 下载操作已完成。                                  | -->

- **2xx**

表示成功处理请求。如200

- **3xx**

需要重定向，浏览器直接跳转

- **4xx**

客户端请求错误，如404

- **5xx**

服务端错误

## 实例方法

### XMLHttpRequest.open()

XMLHttpRequest.open()方法用于指定 HTTP 请求的参数，或者说初始化 XMLHttpRequest 实例对象。它一共可以接受五个参数。

- 语法：

```js
xhrReq.open(method, url);
xhrReq.open(method, url, async);
xhrReq.open(method, url, async, user);
xhrReq.open(method, url, async, user, password);
```

- 参数：
    - `method`：要使用的HTTP方法，比如「GET」、「POST」、「PUT」、「DELETE」、等。对于非HTTP(S) URL被忽略。
    - `url`： 一个DOMString表示要向其发送请求的URL。
    - `async`:(可选) 布尔值，表示请求是否为异步，默认为true。如果设为false，则send()方法只有等到收到服务器返回了结果，才会进行下一步操作。该参数可选。由于同步 AJAX 请求会造成浏览器失去响应，许多浏览器已经禁止在主线程使用，只允许 Worker 里面使用。所以，这个参数轻易不应该设为 `false` 。
    - `async`:(可选) 用于认证的用户名；默认为 `null` 。
    - `async`:(可选) 用于认证的密码，默认为 `null` 。

- 示例：
```js
var xhr = new XMLHttpRequest();
xhr.open('POST', encodeURI('someURL'));
```

::: warning
如果对使用过open()方法的 AJAX 请求，再次使用这个方法，等同于调用abort()，即终止请求。
:::


### XMLHttpRequest.send()

`XMLHttpRequest.send()` 方法用于实际发出 HTTP 请求。它的参数是可选的，如果不带参数，就表示 HTTP 请求只包含头信息，也就是只有一个 URL，典型例子就是 GET 请求；如果带有参数，就表示除了头信息，还带有包含具体数据的信息体，典型例子就是 POST 请求。

下面是 GET 请求的例子。

```js
var xhr = new XMLHttpRequest();
xhr.open('GET',
  'http://www.example.com/?id=' + encodeURIComponent(id),
  true
);
xhr.send(null);

// 等同于
var data = 'id=' + encodeURIComponent(id);
xhr.open('GET', 'http://www.example.com', true);
xhr.send(data);
```

上面代码中， `GET` 请求的参数，可以作为查询字符串附加在 URL 后面，也可以作为 `send` 方法的参数。

下面是发送 POST 请求的例子。

```js
var xhr = new XMLHttpRequest();
var data = 'email='
  + encodeURIComponent(email)
  + '&password='
  + encodeURIComponent(password);

xhr.open('POST', 'http://www.example.com', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send(data);
```

::: warning
所有 XMLHttpRequest 的监听事件，都必须在 `send()` 方法调用之前设定。
:::

### XMLHttpRequest.setRequestHeader()

`XMLHttpRequest.setRequestHeader()` 方法用于设置浏览器发送的 HTTP 请求头的信息。

::: warning
该方法必须在 `open()` 之后、`send()` 之前调用。
:::

::: tip
如果该方法多次调用，设定同一个字段，则每一次调用的值会被合并成一个单一的值发送。
:::

- 语法：
```js
myReq.setRequestHeader(header, value);
```

- 参数：
  - `header`: 属性的名称。
  - `value`: 属性的值。

- 示例：
```js
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('Content-Length', JSON.stringify(data).length);
xhr.send(JSON.stringify(data));
```

### XMLHttpRequest.abort()

XMLHttpRequest.abort()方法用来终止已经发出的 HTTP 请求。

调用这个方法以后，`readyState` 属性变为4，`status` 属性变为0。

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://www.example.com/page.php', true);
setTimeout(function () {
  if (xhr) {
    xhr.abort();
    xhr = null;
  }
}, 5000);
```

上面代码在发出5秒之后，终止一个 AJAX 请求。

## XMLHttpRequest 实例的事件

### readyStateChange 事件

readyState属性的值发生改变，就会触发 readyStateChange 事件。

我们可以通过onReadyStateChange属性，指定这个事件的监听函数，对不同状态进行不同处理。

### readyStateChange 事件

上传文件时，XMLHTTPRequest 实例对象本身和实例的upload属性，都有一个progress事件，会不断返回上传的进度。

### load 事件、error 事件、abort  事件

- load 事件表示服务器传来的数据接收完毕，
- error 事件表示请求出错，
- abort 事件表示请求被中断（比如用户取消请求）。

```js
var xhr = new XMLHttpRequest();

xhr.addEventListener('load', transferComplete);
xhr.addEventListener('error', transferFailed);
xhr.addEventListener('abort', transferCanceled);

xhr.open();

function transferComplete() {
  console.log('数据接收完毕');
}

function transferFailed() {
  console.log('数据接收出错');
}

function transferCanceled() {
  console.log('用户取消接收');
}
```







