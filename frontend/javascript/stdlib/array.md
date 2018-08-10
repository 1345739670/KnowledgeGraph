

# Array 对象

## 实例方法

### concat
`concat` 方法用于多个数组的合并。将新数组的成员，添加到原数组成员的后部，然后返回一个新数组，原数组不变。

- 语法:
```js
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
```

- 参数:
  - `valueN` 被添加到数组末尾的元素。

- 返回值: 新的数组

- 示例：
```js
var alpha = ['a', 'b', 'c'];
var numeric = [1, 2, 3];

alpha.concat(numeric);
// result in ['a', 'b', 'c', 1, 2, 3]
```
### slice
`slice` 方法用于提取目标数组的一部分，返回一个新数组，原数组不变。

- 语法:
```js
arr.slice([start][,end]);
// [0, end]
```

- 参数:
  - `start` (可选)
    - 从该索引处开始提取原数组中的元素（从0开始）。
    - 如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，slice(-2)表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。
    - 如果省略 begin，则 slice 从索引 0 开始。
  - `end` (可选)
    - 在该索引处结束提取原数组元素（从0开始）。slice会提取原数组中索引从 begin 到 end 的所有元素（包含begin，但不包含end）。
    - 如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。 slice(-2,-1)表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。
    - 如果 end 被省略，则slice 会一直提取到原数组末尾。
    - 如果 end 大于数组长度，slice 也会一直提取到原数组末尾。

- 返回值: 一个含有提取元素的新数组

- 示例：
```js
var a = ['a', 'b', 'c'];

a.slice(0) // ["a", "b", "c"]
a.slice(1) // ["b", "c"]
a.slice(1, 2) // ["b"]
a.slice(2, 6) // ["c"]
a.slice() // ["a", "b", "c"]
```

- 使用注意：
::: warning
`slice` 不修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组。原数组的元素会按照下述规则拷贝：
- 如果该元素是个对象引用 （不是实际的对象），slice 会拷贝这个对象引用到新的数组里。两个对象引用都引用了同一个对象。如果被引用的对象发生改变，则新的和原来的数组中的这个元素也会发生改变。
- 对于字符串、数字及布尔值来说（不是 String、Number 或者 Boolean 对象），slice 会拷贝这些值到新的数组里。在别的数组里修改这些字符串或数字或是布尔值，将不会影响另一个数组。
:::


### splice
`splice` 方法用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。

::: warning
注意，该方法会改变原数组。
:::

- 语法:
```js
array.splice(start[, deleteCount[, item1[, item2[, ...itemN]]]])
```

- 参数:
  - `start`
    指定修改的开始位置（从0计数）。如果超出了数组的长度，则从数组末尾开始添加内容；如果是负值，则表示从数组末位开始的第几位（从-1计数）；如果负数的绝对值大于数组的长度，则表示开始位置为第0位。
  - `deleteCount` (可选)
    - 整数，表示要移除的数组元素的个数。如果 deleteCount 是 0，则不移除元素。这种情况下，至少应添加一个新元素。如果 deleteCount 大于start 之后的元素的总数，则从 start 后面的元素都将被删除（含第 start 位）。
    - 如果 `deleteCount` 被省略，则其相当于(arr.length - start)。
  - `itemN`

- 返回值: 由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。

- 示例：
```js
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(4, 2, 1, 2) // ["e", "f"]
a // ["a", "b", "c", "d", 1, 2]
```

- 其他: 
::: tip
如果只是单纯地插入元素，`splice` 方法的第二个参数可以设为0。
:::
```js
var a = [1, 1, 1];

a.splice(1, 0, 2) // []
a // [1, 2, 1, 1]

// 从尾部插入
a.splice(a.length, 0, 3)
a // [1, 2, 1, 1, 3]
```

### push
`push` 方法用于在数组的末端添加一个或多个元素，并返回改变后的数组长度。

- 语法:
```js
arr.push(element1, ..., elementN)
```

::: warning
该方法会改变原数组。
:::

- 参数:
  - `elementN` 被添加到数组末尾的元素。

- 返回值: 新的 `length` 属性

- 示例：
```js
var arr = [];

arr.push(1) // 1
arr.push('a') // 2
arr.push(true, {}) // 4
arr // [1, 'a', true, {}]
```

### pop
`pop` 方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。

- 语法:
```js
arr.pop()
```

::: warning
该方法会改变原数组。
:::

- 返回值:从数组中删除的元素(当数组为空时返回 `undefined`)。

- 示例：

```js
var arr = ['a', 'b', 'c'];

arr.pop() // 'c'
arr // ['a', 'b']
```

- 其他
::: tip
`push` 和 `pop` 结合使用，就构成了“后进先出”的栈结构（stack）。
:::

```js
var arr = [];
arr.push(1, 2);
arr.push(3);
arr.pop();
arr // [1, 2]
```

上面代码中，3是最后进入数组的，但是最早离开数组。

### shift
`shift` 删除数组的第一个元素，并返回该元素。

- 语法:
```js
arr.shift()
```

::: warning
该方法会改变原数组。
:::

- 返回值: 从数组中删除的元素; 如果数组为空则返回 `undefined` 。

- 示例：
```js
var a = ['a', 'b', 'c'];

a.shift() // 'a'
a // ['b', 'c']
```

### unshift
`unshift` 方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。

- 语法:
```js
arr.unshift(element1, ..., elementN)
```
::: warning
该方法会改变原数组。
:::

- 参数：
  - `elementN` 要添加到数组开头的元素。

- 返回值: 返回修改后的数组长度即其 `length` 属性值。

- 示例：
```js
var arr = [ 'c', 'd' ];
arr.unshift('a', 'b') // 4
arr // [ 'a', 'b', 'c', 'd' ]
```

- 其他
::: tip
`push` 和 `shift` 结合使用，就构成了“先进先出”的队列结构（queue）。
:::

### map
`map` 方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回。

- 语法:
```js
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array  
}[, thisArg])
```

- 参数:
  - `callback` 用来生成新数组元素的函数，使用三个参数：
    - `currentValue` 正在处理的当前元素
    - `index` 当前元素的索引
    - `array` 正在操作的数组。
  - `thisArg`（可选）当执行回调函数时用作`this`的值(参考对象)。

- 返回值：一个新数组，每个元素都是回调函数的结果。

- 示例：

```js
[1, 2, 3].map(function(elem, index, arr) {
  return elem * index;
});
// [0, 2, 6]
```

上面代码中，`map` 方法的回调函数有三个参数，`elem` 为当前成员的值，`index` 为当前成员的位置，`arr` 为原数组（[1, 2, 3]）。

```js
ar arr = ['a', 'b', 'c'];

[1, 2].map(function (e) {
  return this[e];
}, arr)
// ['b', 'c']
```
上面代码通过 `map` 方法的第二个参数，将回调函数内部的 `this` 对象，指向 `arr` 数组。


- 使用注意：
::: warning
`map` 方法不会跳过 `undefined` 和 `null` ，但是会跳过空位。
:::


### forEach
`forEach` 方法对数组的每个元素执行一次提供的函数。

- 语法:
```js
array.forEach(callback(currentValue, index, array){
    //do something
}, this)

array.forEach(callback[, thisArg])
```

- 参数:
  - `callback` 是为数组中每个元素执行的回调函数，接受三个参数：
    - `currentValue` 正在处理的当前元素
    - `index` 当前元素的索引
    - `array` 正在操作的数组。
  - `thisArg`（可选）当执行回调函数时用作`this`的值(参考对象)。


- 返回值：`undefined`

::: tip
该方法不返回值，所以一般用来操作数据，而不是像 `map` 一样为了得到返回值。
:::

- 示例：
```js
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}

[2, 5, 9].forEach(logArrayElements);

// a[0] = 2
// a[1] = 5
// a[3] = 9
```

上面代码中，`forEach` 遍历数组不是为了得到返回值，而是为了输出内容，所以不必使用map方法。

 `thisArg` 的例子:

```js
var out = [];

[1, 2, 3].forEach(function(elem) {
  this.push(elem * elem);
}, out);

out // [1, 4, 9]
```
上面代码中，空数组 `out` 是 `forEach` 方法的第二个参数，结果，回调函数内部的 `this` 关键字就指向 `out` 。



- 使用注意：
::: warning
`forEach` 方法无法中断执行，总是会将所有成员遍历完。如果希望满足某种条件时，就中断遍历，需要要使用`for`循环。
:::

```js
var arr = [1, 2, 3];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === 2) break;
  console.log(arr[i]);
}
// 1
```

::: warning
`forEach` 方法不会跳过`undefined` 和 `null` ，但会跳过空位。
:::

```js
var log = function (n) {
  console.log(n + 1);
};

[1, undefined, 2].forEach(log)
// 2
// NaN
// 3

[1, null, 2].forEach(log)
// 2
// 1
// 3

[1, , 2].forEach(log)
// 2
// 3
```


### every
判断元素的所有元素是否都符合条件

- 语法:
```js
arr.every(function callback(currentValue[, index[, array]]) {
  // ...
}[, thisArg])
```

- 参数：
  - `callback` 用来测试每个元素的函数。
    - `currentValue` 正在处理的当前元素
    - `index` 当前元素的索引
    - `index` forEach方法正在操作的数组。
  - `thisArg`（可选） 执行 `callback` 时使用的 `this` 值。


- 返回值: 所有元素均满足条件则返回 `true` ,否则返回 `false`

- 示例：

```js
var arr = [1, 2, 3, 4, 5];
arr.every(function (elem, index, arr) {
  return elem >= 3;
});
// false
```

- 使用注意：
::: warning
对于空数组，`every` 方法返回 `true` ，回调函数不会执行
:::

### some
判断是否有至少一个元素符合条件

- 语法:
```js
arr.some(function callback(currentValue[, index[, array]]) {
  // ...
}[, thisArg])
```

- 参数：
  - `callback` 用来测试每个元素的函数。
    - `currentValue` 正在处理的当前元素
    - `index` 当前元素的索引
    - `array` forEach方法正在操作的数组。
  - `thisArg`（可选） 执行 `callback` 时使用的 `this` 值。

- 返回值: 只要有一个元素均满足条件则返回 `true` ,否则返回 `false`

- 示例：
```js
var arr = [1, 2, 3, 4, 5];
arr.some(function (elem, index, arr) {
  return elem >= 3;
});
// true
```

- 使用注意：
::: warning
对于空数组，`some` 方法返回 `false` ，回调函数不会执行.
:::

### sort
对数组成员进行排序，默认是按照字典顺序排序。

::: warning
排序后，原数组将被改变。
:::

```js
['d', 'c', 'b', 'a'].sort()
// ['a', 'b', 'c', 'd']

[4, 3, 2, 1].sort()
// [1, 2, 3, 4]

[11, 101].sort()
// [101, 11]

[10111, 1101, 111].sort()
// [10111, 1101, 111]
```

`sort` 方法不是按照大小排序，而是按照字典顺序。也就是说，数值会被先转成字符串，再按照字典顺序进行比较，所以101排在11的前面。

::: tip
如果想按照自定义方式排序，可以传入一个函数作为参数。
:::

```js
[10111, 1101, 111].sort(function (a, b) {
  // 从小到大排序
  return a - b;

  // 从大到小排序
  // return a - b;
})
// [111, 1101, 10111]
```
```js
[10111, 1101, 111].sort(function (a, b) {
  // 从小到大排序
  return a - b;

  // 从大到小排序
  // return a - b;
})
// [111, 1101, 10111]
```

上面代码中，sort的参数函数本身接受两个参数，表示进行比较的两个数组成员。**如果该函数的返回值大于0，表示第一个成员排在第二个成员后面**。其他情况下，都是第一个元素排在第二个元素前面。


### filter
`filter` 方法用于过滤数组成员，满足条件的成员组成一个新数组返回。

- 语法：
```js
var new_array = arr.filter(callback(currentValue[, index[, array]])[, thisArg])
```

- 参数：
  - `callback` 用来测试每个元素的函数。
    - `currentValue` 正在处理的当前元素
    - `index` 当前元素的索引
    - `index` 正在操作的数组。
  - `thisArg`（可选） 执行 `callback` 时使用的 `this` 值。

- 返回值：返回结果为 `true` 的元素组成的新数组，如果没有通过测试则返回空数组

- 示例：
```js
[1, 2, 3, 4, 5].filter(function (elem) {
  return (elem > 3);
})
// [4, 5]
```