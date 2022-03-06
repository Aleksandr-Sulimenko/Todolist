<template>
  <div class="container">
    <add-new-task @add-task="addTask" />
    <div v-if="taskList.length">
      <dl class="wrapper_tasks">
        <div
          v-for="(item, ind) in taskList"
          v-bind:key="ind"
          @click="select(item)"
          class="container_task"
          :class="{
            'select-border': selectedTask === item,
          }"
        >
          <div class="task_name-content">
            <dt class="task-name">{{ item.name }}</dt>
            <dd class="task-content">{{ item.content }}</dd>
            <div class="type-task">{{}}</div>
            <div class="date-add">Дата добавления: {{ item.dateAdd }}</div>
            <div class="date-due">Датавыполнения: {{ item.dateDue }}</div>
          </div>
        </div>
      </dl>
      <hr />
    </div>
    <selected-task @click="closeTask" v-if="this.selectedTask" />
  </div>
</template>

<script lang="ts">
// import ButtonButton from "./ButtonButton.vue";
import AddNewTask from "./AddNewTask.vue";
import SelectedTask from "./SelectedTask.vue";

export default {
  components: { SelectedTask, AddNewTask },
  name: "Main",
  props: {
    name: String,
    content: String,
    dateAdd: String,
    dateDue: String,
  },

  data() {
    return {
      // showModal: false,
      selectedTask: false,
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
    closeTask() {
      return (this.selectedTask = null);
    },

    select(task) {
      // console.log(task);

      // console.log(SelectedTask);
      this.selectedTask = task;
      // this.$emit(this.selectedTask);
      console.log(this.selectedTask.name, this.selectedTask.content);
    },

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
    },
  },
};
</script>

<style src="../app.scss" lang="scss"></style>
