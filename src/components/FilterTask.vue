<template>
  <div class="container">
    <form action="">
      <p>Фильтер : {{ filter }}</p>
      <input v-model="filter" type="text" />
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
