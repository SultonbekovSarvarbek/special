<template>
    <div class="v-input">
        <label for="v-input__label">{{ label }}</label>
        <input type="text" />
    </div>
</template>

<script setup>
    defineProps({
        label: {
            type: String,
        },
    });
</script>
