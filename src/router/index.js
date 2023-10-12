import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BlogArticle from '../views/BlogArticle.vue'
import Tags from '../views/Tags.vue'
import BlogTags from '../views/BlogTags.vue'
import FormVuex from "../views/FormVuex.vue";
import Content from "../views/Content.vue";
import store from "../store";
import Editor from "../views/Editor.vue";
import MessageBoard from "../views/MessageBoard.vue";
import FriendLink from "../views/FriendLink.vue";
import About from "../views/About.vue";

Vue.use(VueRouter)


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/BlogArticle",
      name: "BlogArticle",
      component: BlogArticle
    },
    {
      path: "/Tags",
      name: "Tags",
      component: Tags
    },
    {
      path: "/BlogTags",
      name: "BlogTags",
      component: BlogTags
    },
    {
      path: "/Vuex",
      name: "Vuex",
      component: FormVuex
    },
    {
      path: "/MessageBoard",
      name: "MessageBoard",
      component: MessageBoard
    },
    {
      path: "/FriendLink",
      name: "FriendLink",
      component: FriendLink
    },
    {
      path: "/About",
      name: "About",
      component: About
    },
    {
      path: "/Editor",
      name: "Editor",
      component: Editor,
      // meta: {
      //   requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      // }
    },
    {
      path: "/Content/:id",
      name: "Content",
      component: Content,
      // meta: {
      //   requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      // }
    },
    {
      path: "/Login",
      name: "Login",
      component: () =>
      import("../views/Login.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import( "../views/Form.vue")
    }
  ]
});
var storeTemp = store;
router.beforeEach((to, from, next) => {
  if (!storeTemp.state.token) {
    storeTemp.commit("saveToken", window.localStorage.Token);
  }
  if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限
    if (storeTemp.state.token) {
      // 通过vuex state获取当前的token是否存在
      next();
    } else {
      //这里使用Id4授权认证，用Jwt，请删之，并把下边的跳转login 打开；
     // applicationUserManager.login();

      //这里使用Jwt登录，如果不用Id4授权认证，这里打开它；
      next({
        path: "/login",
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    }
  } else {
    next();
  }
});


export default router;