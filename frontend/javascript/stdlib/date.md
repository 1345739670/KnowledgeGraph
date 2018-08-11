

# Date 对象
`Date` 对象是 JavaScript 原生的时间库。它以1970年1月1日00:00:00作为时间的零点，可以表示的时间范围是前后各1亿天（单位为毫秒）。
## 作为普通函数调用
`Date` 对象可以作为普通函数直接调用，返回一个代表当前时间的字符串。
```js
Date()
// 'Fri Aug 10 2018 21:01:34 GMT+0800 (中国标准时间)'
```
::: warning
即使带有参数，`Date` 作为普通函数使用时，返回的还是当前时间。
:::
```js
Date(2000, 1, 1)
// 'Fri Aug 10 2018 21:01:34 GMT+0800 (中国标准时间)'
```

## 作为构造函数调用
`Date` 还可以当作构造函数使用。对它使用`new`命令，会返回一个`Date` 对象的实例。
```js
var today = new Date();
```

## 静态方法

### Date.now
Date.now方法返回当前时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数，相当于 Unix 时间戳乘以1000。
```js
Date.now() //1533905964080
```

## 实例方法
Date的实例对象，除了 `valueOf` 和 `toString` ，可以分为以下三类:
- `to`类：从 `Date` 对象返回一个字符串，表示指定的时间。
- `get`类：获取 `Date` 对象的日期和时间。
- `set` 类：设置` Date` 对象的日期和时间。

### getTime
返回当前距离1970年1月1日00:00:00的毫秒数
### getFullYear
返回4位数的年份
```js
var today = new Date();
today.getFullYear() 
//2018
```

### getMonth
返回月份（0 - 11）。
```js
var today = new Date();
today.getMonth()
//7
```

### getDate
返回日（0 - 31）。
```js
var today = new Date();
today.getDate()
//11
```

### getHours
返回小时（0-23）。
```js
var today = new Date();
today.getHours()
//10
```

### getMinutes
返回分钟（0-59）。
```js
var today = new Date();
today.getMinutes()
//28
```

### getSeconds
返回秒（0-59）。
```js
var today = new Date();
today.getSeconds()
//12
```

