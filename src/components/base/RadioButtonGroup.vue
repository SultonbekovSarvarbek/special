<template>
    <div>
        <RadioButtons
            :options="options"
            :name="'my-radio-buttons'"
            v-model:selectedValue="selectedValue"
        />
    </div>
</template>
<script>
    import RadioButtons from "./radio-button/RadioButtons.vue";
    export default {
        components: {
            RadioButtons,
        },
        data() {
            return {
                options: [
                    { label: "Option 1", value: "option-1" },
                    { label: "Option 2", value: "option-2" },
                    { label: "Option 3", value: "option-3" },
                ],
                selectedValue: "option-1",
            };
        },
    };
</script>
