<template>
    <div class="file-dropzone" @drop.prevent="handleDrop" @dragover.prevent>
        <div class="file-dropzone-info">
            <base-icon name="ic_plus" />
            <div>
                <h4 class="file-dropzone-heading">Загрузить файл</h4>
                <span class="file-dropzone-info__text"
                    ><span class="select-file">Выберите файл</span> или
                    перетащите его сюда</span
                >
            </div>
        </div>
        <input
            type="file"
            ref="fileInput"
            @change="handleInputChange"
            :multiple="multiple"
            :accept="accept"
        />
    </div>
</template>
<script setup>
    import { ref, watch } from "vue";
    const props = defineProps({
        multiple: {
            type: Boolean,
            default: false,
        },
        accept: {
            type: String,
            default: "",
        },
        modelValue: {
            type: Object,
            default: () => {},
        },
        "onUpdate:modelValue": {
            type: Function,
            default: () => {},
        },
    });
    const emit = defineEmits(["update:modelValue"]);
    const files = ref(props.modelValue);
    watch(
        () => props.modelValue,
        (newValue) => {
            files.value = newValue;
        }
    );
    const handleInputChange = (event) => {
        const fileList = event.target.files;
        const filesArray = Array.from(fileList);
        files.value = filesArray;
        emit("update:modelValue", filesArray[0]);
    };
    const handleDrop = (event) => {
        const fileList = event.dataTransfer.files;
        const filesArray = Array.from(fileList);
        files.value = filesArray;
        emit("update:modelValue", filesArray[0]);
    };
    //const openFileInput = () => {
    //    const input = this.$refs.fileInput;
    //    input.click();
    //};
</script>
<style lang="scss">
    .file-dropzone {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 157px;
        border-radius: 10px;
        border: 1px solid $secondary-200;
        padding: 16px;
        cursor: pointer;
        position: relative;
        background-color: $secondary-300;
        &-info {
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
            font-size: 1rem;
            line-height: 22px;
        }
        &-heading {
            color: $dark;
            margin-bottom: 10px;
        }
        &-info__text {
            color: $secondary;
        }
        .select-file {
            text-decoration: underline;
        }
        input {
            position: absolute;
            right: 0;
            left: 0;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
        }
    }
    .file-dropzone p {
        margin: 0;
        font-size: 18px;
        font-weight: bold;
    }
</style>
