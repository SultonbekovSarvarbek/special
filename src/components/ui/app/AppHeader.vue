<template>
    <div class="app-header">
        <div class="app-header__content">
            <div>
                <span class="url">{{ $route.name }}/ Ученики</span> / Документы
            </div>
            <div class="app-header-user">
                <div class="user-info">
                    <img
                        src="../../../assets/images/user-logo.png"
                        alt="user-logo"
                    />
                    <span>Name_user</span>
                </div>
                <div class="user-actions">
                    <button><base-icon name="ic_hexagon" /></button>
                    <button><base-icon name="ic_exit" /></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppHeader",
        setup() {},
    };
</script>

<style lang="scss">
    .app-header {
        background-color: #fff;
        &__content {
            padding: 20px 80px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: "Alegreya Sans", sans-serif;
            span {
                //text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                font-weight: 200;
                color: $secondary;
            }
            .url {
                color: $dark;
            }
        }
        &-user {
            display: flex;
            align-items: center;
            gap: 50px;
        }
        .user-info {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .user-actions {
            display: flex;
            align-items: center;
            gap: 20px;
        }
    }
</style>
