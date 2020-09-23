<template>
<div class="header">
  <div class="container">
    <div class="header__inner">

      <div class="header__logo">
        <img class="header__img-logo" src="../assets/logo.png" alt="we rdevs">
      </div>

      <div class="nav">
        <router-link class="nav__link" to="/">Home</router-link>
        <router-link class="nav__link" to="/about">About us</router-link>
      </div>

    </div>
  </div>
</div>
</template>

<style lang="scss">
  .header {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    &__logo {
      width: 165px;
      height: 50px;
    }

    &__img-logo {
      width: 100%;
      height: 100%;
    }
  }

  .nav {
    display: flex;

    &__link {
      position: relative;
      margin-left: 70px;

      font-size: 28px;
      font-weight: 500;
      line-height: 1.1;

      text-transform: uppercase;
      text-decoration: none;
      color: #3d3d3d;

      &::after {
        content: '';
        display: block;
        width: 14px;
        height: 14px;
        position: absolute;
        bottom: -15px;
        left: 50%;

        border-radius: 50%;
        background: #fdd000;
        transform: translateX(-50%);
        opacity: 0;
        transition: opacity 0.2s linear;
      }
    }
  }

  .router-link-exact-active.nav__link::after {
    opacity: 1;
  }

  @media (max-width: 992px) {
    .header {
      height: 80px;

      &__logo {
        width: 100px;
        height: 30px;
      }
    }

    .nav__link {
      font-size: 20px;
    }
  }
</style>
