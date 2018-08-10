

# Math 对象

## 静态方法

### Math.abs
Math.abs方法返回参数值的绝对值。
```js
Math.abs(-1) // 1
```

### Math.max
`Math.max` 方法返回参数之中最大的那个值
```js
Math.max(2, -1, 5) // 5
```
::: warning
如果参数为空, `Math.max`返回 `-Infinity`。
:::

### Math.min
`Math.min` 返回最小的那个值。
```js
Math.min(2, -1, 5) // -1
```
::: warning
如果参数为空, `Math.min` 返回 `Infinity`。
:::

### Math.floor
向下取整。
```js
Math.floor(3.2) // 3
Math.floor(-3.2) // -4
```

### Math.ceil
向上取整。
```js
Math.ceil(3.2) // 4
Math.ceil(-3.2) // -3
```

### Math.round
四舍五入
::: tip
如果参数的小数部分大于0.5，则舍入到下一个绝对值更大的整数。
如果参数的小数部分小于0.5，则舍入到下一个绝对值更小的整数。
如果参数的小数部分等于0.5，则舍入到下一个在正无穷方向上的整数。
:::
```js
Math.round(0.1) // 0
Math.round(0.5) // 1
```

::: warning
和其他语言中的 `round` 函数 `Math.round` 并不总是舍入远离0的地方。（尤其是在负数的小部分恰好等于0.5的情况下）
:::
```js
Math.round(-1.1) // -1
// 应用第二条规则：小数部分等于0.5，则舍入到下一个在正无穷方向上的整数
Math.round(-1.5) // -1
Math.round(-1.6) // -2
```

### Math.random
返回0到1之间的一个伪随机数，可能等于0，但是一定小于1。
```js
Math.random() // 0.7151307314634323
```