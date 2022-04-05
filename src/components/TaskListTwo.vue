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
        <TaskTbl
          :item="item"
          :ind="ind"
          v-for="(item, ind) in filterList"
          :key="item.id"
        />
      </tbody>
    </table>
    <p v-else>Нет задач</p>
  </div>
</template>

<script lang="ts">
import TaskTbl from "./TaskTbl.vue";
import FilterTask from "./FilterTask.vue";
import { mapGetters } from "vuex";
export default {
  components: { TaskTbl, FilterTask },
  name: "TaskListTwo",
  props: {
    type: String,
  },

  data() {
    return {
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
};
</script>
<style lang="scss">
.descript {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-right: 10%;
}
.size-descript {
  max-width: 250px;
}
</style>
