<template>
    <div class="students">
        <student-card :student-details="studentInfo" />
        <contract class="contract" :contracts="contracts" />

        <form @submit.prevent="submitForm">
            <div>
                <label for="doc_type">Название документа *</label>
                <input
                    type="text"
                    id="doc_type"
                    v-model="contractForm.docType"
                />
            </div>
            <div>
                <label for="doc_name">Название документа *</label>
                <input
                    type="text"
                    id="doc_name"
                    v-model="contractForm.docName"
                />
            </div>
            <div>
                <button type="submit">Добавить документ</button>
            </div>
        </form>
    </div>
</template>

<script>
    import { reactive, ref } from "vue";
    import StudentCard from "../components/student/StudentCard.vue";
    import Contract from "../components/student/contract/Contract.vue";
    import { fetchContracts, newContract } from "../api/contracts";

    export default {
        name: "Students",
        components: { StudentCard, Contract },
        setup(ctx) {
            const studentInfo = reactive({
                fullName: "Абрамова Екатерина",
                gender: "woman",
                status: "Активен",
                phone: "8-900-000-00-00",
                parents_phone: "8-900-000-00-00",
                date_of_birth: "25.04.2004 (17 лет)",
                address: "г. Краснодар, ул. Советская 24, кв. 208 ",
            });

            const contractForm = reactive({
                docType: "",
                docName: "",
            });

            async function submitForm() {
                console.log(contractForm);
                const { docName, docType } = contractForm;
                const requiredData = {
                    name: docName,
                    doc_type: docType,
                };
                await newContract(requiredData);
            }

            const contracts = ref([]);
            (async () => {
                contracts.value = await fetchContracts();
            })();

            return { studentInfo, contracts, contractForm, submitForm };
        },
    };
</script>

<style lang="scss">
    .contract {
        margin-top: 90px;
    }
</style>
