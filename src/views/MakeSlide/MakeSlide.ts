import {Vue, Component, Prop, Emit, Mixins} from 'vue-property-decorator'
import {State, namespace, Mutation} from 'vuex-class'
import HelloWorld from '@/components/HelloWorld.vue'
import {Tabbar, TabbarItem, Uploader, Button} from 'vant';

@Component({
    components: {
        HelloWorld,
        Tabbar,
        TabbarItem,
        Uploader,
        VanButton: Button
    },
    data() {
        return {
            fileList: []
        }
    }
})
export default class MakeSlide extends Vue {
    public fileList: Array<string> = []
    public $post: any
    public slideList: Array<object> = []

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
        } else {
            file.status = 'failed';
            file.message = '上传失败';
        }
    }

    makeSlide() {
        const id = this.$route.query.id ? this.$route.query.id : ''
        const title = '相册哈哈哈'
        const description = '相册哈哈哈description'
        const template = 'template1'
        const music = '123.mp3'
        const data = this.fileList.map((item: any, index) => {
            return item.status === 'success' ? {fileName: item.fileName, index: index} : ''
        })
        this.$post('/slide/edit', {data, id, title, description, template, music})
        console.log('上传数据：', data)
    }

}
