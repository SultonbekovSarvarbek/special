<template>
    <div class="new-contract">
        <div>
            <label for="">Тип документа: * </label>
            {{ selectedValue }}
            <RadioButtons
                :options="options"
                :name="'my-radio-buttons'"
                v-model:selectedValue="selectedValue"
            />
        </div>
        <base-input label="Название документа" required v-model="doc.name" />
        <base-input label="Номер" v-model="doc.number" />

        <FileDropzone
            v-model="fileList"
            label="Drop files here or click to select"
        />
    </div>
</template>
<script setup>
    import { ref } from "vue";
    import FileDropzone from "@/components/base/FileDropZone.vue";
    import RadioButtons from "../base/radio-button/RadioButtons.vue";
    let options = ref([
        { label: "Option 1", value: "option-1" },
        { label: "Option 2", value: "option-2" },
        { label: "Option 3", value: "option-3" },
    ]);
    let selectedValue = ref("option-1");

    let fileList = ref([]);
    let doc = ref({
        name: "",
    });
</script>
<style>
    .new-contract {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
</style>
