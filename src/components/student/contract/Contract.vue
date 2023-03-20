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
                    <label class="search-bar__label"
                        >Сортировать по (Дата заключения договора)</label
                    >
                    <vc-select v-model="docDate" :options="docDateOptions" />
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

<script setup>
    import { ref, reactive, computed } from "vue";
    import { multiFilter } from "@/utils/index";
    import { useModal } from "vue-final-modal";
    import { vfm } from "@/plugins/vue-final-modal";
    // COMPONENTS
    import VcSelect from "@/components/ui/VcSelect.vue";
    import ContractList from "./ContractList.vue";
    import VModal from "@/components/modals/VModal.vue";
    import NewContract from "@/components/modals/NewContract.vue";
    // CONSTANTS
    import types from "@/constants/contract/types";
    import statuses from "@/constants/contract/statuses";

    const props = defineProps({
        contracts: {
            type: Array,
        },
    });
    const docType = ref(null);
    const docStatus = ref(null);
    const docDate = ref(null);
    const docTypeOptions = reactive(types);
    const docStatusOptions = reactive(statuses);
    const docDateOptions = reactive([
        "03.07.2023",
        "04.07.2023",
        "05.07.2023",
        "06.07.2023",
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

    const allContracts = computed(() => {
        const filters = {};
        filters.doc_type = docType.value?.value || "";
        filters.status = docStatus.value?.value || "";
        filters.start_date = docDate.value || "";
        return multiFilter(props.contracts, filters);
    });
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
