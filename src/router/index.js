import { createRouter, createWebHistory } from "vue-router";
// views
import Home from "../views/Home.vue";
import Schedule from "../views/Schedule.vue";
import Students from "../views/Students.vue";
import Teachers from "../views/Teachers.vue";
import Lessons from "../views/Lessons.vue";
import Groups from "../views/Groups.vue";
// routes
const routes = [
    {
        path: "/",
        name: "Главная",
        component: Home,
    },
    {
        path: "/schedule",
        name: "Расписания",
        component: Schedule,
    },
    {
        path: "/students",
        name: "Ученики",
        component: Students,
    },
    {
        path: "/teachers",
        name: "Преподаватели",
        component: Teachers,
    },
    {
        path: "/lessons",
        name: "Занятия",
        component: Lessons,
    },
    {
        path: "/groups",
        name: "Группы",
        component: Groups,
    },
];
const route = createRouter({
    history: createWebHistory(),
    routes,
});
export default route;
