<template>
  <div class="app-menu">
    <div class="app-menu__filters filters">
      <div class="filters__item filter">
        <input
          id="price"
          type="text"
          class="filter__input"
        />
        <label
          htmlFor="price"
          class="filter__label"
        >
          Цена
        </label>
      </div>
      <div class="filters__item filter">
        <input
          id="price"
          type="text"
          class="filter__input"
        />
        <label
          htmlFor="price"
          class="filter__label"
        >
          Кол-во
        </label>
      </div>
      <div class="filters__item filter">
        <input
          id="price"
          type="text"
          class="filter__input"
        />
        <label
          htmlFor="price"
          class="filter__label"
        >
          Сумма
        </label>
      </div>
      <div class="filters__item filter">
        <button>Отправить</button>
        <div>{json}</div>
      </div>
    </div>
    <div class="app-menu__content content">

    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMenu',
  components: {},
};
</script>

<style lang="scss" scoped>
.app-menu {
  font-size: 1.4rem;

  &__filters.filters {
    display: flex;
    gap: 10px;

    .filter {
      display: flex;
      flex-direction: column;

      &__input {
        border: 0.1rem solid #000;
      }

      &__label {

      }
    }
  }
}
</style>
