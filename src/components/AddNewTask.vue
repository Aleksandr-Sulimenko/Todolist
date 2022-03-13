<template>
  <section>
    <h1>Хозяяяин времени</h1>
    <ButtonButton
      class="button-add button"
      :title="'Добавить'"
      :type="'Add'"
      @added-task="openModal"
    />
    <div v-if="showModal" class="container-modal">
      <div class="modal-window_modal">
        <div class="modal-h1">
          <h1>Формы к заполнению</h1>
        </div>
        <ButtonButton
          class="modal-hide"
          @added-task="closeModal"
          :title="''"
          :type="'Close'"
          :color="'Close'"
        />
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
            v-model="task.description"
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
                <input
                  v-model="task.typeTask"
                  name="choice1"
                  class="checkbox-task"
                  id="typeChoice1"
                  type="radio"
                  value="К выполнению"
                />

                <label for="typeChoice1" class="checkbox-name"
                  >К выполнению</label
                >
              </div>
              <div class="selection-checkbox">
                <input
                  v-model="task.typeTask"
                  name="choice1"
                  class="checkbox-task"
                  id="typeChoice2"
                  type="radio"
                  value="Напоминание"
                />
                <label for="typeChoice2" class="checkbox-name">
                  Напоминание</label
                >
              </div>
            </div>
          </div>
          <div class="task_type">
            <div class="task-type_text"><h3>Приоритет</h3></div>
            <div class="task-type_selection">
              <div class="selection-checkbox">
                <input
                  v-model="task.priorityTask"
                  id="priorityChoice1"
                  value="Высокий"
                  class="checkbox-task"
                  type="radio"
                  name="choice2"
                />
                <label for="priorityChoice1" class="checkbox-name"
                  >Высокий</label
                >
              </div>
              <div class="selection-checkbox">
                <input
                  v-model="task.priorityTask"
                  id="priorityChoice2"
                  value="Средний"
                  class="checkbox-task"
                  type="radio"
                  name="choice2"
                />
                <label for="priorityChoice2" class="checkbox-name"
                  >Средний</label
                >
              </div>
              <div class="selection-checkbox">
                <input
                  v-model="task.priorityTask"
                  id="priorityChoice3"
                  value="Низкий"
                  class="checkbox-task"
                  type="radio"
                  name="choice2"
                />
                <label for="priorityChoice3" class="checkbox-name"
                  >Низкий</label
                >
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
          <ButtonButton
            class="button-modal button"
            :title="'Сохранить'"
            @added-task="addTaskTask()"
          />
          <ButtonButton
            class="button-modal button"
            @added-task="cleaningModal"
            :title="'Очистить'"
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
  props: {},
  data() {
    return {
      showModal: false,
      task: {
        name: "",
        description: "",
        typeTask: null,
        priorityTask: null,
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
      console.log(this.task);
      this.showModal = false;
      this.task = {};
    },
  },
};
</script>
