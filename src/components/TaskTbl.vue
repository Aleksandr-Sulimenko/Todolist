<template>
  <tr>
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
    </td>
  </tr>
</template>
<script lang="ts">
import ButtonButton from "./ButtonButton.vue";
import { mapGetters } from "vuex";
export default {
  components: { ButtonButton },
  name: "TaskTable",
  props: {
    item: {},
    ind: Number,
  },
  computed: {
    ...mapGetters(["taskList"]),
  },
  methods: {
    handleDelete(item) {
      const index = this.taskList.indexOf(item);
      this.$store.dispatch("deleteTask", index);
    },
  },
};
</script>
