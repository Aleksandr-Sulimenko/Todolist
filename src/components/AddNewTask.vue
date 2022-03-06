<template>
  <section>
    <h1>Хозяяяин времени</h1>
    <button-button
      class="button-add button"
      :title="titleAdd"
      :type="'Add'"
      @added-task="openModal"
    />
    <div v-if="showModal" class="container-modal">
      <div class="modal-window_modal">
        <div class="modal-h1">
          <h1>Формы к заполнению</h1>
        </div>
        <button-button class="modal-hide" @added-task="closeModal" />
        <div class="task_title">
          <input
            v-model="task.name"
            class="input_task-title"
            type="text"
            placeholder="Заголовок задачи"
          />
        </div>
        <div class="task_text">
          <textarea
            v-model="task.content"
            class="input_task-text"
            type="text"
            placeholder="Текст задачи"
          ></textarea>
        </div>
        <div class="task_type-container">
          <div class="task_type">
            <div class="task-type_text">
              <h3>Тип задачи</h3>
            </div>
            <div class="task-type_selection">
              <div class="selection-checkbox">
                <input class="checkbox-task" type="checkbox" />
                <div class="checkbox-name">К выполнению</div>
              </div>
              <div class="selection-checkbox">
                <input class="checkbox-task" type="checkbox" />
                <div class="checkbox-name">Напоминание</div>
              </div>
            </div>
          </div>
          <div class="task_type">
            <div class="task-type_text"><h3>Приоритет</h3></div>
            <div class="task-type_selection">
              <div class="selection-checkbox">
                <input class="checkbox-task" type="checkbox" />
                <div class="checkbox-name">Высокий</div>
              </div>
              <div class="selection-checkbox">
                <input class="checkbox-task" type="checkbox" />
                <div class="checkbox-name">Средний</div>
              </div>
              <div class="selection-checkbox">
                <input class="checkbox-task" type="checkbox" />
                <div class="checkbox-name">Низкий</div>
              </div>
            </div>
          </div>
        </div>
        <div class="time_date">
          <div class="date-completion">
            Время выполнения :
            <input
              v-model="task.dateDue"
              type="datetime-local"
              name=""
              id="date_completion"
            />
          </div>
        </div>
        <div class="save-remove">
          <button-button
            class="button-modal button"
            :title="titleSave"
            @added-task="addTaskTask()"
          />
          <button-button
            class="button-modal button"
            @added-task="cleaningModal"
            :title="titleClean"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import ButtonButton from "./ButtonButton.vue";

// import plusSing from "./plusSing.vue";
export default {
  name: "AddNewTask",
  components: { ButtonButton },
  props: {
    titleSave: {
      type: String,
      default: "Сохранить",
    },
    titleClean: {
      type: String,
      default: "Очистить",
    },
    titleAdd: {
      type: String,
      default: "Добавить",
    },

    // titleClose: {
    //   default: plusSing,
    // },
    // plusIcon: {
    //   type: String,
    //   default: "",
    // },
  },
  data() {
    return {
      showModal: false,
      task: {
        name: "",
        content: "",
        dateAdd: new Date().toLocaleString(),
        dateDue: "",
      },
    };
  },

  methods: {
    openModal() {
      return (this.showModal = true);
    },

    cleaningModal() {
      this.task = {};
    },

    closeModal() {
      this.showModal = false;
    },

    addTaskTask() {
      this.$emit("add-task", this.task);

      this.showModal = false;
      this.task = {};
    },
  },
};
</script>
