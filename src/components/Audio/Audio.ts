import {Vue, Component, Prop, Emit, Mixins, Watch} from 'vue-property-decorator'
import {State, namespace, Mutation} from 'vuex-class'
import {Icon} from 'vant';

@Component({
    components: {
        Icon
    },
    data() {
        return {
            playing: true
        }
    }
})
class Audio extends Vue {
    private playing!: boolean
    @Prop({type: String, default: 'audio/123.mp3'}) musicUrl = '';

    public end() {
        return this.loop()
    }
    @Watch('musicUrl')
    onMusicUrlChange () {
        console.log('onMusicUrlChange')
        this.loop()
    }

    mounted() {
        setTimeout(() => {
            const audioDom = this.$refs.audio as any
            this.playing = audioDom.paused ? false : true
        }, 1000)
    }

    toggleAudio() {
        const audioDom = this.$refs.audio as any
        if (this.playing) {
            this.playing = false
            audioDom.pause()
        } else {
            this.playing = true
            audioDom.play()

        }
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

    public updateTime() {
        console.log('audio updateTime')
        // this.playing = true
    }
}

export default Audio
