<template>
  <div class="container">
    <AddNewTask />
    <!-- <FilterTask /> -->
    <TaskList :taskList="taskList" />
  </div>
</template>

<script lang="ts">
// import FilterTask from "./FilterTask.vue";
import AddNewTask from "./AddNewTask.vue";
import TaskList from "./TaskList.vue";

export default {
  name: "TodoList",
  components: { TaskList, AddNewTask },
  props: {},

  data() {
    return {
      taskList: [],
    };
  },

  // created() {
  //   const tasksData = localStorage.getItem("todo-list");
  //   if (tasksData) {
  //     // this.taskList = [...this.taskList, ...JSON.parse(tasksData)];
  //     this.taskList = JSON.parse(tasksData);
  //   }
  //   // localStorage.clear();
  // },
  computed: {},

  // methods: {
  //   addTask(task) {
  //     // this.taskList.push({ ...this.taskList, ...task });
  //     // localStorage.setItem("todo-list", JSON.stringify(this.taskList));
  //     console.log(task);
  //   },
  // },
};
</script>
