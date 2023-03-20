<template>
    <button
        @click="handleClick"
        :disabled="buttonDisabled"
        :type="nativeType"
        :class="['base-button', 'base-button--' + type, buttonUppercase]"
    >
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>
<script setup>
    import { computed } from "vue";
    const props = defineProps({
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
        uppercase: {
            type: Boolean,
            default: false,
        },
    });
    const emit = defineEmits(["click"]);
    const handleClick = (event) => {
        emit("click", event);
    };
    const buttonUppercase = computed(() => {
        return props.uppercase ? "base-button--uppercase" : "";
    });
</script>
<style lang="scss">
    .base-button {
        border-radius: 15px;
        color: #fff;
        padding: 15px 30px;
        text-align: center;
        font-size: 16px;
        line-height: 19.2px;
        font-weight: 800;
        background-color: $primary;
        &--uppercase {
            text-transform: uppercase;
        }
        &--warning {
            background-color: $warning;
        }
        &--primary {
            background-color: $primary;
        }
        &--success {
            background-color: $success;
        }
        &--secondary {
            background-color: $secondary-100;
        }
    }
</style>
