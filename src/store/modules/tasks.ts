export default {
  state: {
    filter: "",
    taskList: JSON.parse(localStorage.getItem("todo-list")),
  },
  mutations: {
    newTask(state, task) {
      state.taskList.push(task);
      localStorage.setItem("todo-list", JSON.stringify(state.taskList));
      // console.log(state.taskList);
    },

    deleteTask(state, taskRemove) {
      state.taskList = state.taskList.filter((item) => item !== taskRemove);
      localStorage.setItem("todo-list", JSON.stringify(state.taskList));
    },
    // newFilter(state, filterNew ){
    //   state.filter = filterNew
    // }
  },
  actions: {
    newTask({ commit }, task) {
      commit("newTask", task);
      // console.log(task);
    },
    deleteTask({ commit }, removeTask) {
      commit("deleteTask", removeTask);
    },
  },
  getters: {
    taskList(state) {
      // console.log(state.taskList);
      return state.taskList;
    },
    deleteTask(state) {
      return state.taskList;
    },
    filterTask(state) {
      console.log(state.filter);
      return state.filter;
    },
  },
};
