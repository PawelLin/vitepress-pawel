# 一些正则
## 简单手机号
```js
/^1\d{10}$/
```
## 数字+字母组成6位以上
```js
/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/
```
## 邮箱
```js
/^[0-9a-zA-Z_-]{1,30}@([0-9a-zA-Z_-]{1,28}\.[0-9a-zA-Z_-]+)+$/
```
## 连续数字或字母正则获取 (abc, cba, 123, 321)
```js
/**
 ## 获取判断连续字母的正则表达式
 ## @params {number} num 连续字母的长度
*/
function getLetterRegx (num) {
    const A_BIG_CODE = 'A'.charCodeAt()
    const A_SMALL_CODE = 'a'.charCodeAt()
    let arr = Array.from(new Array(25).keys())
    let arrReverse = Array.from(new Array(25).keys()).reverse()
    let AZ = arr.map(index => `${String.fromCharCode(index + A_BIG_CODE)}(?=${String.fromCharCode(index + A_BIG_CODE + 1)})`).join('|')
    let ZA = arrReverse.map(index => `${String.fromCharCode(index + A_BIG_CODE + 1)}(?=${String.fromCharCode(index + A_BIG_CODE)})`).join('|')
    let az = arr.map(index => `${String.fromCharCode(index + A_SMALL_CODE)}(?=${String.fromCharCode(index + A_SMALL_CODE + 1)})`).join('|')
    let za = arrReverse.map(index => `${String.fromCharCode(index + A_SMALL_CODE + 1)}(?=${String.fromCharCode(index + A_SMALL_CODE)})`).join('|')
    let regx = [AZ, ZA, az, za].map(item => `((${item}){${num - 1}}[a-zA-Z])`).join('|')
    return new RegExp(regx)
}

/**
 ## 获取判断连续数字的正则表达式
 ## @params {number} num 连续数字的长度
*/
function getNumberRegx (num) {
    let arr = Array.from(new Array(9).keys())
    let forward = arr.map(index => `${index}(?=${index + 1})`).join('|')
    let reverse = arr.map(index => `${9 - index}(?=${9 - index - 1})`).join('|')
    let regx = [forward, reverse].map(item => `((${item}){${num - 1}}\\d)`).join('|')
    return new RegExp(regx)
}
```
## 连续相同数字或字母正则获取 (111, aaa)
```js
/**
 ## 获取判断连续相同字母的正则表达式
 ## @params {number} num 连续相同字母的长度
*/
function getCommonLetterRegx (num) {
    return new RegExp('([a-zA-Z])\\1{' + (num - 1) + '}');
}
/**
 ## 获取判断连续相同字母的正则表达式
 ## @params {number} num 连续相同字母的长度
*/
function getCommonNumberRegx (num) {
    return new RegExp('(\\d)\\1{' + (num - 1) + '}');
}
```