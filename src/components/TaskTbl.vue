<template>
  <tr>
    <td>{{ ind + 1 }}.</td>
    <td>{{ item.name }}</td>
    <td>{{ item.dateAdd }}</td>
    <td class="size-descript">
      <div class="descript">{{ item.description }}</div>
    </td>
    <td class="active">{{ item.status }}</td>
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
        @eClick="openModalMini"
        :title="'Удалить'"
        :color="'Delete'"
      />
    </td>
    <div v-if="modalDeleteTask" class="container-modalMini">
      <div class="modal-windowMini">
        <div class="content-windowMini">
          <div class="modal-header">Удалить задачу?</div>
          <div class="">
            <ButtonButton
              class="btn-small buttons-modal"
              @eClick="closeModalMini"
              :title="'Отмена'"
            />
            <ButtonButton
              class="btn-small"
              @eClick="handleDelete(item)"
              :title="'Удалить'"
              :color="'Delete'"
            />
          </div>
        </div>
      </div>
    </div>
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
  data() {
    return {
      modalDeleteTask: false,
    };
  },
  computed: {
    ...mapGetters(["taskList"]),
  },
  methods: {
    openModalMini() {
      this.modalDeleteTask = true;
    },
    closeModalMini() {
      this.modalDeleteTask = false;
    },
    handleDelete(item) {
      const index = this.taskList.indexOf(item);
      this.$store.dispatch("deleteTask", index);
    },
  },
};
</script>
<style lang="scss">
.buttons-modal {
  margin-right: 50px;
}
</style>
