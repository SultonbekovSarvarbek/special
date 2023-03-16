<template>
    <div class="contract">
        <div class="search-bar">
            <div class="search-bar__items">
                <div class="search-bar__item">
                    <label class="search-bar__label">Тип документа</label>
                    <vc-select v-model="docType" :options="docTypeOptions" />
                </div>
                <div class="search-bar__item">
                    <label class="search-bar__label">Статус</label>
                    <vc-select
                        v-model="docStatus"
                        :options="docStatusOptions"
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
        <div class="contract-list">
            <!--{{ allContracts2 }}-->
            <h1 v-if="allContracts2 && allContracts2.length === 0">Загрузка</h1>
            <contract-list
                v-if="allContracts2 && allContracts2.length > 0"
                :all-contracts="allContracts2"
            />
        </div>
    </div>
</template>

<script>
    import { ref, reactive, computed } from "vue";
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
            const docType = ref("");
            const docStatus = ref("");
            const docDate = ref("");
            const allContracts = reactive([]);
            const docTypeOptions = reactive([
                {
                    value: "contract",
                    name: "Договор",
                },
                {
                    value: "references",
                    name: "Справка",
                },
                {
                    value: "another",
                    name: "Другое",
                },
            ]);
            const docStatusOptions = reactive([
                {
                    value: "approved",
                    name: "Заключен",
                },
                {
                    value: "rejected",
                    name: "Расторгнут",
                },
            ]);

            function addContract() {
                console.log("add contract");
            }

            const allContracts2 = computed(() => {
                console.log(docStatus);
                //if (docStatus.value && docStatus.value.value === "approved") {
                //    return props.contracts.filter(
                //        (elem) => elem.status === "approved"
                //    );
                //} else if (
                //    docStatus.value &&
                //    docStatus.value.value === "rejected"
                //) {
                //    return props.contracts.filter(
                //        (elem) => elem.status === "rejected"
                //    );
                //} else {
                //    return props.contracts.filter((elem) => elem);
                //}
                if (docStatus || docType) {
                    return props.contracts.filter(
                        (elem) => elem.status === "rejected"
                    );
                } else {
                    return props.contracts.filter((elem) => elem);
                }
            });

            return {
                docType,
                docStatus,
                docDate,
                addContract,
                docTypeOptions,
                docStatusOptions,
                allContracts,
                allContracts2,
            };
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
