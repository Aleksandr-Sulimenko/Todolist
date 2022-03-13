<template>
  <div class="container">
    <form action="">
      <p>Фильтер : {{ filter }}</p>
      <input @input="filterS" v-model="filter" type="text" />
    </form>
  </div>
</template>
<script lang="ts">
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
  methods: {
    filterS() {
      this.$emit("Filter", this.filter);
    },
  },
  //   watch: {

  //   },
};
</script>
