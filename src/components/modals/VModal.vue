<template>
    <VueFinalModal
        class="modal-container"
        content-class="modal-content"
        overlay-transition="vfm-fade"
        @beforeOpen="beforeOpen"
        @closed="onClose"
        @clickOutside="onClose"
        :esc-to-close="false"
        content-transition="vfm-fade"
        @update:model-value="(val) => emit('update:modelValue', val)"
    >
        <div class="modal">
            <slot />
            <div class="modal__bottom">
                <base-button type="warning" uppercase
                    >Добавить документ</base-button
                >
                <base-button
                    type="secondary"
                    uppercase
                    @click="emit('update:modelValue', val)"
                    >Отмена</base-button
                >
            </div>

            <div>
                <button
                    class="modal-close"
                    @click="emit('update:modelValue', false)"
                >
                    <base-icon name="ic_cross" />
                </button>
            </div>
        </div>
    </VueFinalModal>
</template>

<script setup>
    import { lock, unlock } from "tua-body-scroll-lock";
    import { VueFinalModal } from "vue-final-modal";
    const targetElement = document.querySelector("body");

    const beforeOpen = () => {
        lock(targetElement);
    };
    const onClose = () => {
        unlock(targetElement);
    };
    const emit = defineEmits(["update:modelValue"]);
</script>

<style lang="scss">
    .modal-container {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        height: 100%;
        left: 0;
        overflow-y: auto;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 20;
        background: inherit;
        .vfm--overlay {
            background: rgba(13, 40, 57, 0.5);
            position: fixed;
        }
    }
    .modal-content {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 10px;
        margin: 48px 0 80px;
        position: relative;
        z-index: 25;
        width: 100%;
        max-width: 650px;
    }
    .modal-close {
        position: absolute;
        top: 0;
        right: 0;
        right: 30px;
        top: 30px;
        cursor: pointer;
    }
    .modal {
        padding: 30px;
        &__bottom {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
        }
    }
</style>
