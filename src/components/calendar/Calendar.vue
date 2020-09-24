<template>
  <div class="calendar">
    <Popup />
    <header class="calendar__header">
      <div class="calendar__left-arrow" @click="getPrevMonth"></div>
      <h2 class="calendar__title">{{ month }} {{ year }}</h2>
      <div class="calendar__right-arrow" @click="getNextMonth"></div>
    </header>
    <main class="calendar__main">
      <div
        class="calendar__dates"
        v-for="(d, index) in dates"
        :key="index"
        :class="{ active: d.isActive }"
        :tabindex="d.isActive ? 0 : ''"
        @click="openPopup(d.isActive, d.date, index % 7)"
        >{{ d.date }}</div>
    </main>
    <footer class="calendar__footer">
      <div class="calendar__days" v-for="(d, index) in days" :key="index">{{ d }}</div>
    </footer>
  </div>
</template>

<script>
import Popup from './Popup'
export default {
  components: {
    Popup
  },
  data: () => {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
      dates: [],
      days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      months: [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
      ]
    }
  },
  computed: {
    date () {
      return new Date(this.currentYear, this.currentMonth)
    },
    month () {
      return this.months[this.date.getMonth()]
    },
    year () {
      return this.date.getFullYear()
    },
    firstDay () {
      return this.date.getDay()
    }
  },
  methods: {
    openPopup (bool, num, index) {
      if (bool) {
        this.$store.commit('updateMonth', this.month)
        this.$store.commit('updateDay', { num, index })
        this.$store.commit('togglePopup')
      }
    },
    day (d) {
      return new Date(this.currentYear, this.currentMonth, d)
    },
    fillCalendar () {
      this.dates = []
      let dayOfWeek = this.firstDay
      let lastDayInMonth = 0
      for (let i = 0; i <= this.firstDay - 1; i++) {
        this.dates[i] = {
          date: this.day(1 - dayOfWeek).getDate(),
          isActive: false
        }
        dayOfWeek--
      }
      for (let i = this.firstDay; i < 42; i++) {
        this.dates[i] = {
          date: this.day(i - this.firstDay + 1).getDate(),
          isActive: lastDayInMonth < this.day(i - this.firstDay + 1).getDate()
        }
        if (lastDayInMonth < this.dates[i].date) {
          lastDayInMonth++
        }
      }
    },
    getNextMonth () {
      this.currentMonth++
      this.fillCalendar()
    },
    getPrevMonth () {
      this.currentMonth--
      this.fillCalendar()
    }
  },
  created () {
    this.fillCalendar()
  }
}
</script>

<style lang="scss">
  .calendar {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 467px;
    height: 490px;
    box-sizing: border-box;

    color: #ffffff;

    &__left-arrow,
    &__right-arrow {
      width: 10px;
      height: 10px;

      border-left: 3px solid #cccccc;
      border-top: 3px solid #cccccc;

      cursor: pointer;
    }

    &__left-arrow {
      transform: rotate(-0.125turn);
    }

    &__right-arrow {
      transform: rotate(0.375turn);
    }

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 10px;

      border-bottom: 2px solid #cccccc;
    }

    &__title {
      font-size: 19px;
      font-weight: 500;
      text-transform: uppercase;

      color: #cccccc;
    }

    &__main {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: repeat(6, 1fr);
      justify-content: space-between;
      margin: 26px 0 22px;
      text-align: center;
    }

    &__dates {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 52px;
      height: 52px;
      justify-self: center;

      font-size: 16px;
      opacity: 0.4;
      cursor: pointer;

      &:hover {
        background: #fdd000;
      }

      &:focus {
        color: #fdd000;
        outline: none;
      }
    }

    &__footer {
      display: flex;
      justify-content: space-around;
      padding: 20px 2px;

      border-bottom: 1px solid #ffffff;
      border-top: 1px solid #ffffff;
    }

    &__days {
      font-size: 20px;
      font-weight: 500;
      line-height: 1.2;

      color: #ffffff;
    }
  }
  .active {
    opacity: 1;
  }

  @media (max-width: 576px) {
    .calendar__dates {
      width: 30px;
      height: 40px;
    }
  }
</style>
