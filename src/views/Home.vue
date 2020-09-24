<template>
  <div class="home">
    <div class="home__inner">
      <section class="home__content">
        <h1 class="home__title">
          Choose the day for the meeting
        </h1>
        <div class="home__text">
          We encourage you to book your appointment online.<br> This will save you time.
        </div>
      </section>
      <section class="calendar-section">
        <Calendar />
      </section>
    </div>
  </div>
</template>

<script>
import Calendar from '../components/calendar/Calendar'

export default {
  components: {
    Calendar
  }
}
</script>

<style lang="scss">
.home {
  height: 908px;

  background: url('../assets/bg.jpg') center no-repeat;
  background-size: cover;
  background-position: 0 0;

  &__inner {
    height: 100%;
    display: flex;
  }

  &__content {
    width: 60%;
    margin-top: 192px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 33px;
    text-align: right;
  }

  &__title {
    margin-bottom: 44px;
    width: 520px;

    font-size: 50px;
    font-weight: 700;
    letter-spacing: 3.5px;
    text-transform: uppercase;

    color: #fdd000;
  }

  &__text {
    width: 460px;
    font-size: 30px;
    font-weight: 300;
    line-height: 1.33;
    letter-spacing: 0.6px;

    color: #dfdfdf;
    opacity: 0.67;
  }
}

.calendar-section {
  width: 40%;
  box-sizing: border-box;
  padding: 192px 20px 0;
  background: #272829;
}

@media (max-width: 992px) {
  .home {
    height: auto;

    &__inner {
      flex-direction: column;
    }

    &__content {
      margin: 50px auto;
      padding-right: 0;
      width: 100%;
      align-items: center;
    }

    &__title {
      width: 400px;
      font-size: 36px;
    }

    &__text {
      width: 400px;
      font-size: 24px;
    }
  }

  .calendar-section {
    width: 100%;
    padding: 50px 0;
  }
}

@media (max-width: 768px) {
  .home__title {
    width: 320px;
    font-size: 30px;
  }

  .home__text {
    width: 300px;
    font-size: 22px;
  }
}
</style>
