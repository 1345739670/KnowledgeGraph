

# Document

## 方法
### document.createElement
`document.createElement` 方法用来生成元素节点，并返回该节点
```js
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
```

createElement方法的参数为元素的标签名，即元素节点的tagName属性。对于 HTML 网页大小写不敏感，即参数为div或DIV返回的是同一种节点。

::: warning
如果参数里面包含尖括号（即<和>）会报错。
:::
```js
document.createElement('<div>');
// DOMException: The tag name provided ('<div>') is not a valid name
```

::: tip
虽然 `HTML` 对大小写不敏感，即无论参数为 `div` 或 `DIV` 返回的是同一种节点。但在 `HTML5` 中，`W3C` 的规范是要求元素标签使用小写。所以参数最好还是使用小写。
:::

### document.getElementsByTagName
`document.getElementsByTagName` 方法搜索 HTML 标签名，返回符合条件的元素。如果没有任何匹配的元素，就返回一个空集。

它的返回值是一个类似数组对象（`HTMLCollection` 实例）。
```js
var paras = document.getElementsByTagName('p');
paras instanceof HTMLCollection // true
```

::: tip
对大小写不敏感。但根据 `W3C` 的规范，建议小写。
:::

::: tip
返回结果中，各个成员的顺序就是它们在文档中出现的顺序。
:::

::: tip
注意，元素节点本身也定义了 `getElementsByTagName` 方法，返回该元素的后代元素中符合条件的元素。也就是说，这个方法不仅可以在document对象上调用，也可以在任何元素节点上调用。
```js
var firstPara = document.getElementsByTagName('p')[0];
var spans = firstPara.getElementsByTagName('span');
```
:::

### document.getElementsByClassName
`document.getElementsByClassName` 方法搜索 HTML 标签名，返回符合条件的元素。如果没有任何匹配的元素，就返回一个空集。它的返回值是一个类似数组对象（`HTMLCollection` 实例）。

```js
var elements = document.getElementsByClassName('foo bar');
```

::: tip
参数可以是多个class，它们之间使用空格分隔，顺序不重要。
```js
var elements = document.getElementsByClassName('foo bar');
```
:::

::: warning
正常模式下，CSS 的class是大小写敏感的。（quirks mode下，大小写不敏感。）
:::

::: tip
注意，元素节点本身也定义了 `getElementsByTagName` 方法，返回该元素的后代元素中符合条件的元素。也就是说，这个方法不仅可以在document对象上调用，也可以在任何元素节点上调用。
:::

### document.getElementsByName
document.getElementsByName方法用于选择拥有name属性的 HTML 元素（比如 `<form>` 、`<radio>` 、 `<img>` 、 `<frame>` 、 `<embed>` 和 `<object>` 等），返回一个类似数组的的对象（ `NodeList` 实例），因为 `name` 属性相同的元素可能不止一个。

```js
// 表单为 <form name="x"></form>
var forms = document.getElementsByName('x');
forms[0].tagName // "FORM"
```

### document.getElementById
`document.getElementById` 方法返回匹配指定 `id` 属性的元素节点。如果没有发现匹配的节点，则返回 `null` 。

```js
var elem = document.getElementById('para1');
```

- 使用注意
::: warning
大小写敏感
:::

::: warning
这个方法只能在 `document` 对象上使用，不能在其他元素节点上使用。
:::






















