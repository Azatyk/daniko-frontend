<template>
  <div class="day" :class="{ 'day-weekend': !appointment }">
    <h4 class="day-title">{{ day }}</h4>
    <span v-if="appointment.length > 0" class="day-appointment">
      Прием:<br />
      с {{ appointment[0] }} до {{ appointment[1] }}
    </span>
    <span v-else class="day-appointment">{{
      type == 'worker'
        ? 'Врач не принимает'
        : type == 'service'
        ? 'Услуга не\n предоставляется'
        : 'Не рабочий день'
    }}</span>
  </div>
</template>

<script>
export default {
  props: {
    day: {
      type: String,
      required: true,
    },
    appointment: {
      type: Array,
    },
    type: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.day {
  padding: 12px 0 0 0;
  width: 110px;
  height: 90px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid $primary;
  border-radius: 10px;

  &-weekend {
    border-color: #33333345;
  }

  &-title {
    margin-bottom: 5px;
    color: $main-dark;
    font-size: 14px;
  }

  &-appointment {
    color: $main-dark;
    font-size: 12px;
    text-align: center;
    opacity: 0.8;
  }
}
</style>