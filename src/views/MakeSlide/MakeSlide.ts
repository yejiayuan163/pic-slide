import {Vue, Component, Prop, Emit, Mixins} from 'vue-property-decorator'
import {State, namespace, Mutation} from 'vuex-class'
import HelloWorld from '@/components/HelloWorld.vue'
import {Tabbar, TabbarItem, Uploader, Button, Field, CellGroup, ActionSheet} from 'vant';

@Component({
    components: {
        HelloWorld,
        Tabbar,
        TabbarItem,
        Uploader,
        VanField: Field,
        VanCellGroup: CellGroup,
        VanButton: Button,
        VanActionSheet: ActionSheet
    },
    data() {
        return {
            fileList: [],
            title: '相册标题',
            description: '相册描述',
            showMusicSheet: false,
            musicList: [{name: '甜蜜蜜', musicSrc: '123.mp3'}, {name: '666', musicSrc: '456.mp3'}],
            musicInfo: {name: '甜蜜蜜', musicSrc: '123.mp3'}
        }
    }
})
export default class MakeSlide extends Vue {
    public fileList: Array<string> = []
    public musicList: Array<object> = []
    public title!: string
    public showMusicSheet!: boolean
    public description!: string
    public $post: any
    public $route: any
    public slideList: Array<object> = []
    public musicInfo!: any

    async afterRead(file: any) {
        console.log('console.log', file)
        file.status = 'uploading';
        file.message = '上传中...';
        const formData = new FormData()
        formData.append('image', file.file)
        const {code, info} = await this.$post('/upload/pic', formData)
        if (code === '000000') {
            file.status = 'success';
            file.message = '上传完成';
            file.fileName = info.fileName
            file.pictureId = info.pictureId
        } else {
            file.status = 'failed';
            file.message = '上传失败';
        }
    }

    makeSlide() {
        const id = this.$route.query.id ? this.$route.query.id : ''
        const template = 'template1'
        const picList = this.fileList.map((item: any, index) => {
            return item.status === 'success' ? {fileName: item.fileName, index: index, pictureId: item.pictureId} : ''
        })
        this.$post('/slide/edit', {
            picList,
            id,
            title: this.title,
            description: this.description,
            template,
            music: this.musicInfo.musicSrc
        })
    }

    toggleMusicSheet() {
        if (this.showMusicSheet) {
            this.showMusicSheet = false
        } else {
            this.showMusicSheet = true
        }
    }

    // 选择背景音乐
    onSelectMusic(item: any) {
        this.showMusicSheet = false
        this.musicInfo = item
    }

}
