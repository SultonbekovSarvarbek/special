<template>
    <div class="app">
        <app-sidebar />
        <div class="app-content">
            <app-header />
            <div class="app-view">
                <router-view v-slot="{ Component, route }">
                    <transition name="fade" mode="out-in">
                        <div :key="route.name">
                            <component :is="Component"></component>
                        </div>
                    </transition>
                </router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import AppSidebar from "./components/ui/app/AppSidebar.vue";
    import AppHeader from "./components/ui/app/AppHeader.vue";
    export default {
        components: {
            AppSidebar,
            AppHeader,
        },
        setup() {
            // ...
        },
    };
</script>

<style lang="scss">
    .app {
        display: flex;
        align-items: stretch;
        min-height: 100vh;
        &-content {
            flex-grow: 1;
            background-color: #f2f5f8;
        }
        &-view {
            padding: 30px 80px;
        }
    }
</style>
