<template>
    <div>
        <audio ref="audio" :src="songUrl" @ended="end" @play="ready" @error="error" @timeupdate="updateTime" ></audio>
    </div>
</template>

<script lang="ts" src="./Audio.ts" ></script>

<style scoped>

</style>