<template>
  <div class="container">
    <AddNewTask @add-task="addTask" />
    <hr />
    <!-- <FilterTask /> -->
    <CardList :taskList="taskList" />
  </div>
</template>

<script lang="ts">
// import FilterTask from "./FilterTask.vue";
import AddNewTask from "./AddNewTask.vue";
import CardList from "./CardList.vue";

export default {
  name: "TodoList",
  components: { CardList, AddNewTask },
  props: {},

  data() {
    return {
      taskList: [],
    };
  },

  created() {
    const tasksData = localStorage.getItem("todo-list");
    if (tasksData) {
      // this.taskList = [...this.taskList, ...JSON.parse(tasksData)];
      this.taskList = JSON.parse(tasksData);
    }
    // localStorage.clear();
  },
  computed: {},

  methods: {
    addTask(task) {
      this.taskList.push({ ...this.taskList, ...task });
      localStorage.setItem("todo-list", JSON.stringify(this.taskList));
      // console.log(this.taskList);
    },
  },
};
</script>
