import {Vue, Component, Prop, Emit, Mixins} from 'vue-property-decorator'
import {State, namespace, Mutation} from 'vuex-class'
import HelloWorld from '@/components/HelloWorld.vue'
import {Tabbar, TabbarItem, Card} from 'vant';

@Component({
    components: {
        HelloWorld,
        Tabbar,
        TabbarItem,
        Card
    },
    data() {
        return {
            active: 0,
            picList: [
                {
                    title:'商品标题',
                    desc:'描述信息巴拉巴拉巴拉巴拉',
                    id: '12345',
                    num: '1234',
                    price: '123',
                    thumb: '/personal?id=12345'
                },
                {
                    title:'商品标题',
                    desc:'描述信息巴拉巴拉巴拉巴拉',
                    id: '12345',
                    num: '1234',
                    price: '123',
                    thumb: '/personal?id=12345'
                },
                {
                    title:'商品标题',
                    desc:'描述信息巴拉巴拉巴拉巴拉',
                    id: '12345',
                    num: '1234',
                    price: '123',
                    thumb: '/personal?id=12345'
                },
                {
                    title:'商品标题',
                    desc:'描述信息巴拉巴拉巴拉巴拉',
                    id: '12345',
                    num: '1234',
                    price: '123',
                    thumb: '/personal?id=12345'
                },
                {
                    title:'商品标题',
                    desc:'描述信息巴拉巴拉巴拉巴拉',
                    id: '12345',
                    num: '1234',
                    price: '123',
                    thumb: '/personal?id=12345'
                },
                {
                    title:'商品标题',
                    desc:'描述信息巴拉巴拉巴拉巴拉',
                    id: '12345',
                    num: '1234',
                    price: '123',
                    thumb: '/personal?id=12345'
                },
                {
                    title:'商品标题',
                    desc:'描述信息巴拉巴拉巴拉巴拉',
                    id: '12345',
                    num: '1234',
                    price: '123',
                    thumb: '/personal?id=12345'
                },
                {
                    title:'商品标题',
                    desc:'描述信息巴拉巴拉巴拉巴拉',
                    id: '12345',
                    num: '1234',
                    price: '123',
                    thumb: '/personal?id=12345'
                },
                {
                    title:'商品标题',
                    desc:'描述信息巴拉巴拉巴拉巴拉',
                    id: '12345',
                    num: '1234',
                    price: '123',
                    thumb: '/personal?id=12345'
                }
            ]
        }
    }
})
export default class Home extends Vue {

}