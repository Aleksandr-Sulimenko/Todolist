<template>
  <div class="container row bg-color">
    <form class="inline input-field col s6">
      <input id="idFilter" v-model="filter" type="text" />
      <label for="idFilter"> Фильтр</label>
      <span class="helper-text">{{ filter }}</span>
    </form>
  </div>
</template>
<script lang="ts">
import { mapGetters } from "vuex";
export default {
  name: "FilterTask",
  //   props: {
  //     taskList: [],
  //   },
  data() {
    return {
      filter: "",
    };
  },
  computed: {
    ...mapGetters(["filterTask"]),
    // filterList() {
    //   console.log(this.filterList);
    //   // alert(filter);
    //   console.log(this.taskList);

    // },
  },

  methods: {
    //  filterS() {
    //    this.$emit("Filter", this.filterTask);
    //  },
  },

  watch: {
    filter() {
      console.log(this.filterTask);
    },
  },
};
</script>
<style lang="scss">
.bg-color {
  background-color: #e0e0e0;
}
.input-field label {
  color: #37474f;
}
.input-field label:focus {
  color: #424242;
}
.input-field input [type="text"]:focus {
  border-bottom: 3px solid #37474f;
  box-shadow: 0 1px 0 0 #37474f;
}
</style>
