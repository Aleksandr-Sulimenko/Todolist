<template>
  <div class="selected_task">
    <div class="task-name">{ }</div>
    <div class="task-content task-M_content">P</div>
    <div class="date-add">Дата добавления:</div>
    <div class="date-due">Датавыполнения:</div>
    <button-button
      v-on:added-task="closeTask"
      class="button-close"
      :title="titleDelete"
    />
  </div>
</template>
<script lang="ts">
import ButtonButton from "./ButtonButton.vue";
// import Main from "./Main.vue";
export default {
  components: { ButtonButton },
  name: "SelectedTask",
  props: {
    name: String,
    content: String,
    dateAdd: String,
    dateDue: String,
    titleDelete: {
      default: "close",
    },
  },
  data() {
    return {
      selectedTask: null,
    };
  },
  methods: {
    closeTask() {
      // console.log(selectedTask);
      this.selectedTask = this.task;
      console.log(this.selectedTask);

      this.$emit("click");
    },
  },
};
</script>
<style src="../app.scss" lang="scss"></style>
