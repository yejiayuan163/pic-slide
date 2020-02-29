<template>
    <div @click="toggleAudio">
        <icon :class="['s-music-icon', {'a-music-icon': playing}]" name="music"/>
        <audio ref="audio"
               autoplay
               :src="staticBase + musicUrl"
               @ended="end"
               @play="ready"
               @error="error"
               @timeupdate="updateTime"></audio>
    </div>
</template>

<script lang="ts" src="./Audio.ts"></script>

<style lang="less">
    .s-music-icon {
        color: #F66565;
        /*width: 40px;*/
        /*height: 40px;*/
        font-size: 25px;
    }

    .a-music-icon {
        animation: rotate 3s linear infinite;
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
            transform-origin: center center;
        }
        to {
            transform: rotate(360deg);
            transform-origin: center center;
        }
    }

</style>
