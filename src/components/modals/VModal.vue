<template>
    <VueFinalModal
        class="modal-container"
        content-class="modal-content"
        :lock-scroll="true"
        lock-scroll
        overlay-transition="vfm-fade"
        content-transition="vfm-fade"
        @update:model-value="(val) => emit('update:modelValue', val)"
    >
        <div class="modal">
            <div>
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
            </div>
            <div>
                <button
                    class="modal-close"
                    @click="emit('update:modelValue', val)"
                >
                    <base-icon name="ic_cross" />
                </button>
            </div>
        </div>
    </VueFinalModal>
</template>
<script setup>
    import { ref } from "vue";
    import { VueFinalModal } from "vue-final-modal";
    //const props = defineProps({
    //    title: String,
    //    content: String,
    //});

    const emit = defineEmits(["update:modelValue"]);
    const getInitialValues = () => ({
        teleportTo: "body",
        modelValue: false,
        displayDirective: "if",
        hideOverlay: false,
        overlayTransition: "vfm-fade",
        contentTransition: "vfm-fade",
        clickToClose: true,
        escToClose: true,
        background: "non-interactive",
        lockScroll: true,
        swipeToClose: "none",
    });
    const options = ref(getInitialValues());
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
        .vfm--overlay {
            background: rgb(0 0 0 / 76%) !important;
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
        width: 50%;
    }
    .modal-close {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        margin: 8px 8px 0 0;
        cursor: pointer;
    }
    .modal-close {
        &:hover {
            color: gray;
        }
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
