<template>
  <div class="container">
    <h2>jkl;</h2>
    <!-- <h1>{{ task.title }}</h1> -->
  </div>
</template>

<script lang="ts">
// import { mapGetters } from 'vuex';
export default {
  computed: {
    // ...mapGetters(["taskList"]),
    task() {
      console.log(this.route.task.params.id);
      return this.$store.getters.taskById(this.route.task.params.id);
    },
  },
};
</script>
