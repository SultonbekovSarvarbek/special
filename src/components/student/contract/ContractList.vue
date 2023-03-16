<template>
    <div class="contract-list">
        <contract-item
            v-for="contract in allContracts"
            :key="contract.id"
            :contract="contract"
        />
    </div>
</template>

<script>
    //import { toRefs } from "vue";
    import ContractItem from "./ContractItem.vue";
    export default {
        name: "ContractList",
        components: { ContractItem },
        props: {
            allContracts: {
                type: Array,
            },
        },
        setup() {},
    };
</script>

<style lang="scss">
    .contract-list {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
    }
</style>
