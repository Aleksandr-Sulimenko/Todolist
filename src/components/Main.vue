<template>
  <div class="container">
    <add-new-task @add-task="addTask" />
    <div v-if="taskList.length">
      <dl class="wrapper_tasks">
        <div
          v-for="(item, ind) in taskList"
          v-bind:key="ind"
          class="container_task"
        >
          <div class="task_name-content">
            <dt class="task-name">{{ item.name }}</dt>
            <dd class="task-content">{{ item.content }}</dd>
            <div class="type-task">??? {{}}</div>
            <div class="date-add">Дата добавления: {{ item.dateAdd }}</div>
            <div class="date-due">Датавыполнения: {{ item.dateDue }}</div>
          </div>
        </div>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import AddNewTask from "./AddNewTask.vue";

export default {
  components: { AddNewTask },
  name: "Main",

  data() {
    return {
      // showModal: false,
      taskList: [],
      // task: {
      //   name: "",
      //   content: "",
      //   dateAdd: new Date().toLocaleString(),
      //   dateDue: "",
      // },
    };
  },

  created() {
    const tasksData = localStorage.getItem("todo-list");
    if (tasksData) {
      // this.taskList = [...this.taskList, ...JSON.parse(tasksData)];
      this.taskList = JSON.parse(tasksData);
    }
    //  localStorage.clear();
  },

  methods: {
    openModal() {
      return (this.showModal = true);
    },
    closeModal() {
      this.showModal = false;
    },
    addTask(task) {
      this.taskList.push({ ...this.taskList, ...task });
      localStorage.setItem("todo-list", JSON.stringify(this.taskList));
      console.log(this.taskList);
      // this.showModal = false;
      // this.task = {};
    },
  },
};
</script>

<style src="../app.scss" lang="scss"></style>
