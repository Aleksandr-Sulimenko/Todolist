<template>
  <div class="container">
    <div v-if="taskList.length">
      <div class="wrapper_tasks">
        <div
          v-for="(item, ind) in taskList"
          v-bind:key="ind"
          @click.stop="select(item)"
          class="container_task"
          :class="{
            'select-border': selectedTask === item,
          }"
        >
          <div class="task_name-content">
            <div class="button_conteiner">
              <p></p>
              <ButtonButton
                @added-task="hendleDelete(item)"
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
      @eclick="closeTask"
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
    hendleDelete(taskRemove) {
      console.log(this.taskList);

      this.taskList = this.taskList.filter((item) => item !== taskRemove);
      localStorage.setItem("todo-list", JSON.stringify(this.taskList));
      //
      // this.taskList.push([...this.taskList]);

      // if (this.selectedTask) {
      //   this.selectedTask = {};
      // }
    },

    closeTask() {
      // console.log(this.selectedTask);
      this.selectedTask = {};
    },
    select(task) {
      // console.log(task);

      this.selectedTask = task;
    },
  },
};
</script>
