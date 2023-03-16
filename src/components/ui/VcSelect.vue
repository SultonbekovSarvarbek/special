<template>
    <v-select
        :options="options"
        :modelValue="selected"
        :searchable="false"
        :placeholder="placeholder"
        @update:modelValue="updateModelValue"
        class="base-select"
    >
        <template #open-indicator="{ attributes }">
            <span v-bind="attributes">
                <base-icon name="ic_arrow" />
            </span>
        </template>
    </v-select>
</template>

<script>
    import { ref } from "vue";
    import VSelect from "vue-select";
    export default {
        name: "VcSelect",
        props: {
            placeholder: {
                type: String,
                default: () => "Не выбрано",
            },
            options: {
                type: Array,
                required: true,
            },
        },
        components: {
            VSelect,
        },
        setup(props, ctx) {
            let selected = ref[""];
            function updateModelValue(val) {
                console.log(val);
                ctx.emit("update:modelValue", val);
            }
            return { selected, updateModelValue };
        },
    };
</script>

<style>
    @import "vue-select/dist/vue-select.css";
</style>
<style lang="scss">
    .base-select {
        color: $primary;
        margin: 0;
        width: 115px;
        height: 22px;
        .vs__dropdown-toggle {
            border: none;
            padding: 0;
            font-size: 18px;
            cursor: pointer;
        }
        .vs__selected-options {
            padding: 0;
        }
        .vs__search,
        .vs__actions {
            margin: 0;
            padding: 0;
            font-size: 18px;
            border: none;
            line-height: 21px;
        }
        .vs__clear {
            fill: $primary;
        }
        .vs__selected {
            color: $primary;
            padding: 0;
            margin: 0;
            line-height: 21px;
        }
        .vs__dropdown-menu {
            box-shadow: none;
            border: none;
        }
    }
</style>
