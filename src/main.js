import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThreePage from "./components/ThreePage";
import FourPage from "./components/FourPage";

const routes = [
  { path: "/", component: FirstPage },
  { path: "/second", component: SecondPage },
  { path: "/three", component: ThreePage },
  { path: "/four", component: FourPage }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.mount("#app");
