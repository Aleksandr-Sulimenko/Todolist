<template>
  <section>
    <ButtonButton
      class="button-add button"
      :title="'Добавить'"
      :type="'Add'"
      @eClick="openModal"
    />
    <div v-if="showModal" class="container-modal">
      <div class="modal-window_modal">
        <div class="modal-h1">
          <h3>Новая задача</h3>
        </div>
        <ButtonButton
          class="modal-hide"
          @eClick="closeModal"
          :title="''"
          :type="'Close'"
          :color="'Close'"
        />
        <div class="row">
          <div class="col s8">
            <div class="row">
              <div class="input-field col s6">
                <input
                  v-model="task.name"
                  id="input_name"
                  type="text"
                  maxlength="20"
                  class="validate"
                  avtocomplete="on | off"
                />
                <!-- <span>{{ task.name.length }}/20</span> -->
                <span class="outdated">{{ error }}</span>
                <label for="input_name">Заголовок</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <textarea
                  v-model="task.description"
                  id="textarea2"
                  class="materialize-textarea"
                  data-length="1200"
                ></textarea>
                <label for="textarea2">Описание задачи</label>
                <!-- <span style="float: right; font-size: 12px"
                  >{{ task.description.length }}/1200</span
                > -->
              </div>
            </div>
          </div>
        </div>
        <div class="task_type-container">
          <div class="task_type">
            <div class="task-type_text"><h6>Приоритет</h6></div>
            <div class="task-type_selection">
              <form action="input1.php" class="selection-checkbox">
                <label for="priorityChoice1" class="checkbox-name">
                  <input
                    v-model="task.priorityTask"
                    id="priorityChoice1"
                    value="Высокий"
                    class="checkbox-task"
                    type="radio"
                    name="choice2"
                    checked="checked"
                  />
                  <span>Высокий</span>
                </label>
              </form>
              <div class="selection-checkbox">
                <label for="priorityChoice2" class="checkbox-name">
                  <input
                    v-model="task.priorityTask"
                    id="priorityChoice2"
                    value="Средний"
                    class="checkbox-task"
                    type="radio"
                    name="choice2"
                  />
                  <span>Средний</span>
                </label>
              </div>
              <div class="selection-checkbox">
                <label for="priorityChoice3" class="checkbox-name">
                  <input
                    v-model="task.priorityTask"
                    id="priorityChoice3"
                    value="Низкий"
                    class="checkbox-task"
                    type="radio"
                    name="choice2"
                  />
                  <span>Низкий</span>
                </label>
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
              name="deadline"
              id="date_completion"
            />
          </div>
        </div>
        <div class="save-remove">
          <ButtonButton
            class="button-modal button"
            :title="'Сохранить'"
            @eClick="addTaskTask()"
          />
          <ButtonButton
            class="button-modal button"
            @eClick="cleaningModal"
            :title="'Очистить'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import ButtonButton from "./ButtonButton.vue";

export default {
  name: "AddNewTask",
  components: { ButtonButton },
  props: {},
  data() {
    return {
      showModal: false,
      error: "",
      task: {
        name: "",
        description: "",
        priorityTask: null,
        dateAdd: "",
        dateDue: "",
        id: "",
        status: "",
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
      this.task = {};
    },

    addTaskTask() {
      if (!this.task.name) {
        this.error = "Обязательно для заполнения";

        return;
      } else {
        this.error = "";
      }
      if (!this.task.dateDue) {
        this.task.status = "outdated";
      } else {
        this.task.status = "active";
      }

      this.task.id = Date.now();
      this.task.dateAdd = new Date().toLocaleDateString();
      this.$store.dispatch("newTask", this.task);
      this.$emit("add-task", this.task);
      this.showModal = false;
      this.task = {};
      this.error = "";
    },
  },
};
</script>
