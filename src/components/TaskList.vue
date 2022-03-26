<template>
  <div class="container">
    <FilterTask :filter="filter" />
    <hr />
    <h5>Список задач</h5>
    <div v-if="filterList.length">
      <div class="wrapper_tasks">
        <div
          v-for="(item, ind) in filterList"
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
                @eClick="hendleDelete(item)"
                :title="''"
                :color="'Delete'"
                :type="'Close'"
                class="button-delete"
              />
            </div>
            <div class="conteiner_content">
              <div class="task-name">{{ item.name }}</div>
              <hr v-if="item.description" />
              <div v-if="item.description" class="task-description">
                {{ item.description }}
              </div>
              <hr />
              <div class="type-task">Тип: {{ item.typeTask }}</div>
              <div class="type-task">Приоритет: {{ item.priorityTask }}</div>
              <hr />
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
import FilterTask from "./FilterTask.vue";
import ButtonButton from "./ButtonButton.vue";
import SelectedTask from "./SelectedTask.vue";
import { mapGetters } from "vuex";
// import { filter } from "vue/types/umd";
export default {
  components: { SelectedTask, ButtonButton, FilterTask },
  name: "TaskList",
  props: {
    type: String,
  },

  data() {
    return {
      selectedTask: {},
      filter: { name: "" },
    };
  },
  computed: {
    ...mapGetters(["taskList"]),

    filterList() {
      if (this.filter.name.length >= 3) {
        return this.taskList
          .filter((item) => item.name.includes(this.filter.name))
          .slice(0, 5);
      }
      return this.taskList;
    },
  },

  methods: {
    hendleDelete(item) {
      const index = this.taskList.indexOf(item);
      this.$store.dispatch("deleteTask", index);

      if (this.selectedTask) {
        this.selectedTask = {};
      }
    },

    closeTask() {
      this.selectedTask = {};
    },
    select(task) {
      this.selectedTask = task;
    },
  },
};
</script>
