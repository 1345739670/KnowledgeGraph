
# 语句和声明



## for-in
`for...in` 语句以任意顺序遍历一个对象的可枚举（enumerable）属性。

- 语法:
```js
for (variable in object) {...}
```

- 参数:
  - `variable` 在每次迭代时，将不同的属性名分配给变量。
  - `object` 被遍历的对象。

- 示例:
```js
var obj = {a: 1, b: 2, c: 3};

for (var i in obj) {
  console.log('键名：', i);
  console.log('键值：', obj[i]);
}
// 键名： a
// 键值： 1
// 键名： b
// 键值： 2
// 键名： c
// 键值： 3
```

- 使用注意：
::: warning
- 它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性。
- 它不仅遍历对象自身的属性，还遍历继承的属性。
:::
举例来说，对象都继承了 `toString` 属性，但是 `for...in` 循环不会遍历到这个属性。
```js
var obj = {};

// toString 属性是存在的
obj.toString // toString() { [native code] }

for (var p in obj) {
  console.log(p);
} // 没有任何输出
```
上面代码中，对象 `obj` 继承了 `toString` 属性，该属性不会被 `for...in` 循环遍历到，因为它默认是“不可遍历”的。

::: tip
如果只想遍历对象自身的属性，在使用 `for...in` 的时候，应该结合使用 `hasOwnProperty` 方法。
:::
```js
var obj = {};

// toString 属性是存在的
obj.toString // toString() { [native code] }

for (var p in obj) {
  console.log(p);
} // 没有任何输出
```