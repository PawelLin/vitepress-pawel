# 常用的Javascript方法封装
## 数字金额转换中文大写
```js
function transAmount(value) {
    if ((!value && value !== 0) || !/^(0|[1-9]\d{0,10})(\.\d{0,2})?$/.test(value)) return ''
    const UNIT = ['佰亿', '拾亿', '亿', '仟万', '佰万', '拾万', '万', '仟', '佰', '拾', '元']
    const UNIT1 = ['角', '分']
    const NUMBER = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
    let [ integer = '', decimal = '' ] = parseFloat(value).toString().split('.').map(val => {
            return val.split('').map(num => num !== '0' ? NUMBER[Number(num)] : num).join('')
    })
    let integer1 = ''
    UNIT.slice(-integer.length).map((unit, index) => {
        let isZero = integer[index] === '0' && (index !== integer.length - 1) && '0'
        return isZero || `${integer[index]}${unit}`
    }).forEach(item => {
        const key = integer1.replace(/.*([^0])0*/, '$1')
        if (integer1 && item.includes(key)) {
            integer1 = integer1.replace(key, '')
        }
        integer1 += item
    })
    integer = integer1.replace(/(.*[^0])0+([^0])$/, '$1$2').replace(/0+/g, NUMBER[0])
    if (decimal) {
        decimal = UNIT1.map((unit, index) => {
            let isZero = decimal[index] === '0' && '零'
            return isZero || `${decimal[index] ? decimal[index] + unit : ''}`
        }).join('')
        return `${integer}${decimal}`
    } else {
        return `${integer}整`
    }
}
```

## 获取数据类型
```js
function getType (value) {
    return Object.prototype.toString.call(value).replace(/\[object (.*)\]/, '$1')
}
```
## 数组转树
```js
const arr = [
    { id: 1, name: '类型1', pid: 0 },
    { id: 2, name: '类型2', pid: 1 },
    { id: 3, name: '类型3', pid: 1 },
    { id: 4, name: '类型4', pid: 3 },
    { id: 5, name: '类型5', pid: 4 }
]
function arrayToTree (arr) {
    const result = []
    const childrens = {}
    for (const item of arr) {
        const { pid, id } = item
        childrens[pid] = childrens[pid] || []
        if (pid === 0) {
            result.push(item)
        } else {
            childrens[pid].push(item)
        }
        childrens[id] = childrens[id] || []
        item.childrens = childrens[id]
    }
    return result
 }
// [
//     {
//         "id": 1,
//         "name": "类型1",
//         "pid": 0,
//         "childrens": [
//             {
//                 "id": 2,
//                 "name": "类型2",
//                 "pid": 1,
//                 "childrens": []
//             },
//             {
//                 "id": 3,
//                 "name": "类型3",
//                 "pid": 1,
//                 "childrens": [
//                     {
//                         "id": 4,
//                         "name": "类型4",
//                         "pid": 3,
//                         "childrens": [
//                             {
//                                 "id": 5,
//                                 "name": "类型5",
//                                 "pid": 4,
//                                 "childrens": []
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     }
// ]
```
## 数组转对象
```js
let arr = [ { key: '01', value: '男' }, { key: '02', value: '女' } ]
let obj = arr.reduce((item, { key, value }) => (item[key] = value) && item || item, {})
// {01: "男", 02: "女"}
```
## 间隔字符插入
```js
let letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']
'123456789'.split('').map(val => `a${val}`).join('')
// 'a1a2a3a4a5a6a7a8a9'
'123456789'.split('').map((val, index) => `${letter[index]}${val}`).join('') 
// 'a1b2c3d4e5f6g7h8i9'
```
## 判断数组中对象某个属性的值是否都相等
```js
let arr1 = [ { a:1, b:2 }, { a:1, b:3 } ]
let arr2 = [ { a:1, b:2 }, { a:2, b:3 } ]
let _arr1 = arr.map(item => item.a)
let _arr2 = _arr.map(item => item.a)
arr1.filter((item, index) => arr1.indexOf(item) === index).length // 1 都相等
arr2.filter((item, index) => arr2.indexOf(item) === index).length // 2 不都相等
```
```js
let arr1 = [ { a:1, b:2 }, { a:1, b:3 } ]
let arr2 = [ { a:1, b:2 }, { a:2, b:3 } ]
let _arr1 = arr.map(item => item.a)
let _arr2 = _arr.map(item => item.a)
Array.from(new Set(_arr1)).length // 1 都相等
Array.from(new Set(_arr2)).length // 2 不都相等
```
## 二维数组合并为一维数组
```js
let arr = [ { a: [ 1, 2, 3 ] }, { a: [ 4, 5, 6 ] } ]
[].concat(...arr.map(item => item.a)) // [ 1, 2, 3, 4, 5, 6 ]
```
