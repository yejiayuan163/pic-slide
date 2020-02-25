// 设计稿默认值
const DEFAULT_WIDTH = 375

const setRem = (window: Window, document: Document): void => {
    const docEl: HTMLElement = document.documentElement

    const resizeEvent: string = 'orientationchange' in window ? 'orientationchange' : 'resize'

    const reCaculate = (): void => {
        const clientWidth: number = docEl.clientWidth
        if (clientWidth) {
            docEl.style.fontSize = 20 * (clientWidth / DEFAULT_WIDTH) + 'px'
        }
    }

    if (document.addEventListener) {
        window.addEventListener(resizeEvent, reCaculate, false)
        document.addEventListener('DOMContentLoaded', reCaculate, false)
    }
}

export default setRem