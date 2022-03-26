<template>
  <div class="container">
    <AddNewTask />
    <TaskListTwo />
    <TaskList :taskList="taskList" />
  </div>
</template>

<script lang="ts">
import AddNewTask from "./AddNewTask.vue";
import TaskList from "./TaskList.vue";
import TaskListTwo from "./TaskListTwo.vue";
export default {
  name: "TodoList",
  // components: { AddNewTask, TaskListTwo },
  components: { AddNewTask, TaskListTwo, TaskList },
  props: {},

  data() {
    return {
      taskList: [],
    };
  },
};
</script>
