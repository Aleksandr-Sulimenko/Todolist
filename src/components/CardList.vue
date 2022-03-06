<template>
  <div class="container">
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
            <dd class="task-content">{{ item.description }}</dd>
            <div class="type-task">{{}}</div>
            <div class="date-add">Дата добавления: {{ item.dateAdd }}</div>
            <div class="date-due">Датавыполнения: {{ item.dateDue }}</div>
          </div>
        </div>
      </dl>
      <hr />
    </div>
    <SelectedTask
      @click="closeTask"
      :task="selectedTask"
      v-if="Object.keys(selectedTask).length"
    />
  </div>
</template>

<script lang="ts">
import SelectedTask from "./SelectedTask.vue";

export default {
  components: { SelectedTask },
  name: "Main",
  props: {
    taskList: [],
  },

  data() {
    return {
      selectedTask: {},
    };
  },

  methods: {
    closeTask() {
      this.selectedTask = {};
    },
    select(task) {
      this.selectedTask = task;
    },
  },
};
</script>
