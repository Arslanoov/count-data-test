import Vue from 'vue';
import Vuex from 'vuex';

import { saveForm } from '@/api';
import { getPositiveValue, roundNum } from '@/utils/num';
import {
  createEvent,
  EVENT_TYPE_INPUT_CHANGE,
  EVENT_TYPE_SUBMIT,
  EVENT_TYPE_SUBMIT_RESPONSE,
} from '@/utils/event';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    price: 0,
    amount: 0,
    sum: 0,
    error: null,
    saving: false,
    events: [],
  },
  getters: {
    hasError: (state) => !!state.error,
    error: (state) => state.error,
    price: (state) => state.price,
    amount: (state) => state.amount,
    sum: (state) => state.sum,
    saving: (state) => state.saving,
    sortedEvents: (state) => state.events.sort((a, b) => b.time - a.time),
  },
  mutations: {
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    },
    addEvent(state, payload) {
      state.events.push(payload);
    },
    startSaving(state) {
      state.saving = true;
    },
    stopSaving(state) {
      state.saving = false;
    },
    setPrice(state, payload) {
      state.price = payload;
    },
    setAmount(state, payload) {
      state.amount = payload;
    },
    setSum(state, payload) {
      state.sum = payload;
    },
  },
  actions: {
    async saveData({ commit, getters }) {
      commit('clearError');

      commit('startSaving');

      commit('addEvent', createEvent(EVENT_TYPE_SUBMIT, {
        form: {
          price: getters.price,
          amount: getters.amount,
          sum: getters.sum,
        },
        lsStorage: JSON.parse(sessionStorage.getItem('form')),
      }));

      const response = await saveForm({
        price: getters.price,
        amount: getters.amount,
        sum: getters.sum,
      });

      if (!response.success) {
        commit('setError', response.message);
      }

      commit('addEvent', createEvent(EVENT_TYPE_SUBMIT_RESPONSE, {
        response,
        lsStorage: JSON.parse(sessionStorage.getItem('form')),
      }));

      commit('stopSaving');
    },

    setPrice({ commit, getters }, payload) {
      commit('addEvent', createEvent(EVENT_TYPE_INPUT_CHANGE, {
        name: 'price',
      }));

      const price = getPositiveValue(payload);
      commit('setPrice', payload);

      if (price === 0) {
        commit('setSum', 0);
        return;
      }

      commit('setSum', roundNum(price * getters.amount));
    },
    setAmount({ commit, getters }, payload) {
      commit('addEvent', createEvent(EVENT_TYPE_INPUT_CHANGE, {
        name: 'amount',
      }));

      const amount = getPositiveValue(payload);

      commit('setAmount', payload);
      commit('setSum', roundNum(getters.price * amount));
    },
    setSum({ commit, getters }, payload) {
      commit('addEvent', createEvent(EVENT_TYPE_INPUT_CHANGE, {
        name: 'sum',
      }));

      const sum = getPositiveValue(payload);
      commit('setSum', roundNum(sum));

      if (getters.price === 0 && getters.amount === 0) {
        commit('setSum', 0);
        return;
      }

      if (getters.price === 0) {
        const newPrice = sum / roundNum(getters.amount);
        commit('setPrice', newPrice);
        return;
      }

      const computedAmount = sum / getters.price;
      if (Number.isInteger(computedAmount)) {
        commit('setAmount', computedAmount);
      } else {
        const roundedAmount = Math.floor(computedAmount);
        if (roundedAmount === 0) {
          commit('setAmount', 0);
          commit('setSum', 0);
          return;
        }

        commit('setAmount', roundedAmount);
        commit('setPrice', roundNum(sum / roundedAmount));
      }
    },
  },
});
