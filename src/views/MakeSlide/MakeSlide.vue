<template>
    <div class="home">
        <h1>上传相册图片</h1>
        <div class="s-upload">
            <Uploader :after-read="afterRead" v-model="fileList" multiple max-count="20"></Uploader>
        </div>
        <VanButton icon="photo" type="primary" @click="makeSlide">上传图片</VanButton>
        <tabbar route>
            <tabbar-item icon="home-o" to="/home">相册广场</tabbar-item>
            <tabbar-item icon="search" to="/makeSlide">制作相册</tabbar-item>
            <tabbar-item icon="friends-o" to="/personal">个人中心</tabbar-item>
        </tabbar>
    </div>
</template>

<script lang="ts" src="./MakeSlide.ts">
</script>
<style lang="less" scoped>
    .s-upload {
        padding: 20px;

        /deep/ .van-uploader__wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>

