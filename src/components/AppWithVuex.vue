<template>
  <div class="app-menu">
    <h2>With vuex</h2>
    <div v-if="error" class="app-menu__error">{{ error }}</div>
    <div class="app-menu__filters filters">
      <div class="filters__item filter">
        <input
          id="price"
          type="number"
          class="filter__input"
          min="0"
          :value.prop="price"
          @input="setPriceDebounced($event.target.value)"
        />
        <label
          htmlFor="price"
          class="filter__label"
        >
          Цена: {{ price }}
        </label>
      </div>
      <div class="filters__item filter">
        <input
          id="amount"
          type="number"
          class="filter__input"
          min="0"
          :value.prop="amount"
          @input="setAmountDebounced($event.target.value)"
        />
        <label
          htmlFor="amount"
          class="filter__label"
        >
          Кол-во: {{ amount }}
        </label>
      </div>
      <div class="filters__item filter">
        <input
          id="sum"
          type="number"
          class="filter__input"
          min="0"
          :value.prop="sum"
          @input="setSumDebounced($event.target.value)"
        />
        <label
          htmlFor="sum"
          class="filter__label"
        >
          Сумма: {{ sum }}
        </label>
      </div>
      <div class="filters__item filter">
        <button
          @click="onSaveData"
          :disabled="saving"
          class="filters__btn"
        >
          Отправить
        </button>
        <div class="filters__data">
          Local Storage:
          <pre>{{ lsForm }}</pre>
        </div>
      </div>
    </div>
    <div class="app-menu__events events">
      <h3>События</h3>
      <div v-for="event in events" :key="event.time" class="events__item event">
        Создано: {{ new Date(event.time).toLocaleString() }} <br>
        Тип: {{ event.type }} {{ event.data?.name }} <br>
        <template v-if="event.data">
          Payload:
          <pre>{{ event.data }}</pre>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import { DEBOUNCE_DELAY } from '@/const/debounce';

import { debounce } from '@/utils/debounce';
import { getForm } from '@/api';

export default {
  name: 'AppMenu',
  components: {},
  data: () => ({
    lsForm: '{}',
  }),
  computed: mapGetters({
    error: 'error',
    saving: 'saving',
    events: 'sortedEvents',
    price: 'price',
    amount: 'amount',
    sum: 'sum',
  }),
  created() {
    this.setPriceDebounced = debounce(this.setPrice, DEBOUNCE_DELAY);
    this.setAmountDebounced = debounce(this.setAmount, DEBOUNCE_DELAY);
    this.setSumDebounced = debounce(this.setSum, DEBOUNCE_DELAY);
  },
  methods: {
    ...mapActions({
      saveData: 'saveData',
      setPrice: 'setPrice',
      setAmount: 'setAmount',
      setSum: 'setSum',
    }),
    async onSaveData() {
      await this.saveData();
      await this.updateLsData();
    },
    async updateLsData() {
      const result = await getForm();
      this.lsForm = JSON.stringify(result, null, 4);
    },
  },
};
</script>

<style lang="scss" scoped>
.app-menu {
  font-size: 1.4rem;

  &__filters {
    display: flex;
    gap: 10px;
  }

  &__error {
    color: #8e0b0d;
  }

  .filters {
    &__btn {
      padding: 5px 10px;
      background-color: transparent;
      border: 1px solid #000;

      &:hover:not(:disabled) {
        cursor: pointer;
      }
    }

    &__data {

    }

    .filter {
      display: flex;
      flex-direction: column;

      &__input {
        padding: 5px 10px;

        border: 0.1rem solid #000;
      }

      &__label {

      }
    }
  }
}
</style>
