<template>
  <div class="container-modalMini">
    <div class="modal-windowMini">
      <div class="content-windowMini">
        <div class="modal-header"><h4>Удалить задачу?</h4></div>
        <div class="">
          <ButtonButton
            class="btn buttons-modal"
            @eClick="closeModalMini"
            :title="'Отмена'"
          />
          <ButtonButton
            class="btn"
            @eClick="handleDelete"
            :title="'Удалить'"
            :color="'Delete'"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import ButtonButton from "./ButtonButton.vue";
export default {
  components: { ButtonButton },
  //   props: {
  //     hideModalMini: Boolean,
  //   },
  methods: {
    closeModalMini() {
      this.$emit("eClick");
      // this.hideModalMini = false;
    },

    handleDelete() {
      this.$emit("eeClick");
      //    const index = this.taskList.indexOf(item);
      //    this.$store.dispatch("deleteTask", index);
      //  },
    },
  },
};
</script>
