<template>
    <div class="contract-item">
        <div class="contract-item__info">
            <div>
                <h2 class="contract-item__name">{{ contract.name }}</h2>
                <span class="contract-item__status"
                    ><vc-status
                        v-if="contract.status !== 'none'"
                        :type="contract.status"
                /></span>
                <span class="contract-item__date"
                    >{{ contract.start_date }}
                    <template v-if="contract.end_date">
                        - {{ contract.end_date }}
                    </template>
                </span>
            </div>
            <div class="contract-item__actions">
                <base-icon name="ic_print" />
                <base-icon name="ic_edit" />
                <base-icon name="ic_trash" />
            </div>
        </div>
        <div class="contract-item__file">
            <img src="../../../assets/images/file.png" alt="" />
        </div>
    </div>
</template>

<script>
    import { toRefs } from "vue";
    import VcStatus from "../../ui/VcStatus.vue";
    export default {
        name: "ContractItem",
        components: {
            VcStatus,
        },
        props: {
            contract: {
                type: Object,
            },
        },
        setup(props) {
            const { contract } = toRefs(props);
            return { contract };
        },
    };
</script>

<style lang="scss">
    .contract-item {
        padding: 20px;
        display: flex;
        background-color: #fff;
        max-width: 378px;
        gap: 15px;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        &__info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        &__name {
            font-size: 24px;
            font-weight: 700;
            line-height: 28.8px;
        }
        &__date {
            color: $secondary;
        }
        &__status {
            display: block;
            height: 21.6px;
        }
        &__actions {
            display: flex;
            align-items: center;
            gap: 30px;
        }
    }
</style>
