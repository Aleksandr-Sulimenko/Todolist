<template>
  <div class="container">
    <FilterTask :filter="filter" />
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
      <!-- <span> КУ: {{ filterTask }}</span> -->
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
    // taskList: [],
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
    ...mapGetters(["deleteTask"]),

    filterList() {
      // console.log(this.taskList);
      // alert(filter);
      if (this.filter.name.length >= 3) {
        return this.taskList.filter((item) =>
          item.name.includes(this.filter.name)
        );
      }
      return this.taskList;
    },
  },

  methods: {
    // changeFilter(filter) {
    //   this.filter = filter;
    // },

    hendleDelete() {
      // console.log(this.taskList);
      this.$store.dispatch("deleteTask", this.selectedTask);

      //
      // this.taskList.push([...this.taskList]);

      if (this.selectedTask) {
        this.selectedTask = {};
      }
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
  watch: {
    filter() {
      console.log(this.filter);
    },
  },
};
</script>
