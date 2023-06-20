# Date
```js
// 当天00:00:00
new Date(new Date().setHours(0, 0, 0, 0))
// 当天23:59:59
new Date(new Date().setHours(0, 0, 0, 0) - 1 + 1000 * 60 * 60 * 24)
```