import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import About from "@/components/About";

Vue.use(VueRouter);

// eslint-disable-next-line no-unused-vars
var router = new VueRouter({
    mode: "history",
    routes: [
        {
            path:"/", component: Home
        },
        {
            path:"/about", component: About
        }
    ]
});

export default {
    
}