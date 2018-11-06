---
sidebar: auto
---
# 页面布局

## 假设高度已知，请写出三栏布局，其中左栏、右栏宽度各位300px,中间自适应

拓展：
每个方案的优缺点
考虑高度，哪个不能用
- 浮动
缺点：脱离文档流
优点： 兼容性好
```html
<section class="layout float">
<style media>
    .layout.float .left-right-center {
        float: left;
        width: 300px;
        background: red;
    }
    .layout .right {
        float: right;
        width: 300px;
        background: blue;
    }
    .layout .center {
        background: yellow;
    }
</style>
    <article class="left-right-center">
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
    </article>
</section>

```

```css
* {
    padding: 0;
    margin: 0;
}
.layout {
    margin-top: 20;
}
.layout article div {
    min-height: 100px;
}

```

- 绝对定位
缺点：脱离文档流，子元素也必须脱离文档流，使用性较差
优点： 快捷
```html
<section class="layout absolute">
<style media>
    .layout.absolute .left-right-center>div {
        position: absolute;

    }
    .layout.absolute .left {
        left: 0;
        width: 300px;
        background: red;
    }
    .layout.absolute .center {
        left: 300px;
        right: 300px;
        background: yellow;
    }
    .layout.absolute .right {
        right: 0px;
        width: 300px;
        background: red;
    }
</style>
    <article class="left-right-center">
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
    </article>
</section>

```
```css
* {
    padding: 0;
    margin: 0;
}
.layout article div {
    min-height: 100px;
}

```
- flex
缺点：PC兼容性不太好
优点： 几乎完美
```html
<section class="layout flexbox">
<style media>
    .layout.flexbox .left-right-center {
        display: flex;
    }
    .layout.flexbox .left {
        width: 300px;
        background: red;
    }
    .layout.flexbox .center {
        flex: 1;
        background: yellow;
    }
    .layout.flexbox .right {
        width: 300px;
        background: blue;
    }
</style>
    <article class="left-right-center">
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
    </article>
</section>

```
```css
* {
    padding: 0;
    margin: 0;
}
.layout article div {
    min-height: 100px;
}

```
- 表格
缺点：脱离文档流，子元素也必须脱离文档流，使用性较差
优点： 兼容性好
```html
<section class="layout table">
<style media>
    .layout.table .left-right-center {
        width: 100%;
        height: 100px;
        display: table;
    }
    .layout.table .left-right-center>div {
        display: table-cell;
    }
    .layout.table .left {
        width: 300px;
        background: red;
    }
    .layout.table .center {
        background: yellow;
    }
    .layout.table .right {
        width: 300px;
        background: blue;
    }
</style>
    <article class="left-right-center">
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
    </article>
</section>

```
```css
* {
    padding: 0;
    margin: 0;
}
.layout article div {
    min-height: 100px;
}

```

- 网格布局

```html
<section class="layout grid">
<style media>
    .layout.grid .left-right-center {
        width: 100%;
        display: grid;
        grid-template-rows: 100px;
        grid-template-colums: 300px auto 300px;
    }

    .layout.grid .left {
        background: red;
    }
    .layout.grid .center {
        background: yellow;
    }
    .layout.grid .right {
        background: blue;
    }
</style>
    <article class="left-right-center">
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
    </article>
</section>

```
```css
* {
    padding: 0;
    margin: 0;
}
.layout article div {
    min-height: 100px;
}

```