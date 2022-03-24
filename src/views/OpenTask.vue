<template>
  <div class="container">
    <h2>{{ task.name }}</h2>
    <h4>{{ task.description }}</h4>
  </div>
</template>

<script lang="ts">
// import { mapGetters } from "vuex";
export default {
  computed: {
    // ...mapGetters(["taskList"]),
    task() {
      console.log(typeof this.$route.params.id);
      return this.$store.getters.taskById(+this.$route.params.id);
    },
  },
};
</script>
