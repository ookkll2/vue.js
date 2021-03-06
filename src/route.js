import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";

Vue.use(VueRouter);

// eslint-disable-next-line no-unused-vars
export default new VueRouter({
    mode: "history",
    routes: [
        {
            path:"/", 
            name: 'home',
            component: Home
        },
        {
            path:"/about", 
            name: 'about',
            component: About
        }
    ]
});