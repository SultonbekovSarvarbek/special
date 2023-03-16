<template>
    <div class="contract">
        <div class="search-bar">
            <div class="search-bar__items">
                <div class="search-bar__item">
                    <label class="search-bar__label">Тип документа</label>
                    <vc-select
                        v-model="docType"
                        :options="['Договор', 'Справка', 'Другое']"
                    />
                </div>
                <div class="search-bar__item">
                    <label class="search-bar__label">Статус</label>
                    <vc-select
                        v-model="docStatus"
                        :options="['Заключен', 'Расторгнут']"
                    />
                </div>
                <div class="search-bar__item">
                    <label class="search-bar__label">Сортировать по</label>
                    <vc-select v-model="docDate" :options="['Дате']" />
                </div>
            </div>
            <base-button type="warning" @click="addContract"
                >добавить документ</base-button
            >
        </div>
        {{ contracts }}
        <contract-list class="contract-list" :all-contracts="contracts" />
    </div>
</template>

<script>
    import { ref } from "vue";
    import VcSelect from "../../ui/VcSelect.vue";
    import ContractList from "./ContractList.vue";
    export default {
        name: "Contract",
        components: { VcSelect, ContractList },
        props: {
            contracts: {
                type: Array,
            },
        },
        setup(props, ctx) {
            let docType = ref("");
            let docStatus = ref("");
            let docDate = ref("");
            const allContracts = ref([
                {
                    name: "Договор №001",
                    type: "approved",
                    date: "04.07.2021 - 04.07.2022",
                },
                {
                    name: "Договор №002",
                    type: "rejected",
                    date: "04.07.2021 - 04.07.2022",
                },
            ]);
            function addContract() {
                console.log("add contract");
            }
            return { docType, docStatus, docDate, addContract, allContracts };
        },
    };
</script>

<style lang="scss">
    .search-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        &__items {
            display: flex;
            align-items: center;
            gap: 100px;
        }
        &__label {
            margin-bottom: 5px;
            color: $secondary;
            font-size: 14px;
            line-height: 16.8px;
        }
    }
    .contract-list {
        margin-top: 36px;
    }
</style>
