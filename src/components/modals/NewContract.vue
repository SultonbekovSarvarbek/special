<template>
    <div class="new-contract-form">
        <h1 class="new-contract-form__heading">Добавить документ</h1>
        <div class="contract-type">
            <label class="new-contract-form__label"
                >Тип документа: <span class="required-sign">*</span>
            </label>
            <RadioButtons
                :options="radioOptions"
                :name="'my-radio-buttons'"
                v-model:selectedValue="selectedRadioOption"
            />
        </div>
        <base-input label="Название документа" required />
        <base-input label="Номер" required />

        <div class="new-contract-form__date-picker">
            <VDatePicker v-model.range="range" :min-date="new Date()">
                <template #default="{ inputValue, inputEvents }">
                    <div class="date-from-to">
                        <div
                            class="date-from-to__from"
                            v-on="inputEvents.start"
                        >
                            <label class="new-contract-form__label"
                                >Действует с:</label
                            >
                            <div class="date-from-to__info">
                                <span v-if="inputValue.start">{{
                                    inputValue.start
                                }}</span>
                                <span class="empty" v-else>Не выбрано</span>
                            </div>
                            <base-icon name="ic_calendar" />
                        </div>
                        <div class="date-from-to__from" v-on="inputEvents.end">
                            <label class="new-contract-form__label">по:</label>
                            <div class="date-from-to__info">
                                <span v-if="inputValue.end">{{
                                    inputValue.end
                                }}</span>
                                <span class="empty" v-else>Не выбрано</span>
                            </div>
                            <base-icon name="ic_calendar" />
                        </div>
                    </div>
                </template>
            </VDatePicker>
        </div>
        <div class="new-contract-form__additional-opts">
            <template v-for="option in checkboxOptions" :key="option.value">
                <Checkbox
                    :label="option.label"
                    v-model="selectedCheckbox"
                    :value="option.value"
                />
            </template>
        </div>
        <div class="upload-file">
            <img
                v-if="contractFilePreview"
                :src="contractFilePreview"
                alt="file-preview"
            />
            <FileDropZone v-model="contractFile" />
        </div>
    </div>
</template>
<script setup>
    import { ref, watch } from "vue";
    import RadioButtons from "@/components/base/RadioButtons.vue";
    import Checkbox from "@/components/base/Checkbox.vue";
    import FileDropZone from "@/components/base/FileDropZone.vue";
    // CONSTANTS
    import types from "@/constants/contract/types";

    // radio items
    let selectedRadioOption = ref("");
    let radioOptions = ref(types);

    // checkbox items
    let selectedCheckbox = ref([]);
    let checkboxOptions = ref([
        {
            label: "Оповещать об окончании",
            value: "notify_when_finished",
        },
        {
            label: "Создавать задачу при окончании",
            value: "create_task_when_finished",
        },
    ]);

    // date items
    const range = ref({
        start: null,
        end: null,
    });

    // file upload items
    const contractFile = ref(null);
    const contractFilePreview = ref(null);
    watch(contractFile, (file) => {
        var fr = new FileReader();
        fr.onload = function (e) {
            contractFilePreview.value = fr.result;
        };
        fr.readAsDataURL(file);
    });
</script>
<style lang="scss">
    .new-contract-form {
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-bottom: 50px;
        &__heading {
            font-size: 36px;
            line-height: 43px;
            color: $primary;
            font-weight: 700;
        }
        &__label {
            font-size: 18px;
            color: $dark;
        }
        &__additional-opts {
            display: flex;
            flex-direction: column;
            gap: 17px;
        }
        .upload-file {
            //margin-top: 50px;
        }
    }
    .new-contract-form .contract-type {
        display: flex;
        align-items: flex-start;
        gap: 17px;
    }
    .new-contract-form .date-from-to {
        display: flex;
        align-items: center;
        gap: 40px;
        &__from,
        &__to {
            display: flex;
            align-items: center;
        }
        &__info {
            margin-left: 10px;
            margin-right: 17px;
        }
        &__input {
            display: none;
        }
        .empty {
            color: $secondary;
        }
    }
</style>
