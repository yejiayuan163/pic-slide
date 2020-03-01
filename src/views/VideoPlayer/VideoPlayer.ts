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
            videoInfo: {}
        }
    }
})
export default class VideoPlayer extends Vue {
    public videoInfo!: {}
    public $get!: any
    public $route!: any

    async mounted() {
        const id = this.$route.query.id
        const {code, info} = await this.$get('/slide/videosDetails', {id})
        if (code === '000000') {
            this.videoInfo = info.videoInfo
        }
        this.$nextTick( () => {
            const videoDom = this.$refs.video as any
            console.log('video play!')
            videoDom.play()
        })
    }
}
