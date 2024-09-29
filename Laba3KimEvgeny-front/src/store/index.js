import { createStore } from 'vuex'
import motors from './motors';
import categories from './categories';
export default createStore({
  modules: {
    motors,
    categories,
  },
  state: {},
  mutations: {},
  actions: {},
})
