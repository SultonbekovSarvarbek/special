<template>
    <div class="student-card">
        <div class="student-card-left">
            <div class="student-info">
                <img src="../../assets/images/user-avatar.png" alt="avatar" />
                <div class="student-info__content">
                    <h2 class="student-info__fullname">
                        {{ studentDetails.fullName }}
                        <base-icon name="ic_girl" class="user-gender" />
                    </h2>
                    <div class="student-info__additional">
                        <a href="#"><base-icon name="ic_what's_app" /></a>
                        <a href="#"><base-icon name="ic_viber" /></a>
                        <a href="#"><base-icon name="ic_telegram" /></a>
                        <a href="#" class="student-info__comment"
                            >Комментарии</a
                        >
                    </div>
                </div>
            </div>
        </div>
        <div class="student-card-center contact-info">
            <div class="contact-info__block student-info__status">
                <span class="contact-info__label">Статус</span>
                <span class="contact-info__detail">
                    <span class="student-status-indicator"></span>
                    {{ studentDetails.status }}</span
                >
            </div>
            <div class="contact-info__block">
                <div>
                    <span class="contact-info__label">Телефон</span>
                    <span class="contact-info__detail">{{
                        studentDetails.phone
                    }}</span>
                </div>
                <div>
                    <span class="contact-info__label">Телефон родителей</span>
                    <span class="contact-info__detail">{{
                        studentDetails.parents_phone
                    }}</span>
                </div>
            </div>
            <div class="contact-info__block">
                <div>
                    <span class="contact-info__label">Дата рождения</span>
                    <span class="contact-info__detail">{{
                        studentDetails.date_of_birth
                    }}</span>
                </div>
                <div>
                    <span class="contact-info__label">Адрес</span>
                    <span class="contact-info__detail"
                        >{{ studentDetails.address }}
                    </span>
                </div>
            </div>
        </div>
        <div class="student-card-right">
            <button><base-icon name="ic_edit" /></button>
            <button><base-icon name="ic_trash" /></button>
        </div>
    </div>
</template>

<script>
    import { toRefs } from "vue";
    export default {
        name: "StudentCard",
        components: {},
        props: {
            studentDetails: Object,
            defult: () => {},
        },
        setup(props) {
            const { studentDetails } = toRefs(props);
            return { studentDetails };
        },
    };
</script>

<style lang="scss">
    .student {
        &-card {
            background-color: #fff;
            border-radius: 8px;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            .user-gender {
                margin-left: 20px;
            }
            &-right {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-left: 15px;
            }
            .student-info {
                display: flex;
                gap: 30px;
                margin-left: auto;
            }
            .student-status-indicator {
                width: 9px;
                height: 9px;
                background-color: $success;
                border-radius: 2px;
                display: flex;
                align-self: center;
                margin-right: 10px;
            }
        }
        &-info {
            display: flex;
            gap: 40px;
        }
        &-info__content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        &-info__fullname {
            color: $primary;
            font-weight: 700;
            font-size: 36px;
        }
        &-info__additional {
            display: flex;
            align-items: center;
            gap: 15px;
            a {
                display: flex;
            }
        }
        &-info__comment {
            color: $primary;
            text-decoration: underline;
            text-underline-offset: 4px;
            margin-left: 20px;
        }
    }
    .student-card .contact-info {
        display: flex;
        gap: 30px;
        margin-left: auto;
        .student-info__status {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }
        &__block {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        &__label,
        &__detail {
            display: flex;
        }
        &__label {
            color: $secondary;
            font-size: 14px;
            line-height: 17px;
        }
        &__detail {
            color: $dark;
            font-size: 18px;
            line-height: 22px;
        }
    }
</style>
