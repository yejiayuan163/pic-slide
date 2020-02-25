const ua = window.navigator.userAgent.toLowerCase()
// 判断 isIphone的全面屏机型
export const isIphoneX = () => /iphone/gi.test(navigator.userAgent) && (window.innerHeight >= 700 && (window.innerWidth === 414 || window.innerWidth === 375))
// 判断微信
export const isWX = () => {
    // ua.match(/MicroMessenger/i) && ua.match(/MicroMessenger/i)[0] === 'micromessenger'
    return ua.includes('MicroMessenger')
}
// 判断支付宝
export const isAlipay = () => {
    // if (Array.isArray(ua.match(/iphone/i))) {
    //   return (ua.match(/iphone/i) as Array<string | number>).includes('alipay')
    // }
    // return false
    return ua.includes('alipay')
}
// 判断是否是ios
export const isIphone = () => ua.includes('iphone')
