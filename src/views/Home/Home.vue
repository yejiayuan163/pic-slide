<template>
    <div class="home">
        <div class="s-slide-list">
            <card v-for="(item,index) in picList"
                    @click="jumpToSlide(item)"
                    :key="index"
                    :num="item.num"
                    :price="item.price"
                    :desc="item.desc"
                    :title="item.title"
                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            />
        </div>
        <tabbar route>
            <tabbar-item icon="home-o" to="/home">相册广场</tabbar-item>
            <tabbar-item icon="search" to="/makeSlide">制作相册</tabbar-item>
            <tabbar-item icon="friends-o" to="/personal">个人中心</tabbar-item>
        </tabbar>
    </div>
</template>

<script lang="ts" src="./Home.ts">
</script>
<style lang="less" scoped>
    .s-slide-list {
        padding-bottom: 50px;
    }
</style>
