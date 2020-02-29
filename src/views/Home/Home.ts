import {Vue, Component, Prop, Emit, Mixins} from 'vue-property-decorator'
import {State, namespace, Mutation} from 'vuex-class'
import HelloWorld from '@/components/HelloWorld.vue'
import {Tabbar, TabbarItem, Card} from 'vant';
import {getVideoBase64} from "@/utils/videoHelper";

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
                    title: '',
                    desc: '',
                    id: '',
                    num: '',
                    price: '',
                    thumb: '',
                    template: ''
                }
            ]
        }
    }
})
export default class Home extends Vue {
    public picList!: []
    public staticBase!: string
    public $get!: any

    async mounted() {
        const {code, info} = await this.$get('/slide/list')
        if (code === '000000') {
            this.picList = info.picList
        }
    }
}
