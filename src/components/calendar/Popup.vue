<template>
  <div class="popup" v-if="isShow">
    <form class="form" @submit.prevent>
      <div class="form__close" @click="closePopup">&times;</div>
      <div class="form__item">
        <label class="form__label" for="month">Month</label>
        <input class="form__input" type="text" id="month" v-model="month" disabled>
      </div>
      <div class="form__item">
        <label class="form__label" for="day">Day</label>
        <input class="form__input" type="text" id="day" v-model="dayOfWeek" disabled>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    isShow () {
      return this.$store.state.showPopup
    },
    month () {
      return this.$store.state.month
    },
    dayOfWeek () {
      return this.$store.state.day
    }
  },
  methods: {
    closePopup () {
      this.$store.commit('togglePopup')
    }
  }
}
</script>

<style lang="scss">
.popup {
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(200, 200, 200, 0.5);
}

.form {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  width: 420px;
  height: 140px;
  padding: 25px;
  margin: 0 auto;

  background: #ffffff;

  &__close {
    position: absolute;
    top: 0;
    right: 0;
    width: 28px;
    height: 28px;

    font-size: 28px;
    line-height: 28px;
    text-align: center;

    color: #3d3d3d;
    background: #fdd000;
    cursor: pointer;
  }

  &__item {
    display: flex;
    flex-direction: column;
  }

  &__label {
    margin-bottom: 8px;

    font-size: 20px;
    font-weight: 700;

    color: #3d3d3d;
    opacity: 0.34;
  }

  &__input {
    width: 150px;
    height: 30px;
    padding: 0 15px;

    font-size: 20px;
    font-weight: 700;

    border: 2px solid #fdd000;
  }
}
</style>
