import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// plugins
// CONSTANTS
//import statuses from "@/constants/contract/statuses.js";

import VSelect from "@/plugins/vue-select";
import { vfm } from "@/plugins/vue-final-modal";
import VCalendar from "@/plugins/vue-calendar";

// glabal imported components
import GlobalComponents from "./plugins/globals";

import "@/assets/scss/main.scss"; // global css
const app = createApp(App)
    .use(router)
    .component("v-select", VSelect)
    .use(GlobalComponents)
    .use(vfm)
    .use(VCalendar, {
        locale: "ru",
    });
app.mount("#app");
