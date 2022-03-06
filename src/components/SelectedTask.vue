<template>
  <div class="selected_task">
    <div class="task-name">{{ task.name }}</div>
    <div class="task-content task-M_content">{{ task.content }}</div>
    <div class="date-add">Дата добавления: {{ task.description }}</div>
    <div class="date-due">Датавыполнения:</div>
    <button-button
      v-on:added-task="closeTask"
      class="button-close"
      :title="'Закрыть'"
      :type="'Close'"
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
