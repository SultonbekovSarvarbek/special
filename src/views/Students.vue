<template>
    <div class="students">
        <student-card :student-details="studentInfo" />
        <contract class="contract" :contracts="contracts" />
    </div>
</template>

<script>
    import { reactive, ref } from "vue";
    import StudentCard from "@/components/student/StudentCard.vue";
    import Contract from "@/components/student/contract/Contract.vue";
    import { fetchContracts, newContract } from "@/api/contracts";

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

            //const contractForm = reactive({
            //    docType: "",
            //    docName: "",
            //});
            const contracts = ref([]);
            (async () => {
                contracts.value = await fetchContracts();
            })();

            async function submitForm() {
                const { docName, docType } = contractForm;
                const requiredData = {
                    id: Date.now(),
                    name: docName,
                    doc_type: docType,
                };
                await newContract(requiredData);
            }

            return { studentInfo, contracts };
        },
    };
</script>

<style lang="scss">
    .contract {
        margin-top: 90px;
    }
</style>
