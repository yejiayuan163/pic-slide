import {Vue, Component, Prop, Emit, Mixins} from 'vue-property-decorator'
import {State, namespace, Mutation} from 'vuex-class'
import HelloWorld from '@/components/HelloWorld.vue'
import {Tabbar, TabbarItem} from 'vant';

@Component({
    components: {
        HelloWorld,
        Tabbar,
        TabbarItem
    },
    data() {
        return {}
    }
})
export default class Personal extends Vue {

}