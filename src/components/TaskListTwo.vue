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
            <router-link
              teg="button"
              class="btn-small"
              :to="'/task/' + item.id"
              active-class="activ"
            >
              Открыть
            </router-link>
          </td>
          <td>
            <ButtonButton
              class="btn-small"
              @eClick="handleDelete(item)"
              :title="'Удалить'"
              :color="'Delete'"
            />
            <!-- todo доработать метод handDelete без select -->
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>Нет задач</p>
    <!-- <SelectedTask
      @eclick="closeTask"
      :task="selectedTask"
      v-if="Object.keys(selectedTask).length"
    /> -->
  </div>
</template>

<script lang="ts">
import FilterTask from "./FilterTask.vue";
import ButtonButton from "./ButtonButton.vue";
// import SelectedTask from "./SelectedTask.vue";
import { mapGetters } from "vuex";
// import { filter } from "vue/types/umd";
export default {
  components: { ButtonButton, FilterTask },
  name: "TaskListTwo",
  props: {
    // taskList: [],
    type: String,
  },

  data() {
    return {
      // selectedTask: {},
      filter: { name: "" },
    };
  },
  computed: {
    ...mapGetters(["taskList"]),
    // ...mapGetters(["deleteTask"]),

    filterList() {
      // console.log(this.taskList);
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

    handleDelete(item) {
      const index = this.taskList.indexOf(item);
      this.$store.dispatch("deleteTask", index);

      //this.store.getters.taskById(+this.$route.params.id);
      // this.taskList.push([...this.taskList]);

      // if (this.selectedTask) {
      //   this.selectedTask = {};
      // }
    },

    // closeTask() {
    //   // console.log(this.selectedTask);
    //   this.selectedTask = {};
    // },
    // select(task) {
    //   this.selectedTask = task;
    // },
  },
  // watch: {
  //   filter() {
  //     console.log(this.filter);
  //   },
  // },
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
