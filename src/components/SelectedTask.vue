<template>
  <div class="selected_task">
    <div class="task-name">{{ task.name }}</div>
    <div class="task-description task-M_content">{{ task.description }}</div>
    <div class="date-add">Дата добавления: {{ task.dateAdd }}</div>
    <div class="date-due">Дата выполнения: {{ task.dateDue }}</div>
    <button-button
      v-on:added-task="closeTask"
      class="button button-modal"
      :title="'Закрыть'"
    />
  </div>
</template>

<script lang="ts">
import ButtonButton from "./ButtonButton.vue";

export default {
  components: { ButtonButton },
  name: "SelectedTask",
  props: {
    task: {},
  },
  methods: {
    closeTask() {
      this.$emit("click");
    },
  },
};
</script>
