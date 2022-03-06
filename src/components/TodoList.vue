<template>
  <div class="container">
    <AddNewTask @add-task="addTask" />
    <hr />
    <CardList :taskList="taskList" />
  </div>
</template>

<script lang="ts">
import AddNewTask from "./AddNewTask.vue";
import CardList from "./CardList.vue";

export default {
  name: "TodoList",
  components: { CardList, AddNewTask },
  //   props: {
  //     task: {
  //       name: "this.selectedTask.name",
  //       content: "selectedTask.content",
  //       dateAdd: new Date().toLocaleString(),
  //       dateDue: "",
  //     },
  //   },

  data() {
    return {
      // showModal: false,
      // selectedTask: false,
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
    // localStorage.clear();
  },

  methods: {
    // closeTask() {
    //   return (this.selectedTask = null);
    // },

    // select(task) {
    //   // console.log(task);

    //   // console.log(SelectedTask);
    //   this.selectedTask = task;
    //   // this.$emit(this.selectedTask);
    //   console.log(this.selectedTask.name, this.selectedTask.content);
    // },

    // openModal() {
    //   this.showModal = true;
    // },
    // closeModal() {
    //   this.showModal = false;
    // },

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
