import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import OpenTask from "../views/OpenTask.vue";
Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  base:process.env.BASE_URl,
  routes: [
    {
      path: "/",
    name: "home",
      component: Home,
    },
    {
      path: "/task/:id",
      name: "openTask",
      component: () => import("../views/OpenTask.vue") ,
    },
    
]


});


