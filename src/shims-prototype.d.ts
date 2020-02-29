declare module 'vue/types/vue' {
    import {Route} from "vue-router";

    interface Vue {
        $refs: any;
        $get: any;
        $post: any;
        $route: any;
    }
}
