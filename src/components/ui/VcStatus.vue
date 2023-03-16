<template>
    <div class="v-status">
        <span class="v-status__type"><span class="v-status-state" :class="[type ? 'v-status-state--' + type : '']"></span> {{ statusName }} </span>
    </div>
</template>
<script>
    import { computed } from 'vue'
    export default {
        name: "VcStatus",
        props: {
            type: {
                type: String,
                default: "approved",
            }
        },
        setup(props) {
            const statusName = computed(()=>{
                if(props.type === 'approved'){
                    return 'Заключен'
                }
                if(props.type === 'rejected'){
                    return 'Расторгнут'
                }
            })

            return {statusName}
        },
    };
</script>
<style lang="scss">
    .v-status{
        &__type{
            font-size: 18px;
            line-height: 21.6px;
            color: $dark;
            display: flex;
            align-items: center;
            gap: 9px;
        }
        &-state{
            width: 9px;
            height: 9px;
            border-radius: 2px;
            display: block;
        }
    }
    .v-status-state{
        &--approved{
            background-color: $success;
        }
        &--rejected{
            background-color: $error;
        }
    }
</style>
