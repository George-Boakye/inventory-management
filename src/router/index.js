import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../views/SignUp.vue";
import LogIn from "@/views/LogIn.vue";
import Dashboard from "@/views/Dashboard.vue";
import Inventory from "@/views/Inventory.vue";
import Categories from "@/views/Categories.vue";
import Settings from "@/views/Settings.vue";
import jwt_decode from "jwt-decode";


const routes = [
  {
    path: "/",
    name: "login",
    component: LogIn,
    meta: {
      noAuth: true,
    },
  },
  {
    path: "/signup",
    name: "signUp",
    component: SignUp,
    meta: {
      noAuth: true,
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {},
  },
  {
    path: "/inventory",
    name: "inventory",
    component: Inventory,
    meta: {},
  },
  {
    path: "/categories",
    name: "categories",
    component: Categories,
    meta: {},
  },
  {
    path: "/account-settings",
    name: "settings",
    component: Settings,
    meta: {},
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  const token = localStorage.getItem("id");
  let isAuthenticated =  false;

  if(token){
    // let decoded = jwt_decode(token)
    // // console.log(decoded)
    // const expirydate = new Date(decoded.exp * 1000)
    // const now = new Date()

    // if(now < expirydate ){
    //  isAuthenticated = true
    // }

    isAuthenticated = true
   
  }
 
  if (!to.meta.noAuth && !isAuthenticated) { 
      return { name: "login" };
  }
  if (isAuthenticated && to.name === "login") {
    return { name: "dashboard" };
  }
  return true;
});

export default router;
