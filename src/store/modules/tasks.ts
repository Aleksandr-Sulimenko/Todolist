export default {
  state: {
    taskList: JSON.parse(localStorage.getItem("taskList") || "[]"),
  },
  mutations: {
    newTask(state, task) {
      state.taskList.push(task);
      localStorage.setItem("taskList", JSON.stringify(state.taskList));
      // console.log(state.taskList);
    },

    deleteTask(state, index) {
      state.taskList.splice(index , 1)
      localStorage.setItem("taskList", JSON.stringify(state.taskList));
    },
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
      return state.taskList
    },


    taskById: (state) => (id) => state.taskList.find((task) => task.id === id),


  },
};
