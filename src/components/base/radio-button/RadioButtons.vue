<template>
    <div>
        <label v-for="(option, index) in options" :key="index">
            <input
                type="radio"
                :name="name"
                :value="option.value"
                v-model="selectedOption"
                @change="emitSelection"
            />
            {{ option.label }}
        </label>
    </div>
</template>
<script>
    import { ref, watch, computed } from "vue";
    export default {
        props: {
            options: {
                type: Array,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            selectedValue: {
                type: String,
                default: null,
            },
        },
        setup(props, { emit }) {
            const selectedOption = ref(props.selectedValue);
            watch(selectedOption, (newValue) => {
                emit("update:selectedValue", newValue);
            });
            const emitSelection = () => {
                emit("update:selectedValue", selectedOption.value);
            };
            const selectedOptionLabel = computed(() => {
                const option = props.options.find(
                    (option) => option.value === selectedOption.value
                );
                return option ? option.label : null;
            });
            return {
                selectedOption,
                emitSelection,
                selectedOptionLabel,
            };
        },
    };
</script>
