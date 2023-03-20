<template>
    <form>
        <label v-for="(option, index) in options" :key="index">
            <input
                type="radio"
                :name="name"
                :value="option.value"
                v-model="selectedOption"
                @change="emitSelection"
            />
            <span>{{ option.label }}</span>
        </label>
    </form>
</template>
<script setup>
    import { ref, watch, computed } from "vue";
    const props = defineProps({
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
    });
    const emit = defineEmits(["update:selectedValue"]);

    const selectedOption = ref(props.selectedValue);
    watch(selectedOption, (newValue) => {
        emit("update:selectedValue", newValue);
    });
    const emitSelection = () => {
        emit("update:selectedValue", selectedOption.value);
    };
    //const selectedOptionLabel = computed(() => {
    //    const option = props.options.find(
    //        (option) => option.value === selectedOption.value
    //    );
    //    return option ? option.label : null;
    //});
</script>
<style lang="scss" scoped>
    form {
        display: inline-flex;
        flex-direction: column;
    }
    label {
        display: flex;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        margin-bottom: 10px;
        input {
            position: absolute;
            left: -9999px;
            &:checked + span {
                &:before {
                    box-shadow: inset 0 0 0 5px #fff;
                    background-color: $primary;
                    border-color: $primary;
                }
            }
        }
        span {
            display: flex;
            align-items: center;
            &:before {
                display: flex;
                flex-shrink: 0;
                content: "";
                background-color: #fff;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                margin-right: 10px;
                border: 1px solid $secondary-200;
                transition: all 0.5s;
            }
        }
    }
</style>
