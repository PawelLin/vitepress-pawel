# Echarts

```js
export const intervalLabelFix = ({ data, pageSize, download, textStyle }) => data.map((item, index) => {
    const params = { value: item.name || '' }
    if (++index === data.length && index >= pageSize) {
        // 平衡interval设置为0时导致的最后一个label颜色加深
        params.textStyle = Object.assign({ color: `rgba(81, 90, 110, ${download ? 0.7 : 0.65})` }, textStyle)
    }
    return params
})
```
