<template>
    <div class="v-input">
        <input
            type="input"
            :value="modelValue"
            @input="updateValue"
            :required="required"
            :disabled="disabled"
            class="v-input__input"
            placeholder="input"
        />
        <label class="v-input__label"
            >{{ label }} <span class="v-input-required" v-if="required">*</span>
        </label>
    </div>
</template>

<script setup>
    const props = defineProps({
        label: {
            type: String,
        },
        modelValue: {
            type: String,
        },
        required: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    });
    const emit = defineEmits(["update:modelValue"]);

    const updateValue = (event) => {
        emit("update:modelValue", event.target.value);
    };
</script>
<style lang="scss">
    .v-input {
        position: relative;
        padding-top: 1rem;
        &__input {
            font-family: inherit;
            width: 100%;
            border: 0;
            border-bottom: 1px solid $secondary;
            outline: 0;
            font-size: 1rem;
            color: $dark;
            padding: 5px 0;
            background: transparent;
            transition: border-color 0.2s;

            &::placeholder {
                color: transparent;
            }
            &:placeholder-shown ~ .v-input__label {
                font-size: 1rem;
                cursor: text;
                top: 20px;
            }
        }
        &__label {
            position: absolute;
            top: 0;
            display: block;
            transition: 0.2s;
            font-size: 1rem;
            color: $secondary;
        }
        &__input:focus {
            ~ .v-input__label {
                position: absolute;
                top: 0;
                display: block;
                transition: 0.2s;
                font-size: 1rem;
                color: $dark;
            }
            border-width: 1px;
            border-image: linear-gradient(to right, $dark, $secondary);
            border-image-slice: 1;
        }
        &-required {
            color: $error;
        }
    }
</style>
