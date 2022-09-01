import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      if_large: true,
      if_small: false
    }
  },
  mutations: {
    setSize(state, payload) {
      state.if_large = payload.if_lage;
      state.if_small = payload.if_small;

    },
  },

})