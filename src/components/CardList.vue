<template>
  <div class="container">
    <FilterTask @Filter="filterList" />
    <hr />
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
              <hr v-if="item.description.length" />
              <div v-if="item.description.length" class="task-description">
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
export default {
  components: { SelectedTask, ButtonButton, FilterTask },
  name: "CardList",
  props: {
    taskList: [],
    type: String,
    // filter: String,
  },

  data() {
    return {
      selectedTask: {},
      filter: "eee",
    };
  },
  computed: {},

  methods: {
    filterList(filter) {
      // console.log(this.taskList);
      alert(filter);

      return this.taskList.filter((item) => item.name.includes(filter));
      // console.log(this.taskList);
    },

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
