import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Главная",
        component: () => import("@/views/Home.vue"),
    },
    {
        path: "/schedule",
        name: "Расписания",
        component: () => import("@/views/Schedule.vue"),
    },
    {
        path: "/students",
        name: "Ученики",
        component: () => import("@/views/Students.vue"),
    },
    {
        path: "/teachers",
        name: "Преподаватели",
        component: () => import("@/views/Teachers.vue"),
    },
    {
        path: "/lessons",
        name: "Занятия",
        component: () => import("@/views/Lessons.vue"),
    },
    {
        path: "/groups",
        name: "Группы",
        component: () => import("@/views/Groups.vue"),
    },
];
const route = createRouter({
    history: createWebHistory(),
    routes,
});
export default route;
