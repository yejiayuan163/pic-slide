import {Vue, Component, Prop, Emit, Mixins} from 'vue-property-decorator'
import {State, namespace, Mutation} from 'vuex-class'

@Component({
    components: {},
    data() {
        return {
            songUrl: ''
        }
    }
})
class Audio extends Vue {
    private songUrl!: string

    public end() {
        return this.loop()
    }

    mounted() {
        console.log('mounted')
    }

    loop() {
        const audioDom = this.$refs.audio as any
        audioDom.currentTime = 0
        return audioDom.play()

    }

    public ready() {
        console.log('audio play')
    }

    public error() {
        console.log('audio error')
    }
}

export default Audio