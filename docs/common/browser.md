# 浏览器相关
## 区分浏览器<span style="color: var(--vp-c-brand);">刷新</span>或<span style="color: var(--vp-c-red);">关闭</span>
```ts
/**
 *
 * @description 根据beforeunload和unload之间的时间差【区分刷新或关闭】
 */
export const listenUnloadClearCache = () => {
    let beforeunloadTime = 0
    let unloadTime = 0
    window.addEventListener('beforeunload', () => {
        beforeunloadTime = new Date().getTime()
    })
    window.addEventListener('unload', () => {
        unloadTime = new Date().getTime()
        if (unloadTime - beforeunloadTime <= 1) { // 关闭浏览器
        } else { // 刷新浏览器
        }
    })
}
```
## 设置浏览器tab标题为空白
```html
document.title = '\u200E' 或 <title>&lrm;</title>
```