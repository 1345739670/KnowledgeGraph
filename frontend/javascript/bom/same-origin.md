

# 同源限制

## 概述

### 含义

所谓“同源”指的是”三个相同“。
- 协议相同
- 端口相同
- 域名相同

### 目的

同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。

同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。

设想这样一种情况：A 网站是一家银行，用户登录以后，A 网站在用户的机器上设置了一个 Cookie，包含了一些隐私信息（比如存款总额）。用户离开 A 网站以后，又去访问 B 网站，如果没有同源限制，B 网站可以读取 A 网站的 Cookie，那么隐私信息就会泄漏。更可怕的是，Cookie 往往用来保存用户的登录状态，如果用户没有退出登录，其他网站就可以冒充用户，为所欲为。因为浏览器同时还规定，提交表单不受同源政策的限制。

由此可见，同源政策是必需的，否则 Cookie 可以共享，互联网就毫无安全可言了。


### 可以跨域的三个标签

有三个标签允许跨域加载资源

- `<img src="xxx">`
    - `<img>`用于打点统计，统计网站可能是其他域名
- `<link href="xxx">`
    - CDN
- `<script src="xxx">`
    - CDN
    - JSONP 跨域

### 限制范围

目前，如果非同源，共有三种行为受到限制。

- 无法读取非同源网页的 Cookie、LocalStorage 和 IndexedDB。

- 无法接触非同源网页的 DOM。

- 无法向非同源地址发送 AJAX 请求（可以发送，但浏览器会拒绝接受响应）。


## AJAX

同源政策规定，AJAX 请求只能发给同源的网址，否则就报错。

除了架设服务器代理（浏览器请求同源服务器，再由后者请求外部服务），有三种方法规避这个限制。

- JSONP
- WebSocket
- CORS

### JSONP

JSONP 是服务器与客户端跨源通信的常用方法。

最大特点就是简单适用，老式浏览器全部支持，服务端改造非常小。

它的基本思想是，网页通过添加一个 `<script>` 元素，向服务器请求 JSON 数据，这种做法不受同源政策限制；服务器收到请求后，将数据放在一个指定名字的回调函数里传回来。

```js
function addScriptTag(src) {
  var script = document.createElement('script');
  script.setAttribute("type","text/javascript");
  script.src = src;
  document.body.appendChild(script);
}

window.onload = function () {
  addScriptTag('http://example.com/ip?callback=foo');
}

function foo(data) {
  console.log('Your public IP address is: ' + data.ip);
};
```

上面代码通过动态添加 `<script>` 元素，向服务器example.com发出请求。注意，该请求的查询字符串有一个callback参数，用来指定回调函数的名字，这对于 JSONP 是必需的。

服务器收到这个请求以后，会将数据放在回调函数的参数位置返回。

```js
foo({
  "ip": "8.8.8.8"
});
```

由于 `<script>` 元素请求的脚本，直接作为代码运行。这时，只要浏览器定义了foo函数，该函数就会立即调用。作为参数的 JSON 数据被视为 JavaScript 对象，而不是字符串，因此避免了使用JSON.parse的步骤。