import {Vue, Component, Prop, Emit, Mixins} from 'vue-property-decorator'
import {State, namespace, Mutation} from 'vuex-class'
import { Swipe, SwipeItem } from 'vant';

@Component({
    components: {
        Swipe,
        SwipeItem
    },
    data() {
        return {
            picList: [
                'http://39.105.59.163/image/1.jpg',
                'http://39.105.59.163/image/2.jpg',
                'http://39.105.59.163/image/3.jpg',
                'http://39.105.59.163/image/4.jpg',
                'http://39.105.59.163/image/5.jpg',
            ]
        }
    }
})
class Template1 extends Vue {

}

export default Template1