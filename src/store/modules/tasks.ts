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
    updateStatus(state,{id, dateDue}){
      const taskList = state.taskList.concat()
      const ind = taskList.findIndex(t => t.id === id)
      const task = taskList[ind]
      const status = new Date(dateDue) > new Date() ? "active" : "outdated"
      taskList[ind] = {...task, status}
      // debugger
      state.taskList = taskList;
      localStorage.setItem("taskList", JSON.stringify(state.taskList));
    }
  },
  actions: {
    newTask({ commit }, task) {
      commit("newTask", task);
    },
    updateStatus({commit}, task){
      commit("updateStatus",task)
    },
    deleteTask({ commit }, removeTask) {
      commit("deleteTask", removeTask);
    },
  },
  getters: {
    taskList(state) {
      return state.taskList;
    },
    deleteTask(state) {
      return state.taskList
    },


    taskById: (state) => (id) => state.taskList.find((task) => task.id === id),


  },
};
