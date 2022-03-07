<template>
  <div class="container">
    <div v-if="taskList.length">
      <div class="wrapper_tasks">
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
            <div class="button_conteiner">
              <p></p>
              <ButtonButton
                :title="''"
                :color="'Delete'"
                :type="'Close'"
                class="button-delete"
              />
            </div>
            <div class="conteiner_content">
              <div class="task-name">{{ item.name }}</div>
              <div class="task-description">{{ item.description }}</div>
              <div class="type-task">{{}}</div>
              <div class="date-added">Дата добавления: {{ item.dateAdd }}</div>
              <div class="date-due">Дата выполнения: {{ item.dateDue }}</div>
            </div>
          </div>
        </div>
      </div>
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
import ButtonButton from "./ButtonButton.vue";
import SelectedTask from "./SelectedTask.vue";
export default {
  components: { SelectedTask, ButtonButton },
  name: "Main",
  props: {
    taskList: [],
    type: String,
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
