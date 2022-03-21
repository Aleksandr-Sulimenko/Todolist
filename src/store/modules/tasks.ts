export default {
  state: {
    filter: "",
  },
  mutations: {
    newFilter(state, filterNew ){
      state.filter = filterNew 
    }
  },
  actions: {},
  getters:{
    filterTask(state) {
      return state.filter;
    }
  },
}