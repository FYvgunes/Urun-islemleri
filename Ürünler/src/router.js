import Vue from "vue";

import ProductList from "./components/products/ProductList";
import ProductPurcase from "./components/products/ProductPurcase";
import ProductSell from "./components/products/ProductSell.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: ProductList },
  { path: "/Urun-islemleri", component: ProductPurcase },
  { path: "/urun-cıkısı", component: ProductSell },
  { path: "*", redirect: "/" }
];

export const router = new VueRouter({
  mode: "history",
  routes
});
