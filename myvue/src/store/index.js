import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as actions from './action'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
	count: "0",
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})
