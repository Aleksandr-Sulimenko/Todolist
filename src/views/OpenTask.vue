<template>
  <div class="container">
    <h2>{{ Task.name }}</h2>
    <h4>{{ Task.description }}</h4>
  </div>
</template>

<script lang="ts">
// import { mapGetters } from "vuex";
export default {
  computed: {
    // ...mapGetters(["taskList"]),
    Task() {
      console.log(typeof this.$route.params.id);
      return this.$store.getters.taskById(+this.$route.params.id);
    },
  },
};
</script>
