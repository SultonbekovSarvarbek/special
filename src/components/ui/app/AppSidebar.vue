<template>
    <aside class="app-sidebar">
        <ul class="app-sidebar-list">
            <li class="app-sidebar-list__item app-logo">
                <base-icon name="ic_app_logo" />
            </li>
            <li
                v-for="route in routes"
                :key="route.name"
                :class="[
                    'app-sidebar-list__item',
                    {
                        'app-sidebar-list__item--active':
                            $route.path === route.path,
                    },
                ]"
            >
                <router-link :to="route.path">
                    <base-icon :name="route.icon" />
                    <span>{{ route.name }}</span>
                </router-link>
            </li>
        </ul>
    </aside>
</template>

<script>
    import { reactive } from "vue";
    import SidebarRoutes from "../../../constants/sidebar-routes";
    export default {
        name: "AppSidebar",
        setup() {
            const routes = reactive(SidebarRoutes);
            return { routes };
        },
    };
</script>

<style lang="scss">
    .app-sidebar {
        min-width: 138px;
        background-color: $primary;
        color: #fff;
        &-list__item {
            text-align: center;
            width: 100%;
            a {
                font-size: 18px;
                font-weight: 300;
                padding: 15px 0;
                display: flex;
                flex-direction: column;
                gap: 10px;
                align-items: center;
                transition: all 0.3s;
                font-family: "Alegreya Sans", sans-serif;
                span {
                    display: block;
                }
            }
            &--active,
            a:hover {
                background-color: #5696ff;
            }
        }
        .app-logo {
            padding: 15px 0;
        }
    }
</style>
