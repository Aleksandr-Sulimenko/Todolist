<template>
  <tr>
    <td>{{ ind + 1 }}.</td>
    <td>{{ item.name }}</td>
    <td>{{ item.dateAdd }}</td>
    <td class="size-descript">
      <div class="descript">{{ item.description }}</div>
    </td>
    <td :class="item.status">
      {{ item.status }}
    </td>
    <td>
      {{ new Date(item.dateDue).toLocaleDateString() }}
    </td>
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
    <ModalDelete
      v-if="hideModalMini"
      @eClick="closeModalMini"
      @eeClick="handleDelete(item)"
    />
  </tr>
</template>
<script lang="ts">
import ModalDelete from "./ModalDelete.vue";
import ButtonButton from "./ButtonButton.vue";
import { mapGetters } from "vuex";
export default {
  components: { ButtonButton, ModalDelete },
  name: "TaskTable",
  props: {
    item: {},
    ind: Number,
  },
  data() {
    return {
      hideModalMini: false,
    };
  },
  async mounted() {
    this.statusTask();
    setTimeout(this.statusTask, this.outdateIndex);
    // console.log(this.statusTask, this.outdateIndex);
  },
  computed: {
    outdateIndex() {
      return +new Date(this.item.dateDue) - this.item.id;
    },
    ...mapGetters(["taskList"]),

    // statusTask() {
    //   return new Date(this.item.dateDue) > new Date() ? "active" : "outdated";
    // },
  },

  methods: {
    statusTask() {
      this.item.status =
        new Date(this.item.dateDue) > new Date() ? "active" : "outdated";

      // setTimeout(() => {
      //   this.item.status =
      //     new Date(this.item.dateDue) > new Date() ? "active" : "outdated";
      // }, this.outdateIndex);
    },
    openModalMini() {
      console.log(this.outdateIndex, this.item);
      this.hideModalMini = true;
    },
    closeModalMini() {
      this.hideModalMini = false;
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
