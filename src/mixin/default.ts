import store from '@/store'
import {isIphone, isIphoneX} from '@/utils/safe-area'
import router from '@/router'

// import {PLATFORM} from '@/config'

export default {
    install(Vue: any) {
        // 全局混入公用方法
        Vue.mixin({
            data() {
                return {
                    homeImgUrl: process.env.VUE_APP_HOME_IMG_URL + '/',
                    staticBase: process.env.VUE_APP_STATIC + '/',
                    hasSaveArea: false // 在小程序则ios全面屏需要预留返回键的位置
                }
            },
            created() {
                this.hasSaveArea = isIphoneX() && this.$store.getters['status/getIsMiniprogram']
            },
            filters: {
                /**
                 * @Description: 手机号码脱敏
                 * @date 2019/12/
                 * @params: null
                 * @return: null
                 */
                desensitizePhone: function (value: any) {
                    const reg = /^(.{3}).*(.{4})$/
                    if (value) {
                        return value.toString().replace(reg, '$1****$2')
                    } else {
                        return ''
                    }
                }
            },
            methods: {
                // /**
                //  * @description 当前视窗的高度变化的时候重新获取高度以及滑动输入框或者文本框
                //  *
                //  */
                // getDocHeight() {
                //     const activeElement: Element = document.activeElement as Element
                //     window.addEventListener('resize', () => {
                //         if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
                //             setTimeout(() => {
                //                 activeElement.scrollIntoView()
                //             }, 100)
                //         }
                //     })
                // },
                // /**
                //  * @description 失去焦点的时候恢复原来的位置
                //  *
                //  */
                // setDocHeight() {
                //     const htmlElement = document.getElementsByTagName('html')
                //     const bodyElement = document.getElementsByTagName('body')
                //     htmlElement[0].scrollIntoView()
                //     bodyElement[0].scrollIntoView()
                // },
                jumpToSlide(item: any) {
                    // tslint ignore
                    router.push(`/${item.template}?id=${item.id}`)
                }
            }

        })
        // Vue.directive('invalid-product', async function (el, binding) {
        //     const info = binding.value
        //     const IMG_WRAP = el.getElementsByClassName('item-left')[0]
        //     // 清除已售罄小标
        //     const contentDom = IMG_WRAP.getElementsByClassName('invalid-product-content')[0]
        //     contentDom && IMG_WRAP.removeChild(contentDom)
        //
        //     // 清除已售罄蒙层
        //     const maskDom = el.getElementsByClassName('invalid-product-mask')[0]
        //     maskDom && el.removeChild(maskDom)
        //     let stock = info.stock || info.goodsStock
        //     if (stock > 0) return
        //     // 已售罄小标
        //     let content = document.createElement('div')
        //     content.className = 'invalid-product-content'
        //     IMG_WRAP.style.position = 'relative'
        //     content.innerHTML = '已售罄'
        //     content.style.position = 'absolute'
        //     content.style.top = '50%'
        //     content.style.left = '50%'
        //     content.style.marginLeft = '-33px'
        //     content.style.marginTop = '-13px'
        //     content.style.width = '66px'
        //     content.style.height = '26px'
        //     content.style.lineHeight = '27px'
        //     content.style.textAlign = 'center'
        //     content.style.verticalAlign = 'center'
        //     content.style.borderRadius = '13px'
        //     content.style.backgroundColor = 'rgba(0,0,0,.5)'
        //     content.style.zIndex = '101'
        //     content.style.fontSize = '13px'
        //     content.style.color = '#fff'
        //     content.style.pointerEvents = 'none'
        //     content.style.borderRadius = '13px'
        //     IMG_WRAP.appendChild(content)
        //
        //     // 半透明遮罩层
        //     el.style.position = 'relative'
        //     let mask = document.createElement('div')
        //     mask.className = 'invalid-product-mask'
        //     mask.style.position = 'absolute'
        //     mask.style.top = '0'
        //     mask.style.left = '0'
        //     mask.style.width = '100%'
        //     mask.style.height = '100%'
        //     mask.style.zIndex = '100'
        //     mask.style.backgroundColor = 'rgba(255,255,255,0.7)'
        //     mask.style.pointerEvents = 'none'
        //     mask.style.borderRadius = '6px'
        //     el.appendChild(mask)
        //
        //     // const addBtn = el.getElementsByClassName('right')[0]
        //     // console.log('invalid-product', el.className)
        //     // console.log('invalid-product:info', info)
        //     // console.log('invalid-product:binding', binding)
        // })
        /**
         * @Description: 绑定点击事件，检查是否已绑定手机，设置是否弹窗的标志位：setShowVerifyPhone
         * @date 2019/12/4
         * @params: null
         * @return: null
         */
        // Vue.directive('check-bind-phone', async function (el, binding) {
        //     el.addEventListener('click', onclickFn, true)
        //
        //     function onclickFn(event) {
        //         if (store.getters['status/getPhoneStatus']) {
        //             store.dispatch('popStatus/setShowVerifyPhone', false)
        //             console.log('已绑定手机')
        //             return true
        //         } else {
        //             store.dispatch('popStatus/setShowVerifyPhone', true)
        //             // 未绑定手机时，在settlement页面不跳转到地址列表
        //             if (el.className === 'select-address') {
        //                 event.preventDefault()
        //                 event.stopPropagation()
        //             }
        //             console.log('未绑定手机')
        //             return false
        //         }
        //     }
        // })
        /**
         * @Description: 加载loading图
         * @date 2020/2/3
         * @params: null
         * @return: null
         */
        // Vue.directive('loading-status', async function (el, binding) {
        //     const loadingFlag = binding.value
        //     // console.log('loadingFlag', loadingFlag)
        //     const loadingId = document.getElementById('loadingImg')
        //     if (loadingFlag && !loadingId) {
        //         const DIV = document.createElement('div')
        //         const IMG = require('../assets/images/logoAm.gif')
        //         DIV.id = 'loadingImg'
        //         DIV.style.width = '100vw'
        //         DIV.style.height = '100vh'
        //         DIV.style.backgroundColor = '#fff'
        //         DIV.style.zIndex = '999'
        //         DIV.style.position = 'absolute'
        //         DIV.style.top = '0'
        //         DIV.style.left = '0'
        //         const DIVLOADING = document.createElement('img')
        //         DIVLOADING.setAttribute('src', IMG)
        //         DIVLOADING.style.width = '32vw'
        //         DIVLOADING.style.height = '32vw'
        //         DIVLOADING.style.position = 'absolute'
        //         DIVLOADING.style.top = '50%'
        //         DIVLOADING.style.left = '50%'
        //         DIVLOADING.style.transform = 'translate(-50%, -50%)'
        //         DIV.appendChild(DIVLOADING)
        //         el.appendChild(DIV)
        //     } else {
        //         loadingId && el.removeChild(loadingId)
        //     }
        // })
    }
}
