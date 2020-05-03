import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BookManage from "../views/BookManage";
import AddBook from "../views/AddBook";
import PageThree from "../views/PageThree";
import PageFour from "../views/PageFour";
import index from "../views/index";
import BookUpdate from "../views/BookUpdate";

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: '图书管理',
    component: index,
    show: true,
    redirect:'/BookManage',
    children:[
      {
        path: "/BookManage",
        name: "查询图书",
        component: BookManage
      },
      {
        path: "/AddBook",
        name: "添加图书",
        component: AddBook
      },

    ]

  },
  {
    path: "/BookUpdate",
    component: BookUpdate,
    show:false
  }
]
  // {
  //   path: "/navigation",
  //   name: "导航二",
  //   component: index,
  //   children:[
  //     {
  //       path: "/pageThree",
  //       name: "页面三",
  //       component: PageThree
  //     },
  //     {
  //       path: "/pageFour",
  //       name: "页面四",
  //       component: PageFour
  //     },
  //   ]
  // },




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
