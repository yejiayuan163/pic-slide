<template>
    <div class="s-home">
        <h1>{{collectionInfo.title}}</h1>
        <swipe class="s-my-swipe" :autoplay="3500" indicator-color="transparent" style="width: 90%;">
            <swipe-item v-for="(item,index) in collectionInfo.picList" :key="index">
                <div class="s-swipe-pic">
                    <van-image :src="staticBase + item" width="100%" radius="10"/>
                </div>
            </swipe-item>
        </swipe>
        <div class="s-audio-wrap">
            <Audio :musicUrl="collectionInfo.musicUrl"></Audio>
        </div>
    </div>
</template>

<script lang="ts" src="./Template1.ts">
</script>
<style lang="less" scoped>
    .s-home {
        position: relative;
        height: 100vh;
        background: #ffffff url("../../../assets/img/slide-bg-5.jpg") center center;
        background-size:100% 100%;
        .s-audio-wrap{
            position: absolute;
            top: 20px;
            right: 20px;
        }
    }
    .s-my-swipe{
        position: absolute;
        left: 50vw;
        top: 50vh;
        transform: translate(-50%, -50%);
        border-radius: 10px;
    }
    .s-swipe-pic{
        display: flex;
        border: 2px #FFFFFF;
        width: 90vw;
        height: 80vh;
        background-color: transparent;
        align-items: center;
        justify-content: center;
        /*border-radius: 10px;*/
    }
</style>
