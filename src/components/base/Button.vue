<template>
    <button
        class="base-button"
        @click="handleClick"
        :disabled="buttonDisabled"
        :type="nativeType"
        :class="[type ? 'base-button--' + type : '']"
    >
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>
<script>
    export default {
        name: "Button",
        emits: ["click"],
        props: {
            type: {
                type: String,
                default: "default",
            },
            nativeType: {
                type: String,
                default: "button",
            },
            buttonDisabled: {
                type: Boolean,
                default: false,
            },
        },
        setup(props, ctx) {
            const handleClick = (event) => {
                ctx.emit("click", event);
            };
            return { handleClick };
        },
    };
</script>
<style lang="scss">
    .base-button {
        border-radius: 15px;
        color: #fff;
        padding: 15px 30px;
        text-align: center;
        font-size: 16px;
        line-height: 19.2px;
        text-transform: uppercase;
        font-weight: 800;
        background-color: $primary;
        &--warning {
            background-color: $warning;
        }
        &--primary {
            background-color: $primary;
        }
        &--success {
            background-color: $success;
        }
    }
</style>
