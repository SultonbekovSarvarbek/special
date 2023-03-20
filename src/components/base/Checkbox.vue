<template>
    <div class="v-checkbox">
        <li class="v-checkbox__item">
            <input
                type="checkbox"
                :value="value"
                v-model="model"
                :id="value"
                class="v-checkbox__input"
            />
            <label class="v-checkbox__label" :for="value">{{ label }}</label>
        </li>
    </div>
</template>
<script setup>
    import { computed } from "vue";
    const props = defineProps({
        modelValue: { type: [Array, Boolean] },
        value: { type: [String] },
        label: { type: String },
    });
    const emit = defineEmits(["update:modelValue"]);
    const model = computed({
        get() {
            return props.modelValue;
        },
        set(value) {
            emit("update:modelValue", value);
        },
    });
</script>
<style lang="scss">
    .v-checkbox {
        display: inline-flex;
        &__item {
            position: relative;
        }
        &__input {
            -webkit-appearance: none;
            width: 20px;
            height: 20px;
            border: 1px solid $secondary-200;
            border-radius: 1px;
            vertical-align: sub;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            outline: none;
            &:checked {
                background-color: $primary;
            }
            &:after {
                content: "";
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEzMl8xNDU2MSkiPgo8cGF0aCBkPSJNMTEuNjQ4NSAzLjY4NDIyTDUuMzE4MDEgMTAuMDE0M0M0Ljg0OTIzIDEwLjQ4MzIgNC4wODg3OSAxMC40ODMyIDMuNjE5NTcgMTAuMDE0M0wwLjM1MTcxOSA2Ljc0NjJDLTAuMTE3MjQgNi4yNzczMiAtMC4xMTcyNCA1LjUxNjggMC4zNTE3MTkgNS4wNDc4NEMwLjgyMDc2NyA0LjU3ODc5IDEuNTgxMTUgNC41Nzg3OSAyLjA0OTk5IDUuMDQ3NjZMNC40NjkwNCA3LjQ2Njc1TDkuOTQ5OTggMS45ODU3OEMxMC40MTkgMS41MTY3MyAxMS4xNzk1IDEuNTE3MDggMTEuNjQ4MyAxLjk4NTc4QzEyLjExNzIgMi40NTQ3NCAxMi4xMTcyIDMuMjE1IDExLjY0ODUgMy42ODQyMloiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTMyXzE0NTYxIj4KPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=");
                background-size: 40px;
                background-repeat: no-repeat;
                background-position: center;
                background-size: auto;
            }
        }
        &__label {
            padding-left: 30px;
            display: inline-block;
            font-size: 18px;
            line-height: 21px;
            width: 100%;
            user-select: none;
            cursor: pointer;
        }
    }
</style>
