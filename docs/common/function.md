# 常用方法
## 枚举数组转对象
```ts
/**
 *
 * @param [*] list 数组
 * @description 根据数组每项的key和value转化为对象{key: value}
 */
export const array2object = (list: { key: string; value: string }[]): object => {
    return list.reduce(
        (item, { key, value }) => ((item[key] = value) && item) || item,
        {} as { [x in typeof list[number]['key']]: string }
    )
}
```

## 金额千分位符格式化
```ts
/**
 *
 * @param value 金额
 * @param decimalPlaces 小数点位数
 * @returns
 */
export function amountFormatting(value: unknown, decimalPlaces?: number): string {
    if (!value && value !== 0) return ''
    const number = Number(value)
    if (isNaN(number)) return ''
    const numberStr = decimalPlaces || decimalPlaces === 0 ? number.toFixed(decimalPlaces) : number.toString()
    const [integer, decimal = ''] = numberStr.split('.')
    return integer.replace(/\B(?=((?:\d{3})+(?!\d)))/g, ',') + (decimal && `.${decimal}`)
}
```