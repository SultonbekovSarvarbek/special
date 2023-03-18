import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// plugins
import VSelect from "@/plugins/vue-select";
import { vfm } from "@/plugins/vue-final-modal";

// glabal imported components
import GlobalComponents from "./plugins/globals";

import "@/assets/scss/main.scss"; // global css
const app = createApp(App)
    .use(router)
    .component("v-select", VSelect)
    .use(GlobalComponents)
    .use(vfm);
app.mount("#app");
