<template>
  <div class="container">
    <TodoList />
  </div>
</template>

<script lang="ts">
import TodoList from "../components/TodoList.vue";

export default {
  name: "Home",
  components: {
    TodoList,
  },
};
</script>

<style src="../app.scss" lang="scss"></style>
