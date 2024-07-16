<template>
  <div id="calendar-week">
    <div class="card-group">
      <!-- Anfang: Template für die Calendar-Day-Component -->
      <CalendarDay v-for="day in calendarWeekData" :key="day.id" :day="day" />  
      <!-- Ende: Template für die Calendar-Day-Component -->
   </div>
  </div>
</template>

<script>
import CalendarDay from "./CalendarDay";
import Store from "../store";

export default {
    name:"CalendarWeek",
    components: {
      CalendarDay,
    },
    data() {
      return{
        calendarWeekData: Store.state.calendarWeekData,
      };
    },
};
</script>

<style scoped>
h5 {
  color: red;
}
</style>