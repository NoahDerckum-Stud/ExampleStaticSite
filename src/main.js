import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vue3Lottie from "vue3-lottie";
import "bootstrap";

const app = createApp(App);

app.use(router);

app.use(Vue3Lottie).mount("#app");
