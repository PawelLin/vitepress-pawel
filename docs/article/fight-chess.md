# 用CSS的Grid布局画飞行棋盘
## 1. Grid布局简单介绍
网格布局Grid，可以将网页划分成一个个网格，组合任意不同的布局。采用容器(container)定义项目(item)分布，项目(item)可设置自身行列高度。
```
<div class="container">
     <div class="item">1</div>
     <div class="item">2</div>
     <div class="item">3</div>
     <div class="item">4</div>
<div>
```
```
// 定义一个2*2的网格，上下左右间距为2px
.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 2px 2px;
    width: 100px;
    height: 100px;
}
// 定义项目行列占比都是1
.item {
    grid-area: span 1 / span 1; // 占1行 / 占1列
}
```
![效果图](/fight-chess/1.webp)

## 2. Grid布局画飞行棋盘
I. 分析
![飞行棋盘布局分析](/fight-chess/2.webp)
如图，横轴上长度可看作由9个长方形及4个正方形组成(纵轴也是)，假设长方形宽高为2 : 3，正方形宽高为3，可将飞行棋盘看作是30 * 30的网格进行布局。
* 4个角的大正方形占7行7列 ( [7, 7] )
* 中间的正方形占4行4列 ( [4, 4] )
* 中间通道的正方形占2行2列 ( [2, 2] )
* 其余长方形占2行3列 ( [2, 3] )
* 其余正方形占3行3列 ( [3, 3] )
* 虚线框为白色透明块 ( [4, 4], [1, 4], [3, 5], [1, 4] )

各行列的项目占比矩阵如下
```
[7, 7], [3, 3], [3, 2], [3, 2], [3, 2], [3, 2], [3, 2], [3, 3], [7, 7]
[2, 3], [4, 4], [2, 2], [4, 4], [2, 3]
[2, 3], [2, 2], [2, 3]
[3, 3], [3, 2], [3, 2], [3, 3], [2, 4], [2, 2], [2, 4], [3, 3], [3, 2], [3, 2], [3, 3]
[1, 4], [2, 2], [1, 4]
[2, 3], [4, 4], [4, 2], [3, 5], [3, 5], [4, 2], [4, 4], [2, 3]
[2, 2]
[2, 3], [2, 3]
[1, 4], [4, 4], [1, 4]
[2, 3], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 3]
[2, 3], [4, 4], [4, 2], [1, 4], [1, 4], [4, 2], [4, 4], [2, 3]
[3, 5], [2, 2], [3, 5]
[2, 3], [2, 3]
[2, 2]
[3, 3], [3, 2], [3, 2], [3, 3], [1, 4], [1, 4], [3, 3], [3, 2], [3, 2], [3, 3]
[2, 4], [2, 2], [2, 4]
[7, 7], [2, 3], [4, 4], [2, 2], [4, 4], [2, 3], [7, 7]
[2, 3], [2, 2], [2, 3]
[3, 3], [3, 2], [3, 2], [3, 2], [3, 2], [3, 2], [3, 3]
```


II. 实现
1. 定义一个30 * 30的网格容器；
2. 按顺序设置每个项目的行列，顺序从左往右，自上而下；
3. 设置每个项目的背景颜色
```
<!-- 此处使用了vue，方便数据处理 -->
<div class="grid" v-cloak>
    <div v-for="item in items" :ref="item.color" :style="{ gridArea: `span ${item.row || 1} / span ${item.col || 1}` }" :class="item.color && `bg-${item.color}`"></div>
</div>

```
```
// 定义一个30 * 30的网格，上下左右间距为2px，宽高都为浏览器宽度
.grid {
    display: grid;
    grid-template-columns: repeat(30, 1fr);
    grid-template-rows: repeat(30, 1fr);
    grid-gap: 2px 2px;
    width: 100%;
    height: 100vw;
}
```
```
// 设置每个项目的行列及颜色，颜色定义见下文
<script>
    new Vue({
        el: '#grid',
        data: {
            items: [
                // 此处只列举第一行的数据
                { row: 7, col: 7, color: 'yellow' },
                { row: 3, col: 3, color: 'green-bottom-right' },
                { row: 3, col: 2, color: 'red' },
                { row: 3, col: 2, color: 'yellow' },
                { row: 3, col: 2, color: 'blue' },
                { row: 3, col: 2, color: 'green' },
                { row: 3, col: 2, color: 'red' },
                { row: 3, col: 3, color: 'yellow-bottom-left' },
                { row: 7, col: 7, color: 'blue' },
                ....
            ]
        },
    })
</script>
```
```
// 颜色定义
.bg-yellow {
    background-color: #ffc66e;
}
.bg-blue {
    background-color: #70dfdf;
}
.bg-red {
    background-color: #ff8da3;
}
.bg-green {
    background-color: #80d870;
}
// 对角颜色
.bg-green-bottom-right {
    background-image: linear-gradient(-45deg, #80d870 0%, #80d870 50%, transparent 50%, transparent 100%);
}
.bg-yellow-bottom-left {
    background-image: linear-gradient(45deg, #ffc66e 0%, #ffc66e 50%, transparent 50%, transparent 100%);
}
```
![第一行效果图](/fight-chess/3.webp)

按照矩阵的数据继续绘制
![飞行棋盘效果图](/fight-chess/4.webp)

## 3. 总结
Grid布局可以通过设置网格的行列数进行灵活布局，绘制各种有趣的图案棋盘。


