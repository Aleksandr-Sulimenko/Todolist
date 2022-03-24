<template>
  <div class="container">
    <FilterTask :filter="filter" />
    <hr />
    <h5>Список задач</h5>
    <table v-if="filterList.length">
      <thead>
        <tr>
          <th>#</th>
          <th>Заголовок</th>
          <th>Добавлено</th>
          <th>Содержание</th>
          <th>Статус</th>
          <th>Срок</th>
          <th>Открыть</th>
          <th>Удалить</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, ind) in filterList" :key="item.id">
          <td>{{ ind + 1 }}.</td>
          <td>{{ item.name }}</td>
          <td>{{ item.dateAdd }}</td>
          <td class="size-descript">
            <div class="descript">{{ item.description }}</div>
          </td>
          <td>{{ item.status }}</td>
          <td>{{ new Date( item.dateDue ).toLocaleDateString(),}}</td>
          <td>
            <ButtonButton :title="'Открыть'" />
          </td>
          <td>
            <ButtonButton @eClick="handDelete(item)" :title="'Удалить'" />
            <!-- todo доработать метод handDelete без select -->
          </td>
        </tr>
      </tbody>
      <!-- <div class="wrapper_tasks-two">
        <div
          v-for="(item, ind) in filterList"
          v-bind:key="ind"
          @click.stop="select(item)"
          class="col s12 container_task"
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
      </div> -->
    </table>
    <p v-else>Нет задач</p>
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
  name: "TaskListTwo",
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
        return this.taskList
          .filter((item) => item.name.includes(this.filter.name))
          .slice(0, 5);
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
<style lang="scss">
.descript {
  //   max-width: 30%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-right: 10%;
}
.size-descript {
  max-width: 300px;
}
</style>
