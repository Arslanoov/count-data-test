<template>
  <div class="app-menu">
    <h2>Without vuex</h2>
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
      <div v-for="event in sortedEvents" :key="event.time" class="events__item event">
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
import { DEBOUNCE_DELAY } from '@/const/debounce';
import { debounce } from '@/utils/debounce';
import { getForm, saveForm } from '@/api';
import {
  createEvent,
  EVENT_TYPE_INPUT_CHANGE,
  EVENT_TYPE_SUBMIT,
  EVENT_TYPE_SUBMIT_RESPONSE,
} from '@/utils/event';
import { getPositiveValue, roundNum } from '@/utils/num';

export default {
  name: 'AppMenu',
  components: {},
  data: () => ({
    lsForm: '{}',
    price: 0,
    amount: 0,
    sum: 0,
    error: null,
    saving: false,
    events: [],
  }),
  computed: {
    sortedEvents() {
      return [...this.events].sort((a, b) => b.time - a.time);
    },
  },
  created() {
    this.setPriceDebounced = debounce(this.setPrice, DEBOUNCE_DELAY);
    this.setAmountDebounced = debounce(this.setAmount, DEBOUNCE_DELAY);
    this.setSumDebounced = debounce(this.setSum, DEBOUNCE_DELAY);
  },
  methods: {
    async onSaveData() {
      await this.saveData();
      await this.updateLsData();
    },
    async updateLsData() {
      const result = await getForm();
      this.lsForm = JSON.stringify(result, null, 4);
    },
    async saveData() {
      this.error = null;
      this.saving = true;

      this.events.push(createEvent(EVENT_TYPE_SUBMIT, {
        form: {
          price: this.price,
          amount: this.amount,
          sum: this.sum,
        },
        lsStorage: JSON.parse(sessionStorage.getItem('form')),
      }));

      const response = await saveForm({
        price: this.price,
        amount: this.amount,
        sum: this.sum,
      });

      if (!response.success) {
        this.error = response.message;
      }

      this.events.push(createEvent(EVENT_TYPE_SUBMIT_RESPONSE, {
        response,
        lsStorage: JSON.parse(sessionStorage.getItem('form')),
      }));

      this.saving = false;
    },
    setPrice(price) {
      this.events.push(createEvent(EVENT_TYPE_INPUT_CHANGE, {
        name: 'price',
      }));

      const positivePrice = getPositiveValue(price);
      this.price = positivePrice;

      if (positivePrice === 0) {
        this.price = 0;
        return;
      }

      this.sum = roundNum(positivePrice * this.amount);
    },
    setAmount(amount) {
      this.events.push(createEvent(EVENT_TYPE_INPUT_CHANGE, {
        name: 'amount',
      }));

      const positiveAmount = getPositiveValue(amount);

      this.amount = positiveAmount;
      this.sum = roundNum(this.price * positiveAmount);
    },
    setSum(sum) {
      this.events.push(createEvent(EVENT_TYPE_INPUT_CHANGE, {
        name: 'sum',
      }));

      const positiveSum = getPositiveValue(sum);
      this.sum = roundNum(positiveSum);

      if (this.price === 0 && this.amount === 0) {
        this.sum = 0;
        return;
      }

      if (this.price === 0) {
        this.price = positiveSum / roundNum(this.amount);
        return;
      }

      const computedAmount = positiveSum / this.price;
      if (Number.isInteger(computedAmount)) {
        this.amount = computedAmount;
      } else {
        const roundedAmount = Math.floor(computedAmount);
        if (roundedAmount === 0) {
          this.amount = 0;
          this.sum = 0;
          return;
        }

        this.amount = roundedAmount;
        this.price = roundNum(positiveSum / roundedAmount);
      }
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
    }
  }
}
</style>
