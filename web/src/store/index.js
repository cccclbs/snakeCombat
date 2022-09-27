import { createStore } from 'vuex'
import ModuleUser from './user'
import MoudulePK from "./pk"
import ModuleRecord from './record'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: ModuleUser,
    pk: MoudulePK,
    record: ModuleRecord,
  }
})
