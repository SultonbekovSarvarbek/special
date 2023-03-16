<template>
    <div class="students">
        <!--{{ posts }}-->
        <student-card :student-details="studentInfo" />
        <contract class="contract" :contracts="posts" />
    </div>
</template>

<script>
    import { reactive, ref } from "vue";
    import StudentCard from "../components/student/StudentCard.vue";
    import Contract from "../components/student/contract/Contract.vue";
    //import { fetchUsers } from "../api/users";
    import { fetchPosts } from "../api/posts";
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
            const posts = ref([]);

            //*** fetch posts */
            //*** asume that posts are contracts */
            (async () => {
                posts.value = await fetchPosts();
            })();

            return { studentInfo, posts };
        },
    };
</script>

<style lang="scss">
    .contract {
        margin-top: 90px;
    }
</style>
