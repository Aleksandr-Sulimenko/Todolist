<template>
  <div class="container">
    <AddNewTask />
    <!-- <FilterTask /> -->
    <TaskListTwo />
    <TaskList :taskList="taskList" />
  </div>
</template>

<script lang="ts">
// import FilterTask from "./FilterTask.vue";
import AddNewTask from "./AddNewTask.vue";
import TaskList from "./TaskList.vue";
import TaskListTwo from "./TaskListTwo.vue";
export default {
  name: "TodoList",
  components: { AddNewTask, TaskListTwo, TaskList },
  props: {},

  data() {
    return {
      taskList: [],
    };
  },

  // created() {
  //   const tasksData = localStorage.getItem("taskList");
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
  //     // localStorage.setItem("taskList", JSON.stringify(this.taskList));
  //     console.log(task);
  //   },
  // },
};
</script>
