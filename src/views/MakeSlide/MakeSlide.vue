<template>
    <div class="home">
        <h1 class="s-title">制作相册</h1>
        <van-cell-group>
            <van-field label="相册名称:" v-model="title" placeholder="请输入相册名称" />
        </van-cell-group>
        <van-cell-group>
            <van-field label="相册描述:" v-model="description" placeholder="请输入相册描述" />
        </van-cell-group>
        <van-cell-group @click="toggleMusicSheet">
            <van-field label="背景音乐:" v-model="musicInfo.name" placeholder="背景音乐" readonly />
        </van-cell-group>
        <div class="s-upload">
            <Uploader :after-read="afterRead" v-model="fileList" multiple max-count="20"></Uploader>
        </div>
        <VanButton icon="photo" type="primary" @click="makeSlide">生成相册</VanButton>
        <van-action-sheet v-model="showMusicSheet" :actions="musicList" @select="onSelectMusic" />
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
    .s-title{
        font-size: 20px;
        padding: 10px;
    }
    .s-upload {
        padding: 20px;

        /deep/ .van-uploader__wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>

