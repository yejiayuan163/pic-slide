<template>
    <div class="home">
        <video class="s-video" :src="staticBase+ videoInfo.videoSrc" controls="controls">
            您的浏览器不支持 video 标签。
        </video>
    </div>
</template>

<script lang="ts" src="./VideoPlayer.ts">
</script>
<style lang="less" scoped>
    .s-slide-list {
        padding-bottom: 50px;
    }
    .s-video{
        width:100%
    }
</style>
