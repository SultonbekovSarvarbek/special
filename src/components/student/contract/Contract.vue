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
            <base-button type="warning" uppercase @click="modalInstance.open()"
                >добавить документ</base-button
            >
        </div>
        <div class="contract-list">
            <contract-list
                v-if="allContracts && allContracts.length > 0"
                :all-contracts="allContracts"
            />
        </div>
    </div>
</template>

<script>
    import { ref, reactive, computed } from "vue";
    import VcSelect from "@/components/ui/VcSelect.vue";
    import ContractList from "./ContractList.vue";
    import { multiFilter } from "@/utils/index";
    import { useModal } from "vue-final-modal";
    import { vfm } from "@/plugins/vue-final-modal";
    import VModal from "@/components/modals/VModal.vue";
    import NewContract from "@/components/modals/NewContract.vue";

    export default {
        name: "Contract",
        components: { VcSelect, ContractList },
        props: {
            contracts: {
                type: Array,
            },
        },
        setup(props, ctx) {
            const docType = ref(null);
            const docStatus = ref(null);
            const docDate = ref(null);
            const docTypeOptions = reactive([
                {
                    value: "contract",
                    name: "Договор",
                },
                {
                    value: "reference",
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

            const modalInstance = useModal({
                context: vfm,
                component: VModal,
                onClosed() {
                    modalInstance.destroy();
                },
                slots: {
                    default: NewContract,
                },
            });

            function addContract() {
                console.log(open);
                modalInstance.open();
                //open();
            }

            const allContracts = computed(() => {
                const filters = {};
                docType.value && docType.value !== null
                    ? (filters.doc_type = docType.value.value)
                    : {};
                docStatus.value && docStatus.value !== null
                    ? (filters.status = docStatus.value.value)
                    : {};
                return multiFilter(props.contracts, filters);
            });

            return {
                docType,
                docStatus,
                docDate,
                addContract,
                docTypeOptions,
                docStatusOptions,
                modalInstance,
                allContracts,
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
