<template>
  <div class="cont1ainer">
    <h4>{{ Task.name }}</h4>
    <table>
      <tr>
        <th>Статус</th>
        <td
          class="active"
          v-bind:class="{ outdated: Task.status === 'outdated' }"
        >
          {{ Task.status }}
        </td>
      </tr>
      <tr>
        <th>Добавлено</th>
        <td>{{ Task.dateAdd }}</td>
      </tr>
      <tr>
        <th>Крайний срок</th>
        <td>{{ Task.dateDue }}</td>
      </tr>
      <tr>
        <th>Приоритет</th>
        <td>{{ Task.priorityTask }}</td>
      </tr>
      <tr>
        <th>Содержание</th>
        <td>{{ Task.description }}</td>
      </tr>
    </table>
    <router-link teg="button" class="btn-small" :to="'/'" active-class="activ">
      Закрыть
    </router-link>
  </div>
</template>

<script lang="ts">
export default {
  computed: {
    Task() {
      console.log(typeof this.$route.params.id);
      return this.$store.getters.taskById(+this.$route.params.id);
    },
  },
};
</script>
<style lang="scss">
td {
  padding-left: 40px;
}
</style>
