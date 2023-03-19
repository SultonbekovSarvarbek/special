<template>
    <div class="file-dropzone" @drop.prevent="handleDrop" @dragover.prevent>
        <p>{{ label }}</p>
        <input
            type="file"
            ref="fileInput"
            @change="handleInputChange"
            :multiple="multiple"
            :accept="accept"
        />
    </div>
</template>
<script>
    import { ref, watch } from "vue";
    export default {
        name: "FileDropzone",
        props: {
            label: {
                type: String,
                default: "Drag and drop files here or click to select",
            },
            multiple: {
                type: Boolean,
                default: false,
            },
            accept: {
                type: String,
                default: "",
            },
            modelValue: {
                type: Array,
                default: () => [],
            },
            "onUpdate:modelValue": {
                type: Function,
                default: () => {},
            },
        },
        setup(props, { emit }) {
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
                emit("update:modelValue", filesArray);
            };
            const handleDrop = (event) => {
                const fileList = event.dataTransfer.files;
                const filesArray = Array.from(fileList);
                files.value = filesArray;
                emit("update:modelValue", filesArray);
            };
            const openFileInput = () => {
                const input = this.$refs.fileInput;
                input.click();
            };
            return {
                files,
                handleInputChange,
                handleDrop,
                openFileInput,
            };
        },
    };
</script>
<style lang="scss" scoped>
    .file-dropzone {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 300px;
        border: 2px dashed #ccc;
        padding: 16px;
        cursor: pointer;
        position: relative;
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
    .file-dropzone:hover {
        border-color: #aaa;
    }
</style>
