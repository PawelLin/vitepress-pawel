# 一些CSS
## input placeholder利用transform设置文字大小并且垂直居中显示
```
input {
    font-size: 30px;
}
input::-webkit-input-placeholder {
    transform: scale(0.5) translateX(-49%) translateY(10%);         
}
```
## contentEditable=true设置placeholder
```
[contentEditable=true]:empty:before{
    content: attr(placeholder); // placeholder为dom的属性值
}
```
