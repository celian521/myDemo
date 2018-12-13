import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
import user from './user'
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    cart,
    user
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
