import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VSelect from "vue-select";
import GlobalComponents from "./plugins/globals";
import "./assets/scss/main.scss"; // global css
const app = createApp(App)
    .use(router)
    .component("v-select", VSelect)
    .use(GlobalComponents);

app.mount("#app");
