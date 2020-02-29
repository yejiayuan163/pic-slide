import {Vue, Component, Prop, Emit, Mixins} from 'vue-property-decorator'
import {State, namespace, Mutation} from 'vuex-class'
import {Swipe, SwipeItem, Image} from 'vant';
import Audio from '@/components/Audio/Audio.vue'

@Component({
    components: {
        Swipe,
        SwipeItem,
        Audio,
        VanImage:Image
    },
    data() {
        return {
            collectionInfo: {
                title: '',
                musicUrl: '',
                picList: [
                ]
            }

        }
    }
})
class Template1 extends Vue {
    public collectionInfo!: object
    public $get!: any
    public $route!: any
    async mounted() {
        const id = this.$route.query.id
        const {code, info} = await this.$get('/slide/details', {id})
        if(code === '000000') {
            this.collectionInfo = info.collectionInfo
        }
    }

}

export default Template1
