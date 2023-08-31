<script setup>
import { ref } from 'vue'
import { Input as PwInput } from 'pawel-record-vue'
const inputNormal = ref('input-normal')
const inputRegex = ref('123abcABC')
const inputInt = ref(99)
const inputDecimal = ref(99.99)
const inputMin = ref(-99)
const inputMax = ref(99)
const inputMinMax = ref(99.98)
const inputPhone = ref('13700623447')
const inputBankCard = ref('6222021942500196213')
const inputIdCard = ref('610402198203115081')

</script>

# Input输入框
支持输入限制及格式化

## 输入处理
输入经过的事件顺序
1. keydown
    - 记录按键按下时的光标位置`selectionEnd`；
2. input
    - 输入内容正确时，`selectionEnd`赋值为input后的光标位置；
    - 输入内容错误时，
        - `selectionEnd`不变动或根据需要重新赋值光标位置；
        - 重新赋值为输入前的旧值`target.value = modelValue`；
    - 设置光标为`selectionEnd` ( PC )；
3. keyup
    - 设置光标为`selectionEnd` ( Mobile )；

::: warning PC & Mobile光标设置时机的异同点说明
- PC<br>
<span style="color: var(--vp-c-brand);">0\. 手动更改焦点input的值(与原值不同)，光标会跳转到最后面，需要手动设置光标；</span><br>
1\. 事件触发时机：按键按下 - 依次触发`keydown`,`input` - 按键松开 - 触发`keyup`；<br>
2\. 到达设置最大长度：任意输入内容，光标不会向后移动；<br>
**综上，PC环境将设置光标放在<span style="color: var(--vp-c-red);">input</span>事件。**
- Mobile<br>
<span style="color: var(--vp-c-brand);">0\. 手动更改焦点input的值(与原值不同)，光标会跳转到最后面，需要手动设置光标；</span><br>
1\. 事件触发时机：按键按下 - 触发`keydown` - 按键松开 - 依次触发`input`,`keyup`；<br>
2\. 到达设置最大长度：任意输入内容，光标会向后移动，此时不触发`input`；<br>
**综上，Mobile环境将设置光标放在<span style="color: var(--vp-c-red);">keyup</span>事件。**
:::

## 基础用法
<p>普通文本输入框</p>
<PwInput v-model="inputNormal" />

::: details 示例代码
```vue
<script setup>
import { ref } from 'vue'
import { PwInput } from 'vue3-pawel-ui'
const inputNormal = ref('input-normal')
</script>
<template>
    <PwInput v-model="inputNormal" />
</templace>
```
:::

## 文本输入限制
通过regExp设置允许输入的正则表达式。
<p>只允许输入数字或字母( ` /^[\da-zA-Z]*$/ ` )</p>
<PwInput v-model="inputRegex" :regExp="/^[\da-zA-Z]*$/" />

::: details 示例代码
```vue
<script setup>
import { ref } from 'vue'
import { PwInput } from 'vue3-pawel-ui'
const inputRegex = ref('123abcABC')
</script>
<template>
    <PwInput v-model="inputRegex" :regExp="/^[\da-zA-Z]*$/" />
</templace>
```
:::

## 数字金额
<p>只允许输入金额相关字符，可设置金额区间。</p>
<PwInput v-model="inputInt" type="number" :integer="2" />
&nbsp;<code>[-99, 99]</code><br>
<PwInput v-model="inputDecimal" type="number" :integer="2" :decimal="2" />
&nbsp;<code>[-99.99, 99.99]</code><br>
<PwInput v-model="inputMin" type="number" :integer="2" :decimal="2" :min="-99" />
&nbsp;<code>[-99, 99.99]</code><br>
<PwInput v-model="inputMax" type="number" :integer="2" :decimal="2" :max="99" />
&nbsp;<code>[-99.99, 99]</code><br>
<PwInput v-model="inputMinMax" type="number" :integer="2" :decimal="2" :min="-99.98" :max="99.98" />
&nbsp;<code>[-99.98, 99.98]</code><br>

::: details 示例代码
```vue
<script setup>
import { ref } from 'vue'
import { PwInput } from 'vue3-pawel-ui'
const inputInt = ref(99)
const inputDecimal = ref(99.99)
const inputMin = ref(-99)
const inputMax = ref(99)
const inputMinMax = ref(99.98)
</script>
<template>
    <PwInput v-model="inputInt" type="number" :integer="2" />
    <PwInput v-model="inputDecimal" type="number" :integer="2" :decimal="2" />
    <PwInput v-model="inputMin" type="number" :integer="2" :decimal="2" :min="-99" />
    <PwInput v-model="inputMax" type="number" :integer="2" :decimal="2" :max="99" />
    <PwInput v-model="inputMinMax" type="number" :integer="2" :decimal="2" :min="-99.98" :max="99.98" />
</templace>
```
:::


## 特定格式化输入
<p>允许输入时格式化内容</p>
<PwInput v-model="inputPhone" format="phone" />
( 手机号 )<br>
<PwInput v-model="inputBankCard" format="bankCard" />
( 银行卡号 )<br>
<PwInput v-model="inputIdCard" format="idCard" />
( 身份证号 )<br>

::: details 示例代码
```vue
<script setup>
import { ref } from 'vue'
import { PwInput } from 'vue3-pawel-ui'
const inputPhone = ref('13700623447')
const inputBankCard = ref('6222021942500196213')
const inputIdCard = ref('610402198203115081')

</script>
<template>
    <PwInput v-model="inputPhone" format="phone" />
    <PwInput v-model="inputBankCard" format="bankCard" />
    <PwInput v-model="inputIdCard" format="idCard" />
</templace>
```
:::

## API
Input (文本)
| 参数        | 说明           | 类型  | 默认值 | 
| ----------  |-------------| -----|------|
| v-model | 输入框内容 | string | - |
| maxlength | 长度 | number | - |
| regExp | 匹配正则 | RegExp | - |
| placeholder | 占位文本 | string | - |

Input (数字金额)
| 参数        | 说明           | 类型  | 默认值 | 
| ----------  |-------------| -----|------|
| v-model | 输入框内容 | string | - |
| integer | 整数位数 | number | 8 |
| decimal | 小数点位数 | number | - |
| max | 最大值 | number | - |
| min | 最小值 | number | - |
| placeholder | 占位文本 | string | - |

Input (格式化)
| 参数        | 说明           | 类型  | 默认值 | 
| ----------  |-------------| -----|------|
| v-model | 输入框内容 | string | - |
| format | 格式化类型 | phone \\| bankCard \\| idCard | - |
| placeholder | 占位文本 | string | - |

<style scoped>
input {
    padding: 4px 7px;
    height: 34px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    color: #515a6e;
    transition: border 0.2s ease-in-out, background 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
input:hover,
input:focus {
    border-color: var(--vp-c-brand);
}
input:focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgba(45, 240, 204, 0.2);
}
</style>