<template>
    <div class="s-home">
        <swipe class="s-my-swipe" :autoplay="3000" indicator-color="white" style="width: 100%;">
            <swipe-item v-for="(item,index) in picList" :key="index">
                <div class="s-swipe-pic"><img :src="item" width="100%"></div>
            </swipe-item>
        </swipe>
        <div >

        </div>
    </div>
</template>

<script lang="ts" src="./Template1.ts">
</script>
<style lang="less" scoped>
    .s-home {
        background-color: #ff0800;
    }
    .s-my-swipe{
        position: absolute;
        left: 50vw;
        top: 50vh;
        transform: translate(-50%, -50%);
    }
    .s-swipe-pic{
        display: flex;
        width: 100vw;
        height: 80vh;
        background-color: transparent;
        align-items: center;
        justify-content: center;
        .img{

        }
    }
</style>
