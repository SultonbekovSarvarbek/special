<template>
    <div class="datepicker">
        <input
            type="text"
            v-model="selectedDate"
            @click="showDatePicker = true"
        />
        <div class="datepicker-menu" v-if="showDatePicker">
            <div class="datepicker-header">
                <div class="prev-month" @click="prevMonth">
                    prev month
                    <!--<i class="fas fa-chevron-left"></i>-->
                </div>
                <div class="datepicker-title">
                    {{ monthYear }}
                </div>
                <div class="next-month" @click="nextMonth">
                    next month
                    <!--<i class="fas fa-chevron-right"></i>-->
                </div>
            </div>
            <div class="datepicker-body">
                <div
                    class="datepicker-row"
                    v-for="(row, index) in calendar"
                    :key="index"
                >
                    <div
                        class="datepicker-cell"
                        v-for="(day, index) in row"
                        :key="index"
                        :class="{ selected: selectedDate === day.date }"
                        @click="selectDate(day)"
                    >
                        {{ day.number }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { ref, computed } from "vue";
    export default {
        name: "DatePicker",
        setup() {
            const selectedDate = ref("");
            const showDatePicker = ref(false);
            const currentDate = new Date();
            const currentMonth = ref(currentDate.getMonth());
            const currentYear = ref(currentDate.getFullYear());
            const monthYear = computed(() => {
                const date = new Date(currentYear.value, currentMonth.value);
                return date.toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                });
            });
            const calendar = computed(() => {
                const date = new Date(currentYear.value, currentMonth.value);
                const firstDayOfMonth = new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    1
                ).getDay();
                const lastDayOfMonth = new Date(
                    date.getFullYear(),
                    date.getMonth() + 1,
                    0
                ).getDate();
                const lastDayOfPrevMonth = new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    0
                ).getDate();
                const days = [];
                // Add days from previous month
                for (let i = firstDayOfMonth - 1; i >= 0; i--) {
                    const number = lastDayOfPrevMonth - i;
                    days.push({
                        date: `${currentYear.value}-${currentMonth.value}-${number}`,
                        number,
                    });
                }
                // Add days from current month
                for (let i = 1; i <= lastDayOfMonth; i++) {
                    const number = i;
                    days.push({
                        date: `${currentYear.value}-${
                            currentMonth.value + 1
                        }-${number}`,
                        number,
                    });
                }
                // Add days from next month
                const daysToAdd = 42 - days.length;
                for (let i = 1; i <= daysToAdd; i++) {
                    const number = i;
                    days.push({
                        date: `${currentYear.value}-${
                            currentMonth.value + 2
                        }-${number}`,
                        number,
                    });
                }
                // Split days into rows
                const rows = [];
                for (let i = 0; i < days.length; i += 7) {
                    rows.push(days.slice(i, i + 7));
                }
                return rows;
            });
            function prevMonth() {
                if (currentMonth.value === 0) {
                    currentYear.value--;
                    currentMonth.value = 11;
                } else {
                    currentMonth.value--;
                }
            }
            function nextMonth() {
                if (currentMonth.value === 11) {
                    currentYear.value++;
                    currentMonth.value = 0;
                } else {
                    currentMonth.value++;
                }
            }
            function selectDate(day) {
                selectedDate.value = day.date;
                showDatePicker.value = false;
            }
            return {
                selectedDate,
                showDatePicker,
                monthYear,
                calendar,
                prevMonth,
                nextMonth,
                selectDate,
            };
        },
    };
</script>
<style scoped>
    .datepicker {
        position: relative;
    }
    .datepick er-menu {
        position: absolute;
        top: 40px;
        left: 0;
        z-index: 1000;
        width: 280px;
        background-color: #fff;
        border: 1px solid #ccc;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    }
    .datepicker-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        border-bottom: 1px solid #ccc;
        font-size: 16px;
    }
    .datepicker-title {
        text-align: center;
    }
    .datepicker-body {
        display: flex;
        flex-wrap: wrap;
        padding: 8px;
    }
    .datepicker-row {
        display: flex;
        width: 100%;
    }
    .datepicker-cell {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        font-size: 14px;
        cursor: pointer;
    }
    .datepicker-cell:hover {
        background-color: #f5f5f5;
    }
    .datepicker-cell.selected {
        background-color: #007bff;
        color: #fff;
    }
    .prev-month,
    .next-month {
        cursor: pointer;
    }
    .prev-month:hover,
    .next-month:hover {
        color: #007bff;
    }
    .fas {
        font-size: 14px;
    }
</style>
