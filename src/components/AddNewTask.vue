<template>
  <section>
    <!-- <h1>Хозяяяин времени</h1> -->
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
        <!-- <div class="task_title">
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
        </div> -->
        <div class="row">
          <div class="col s8">
            <div class="row">
              <div class="input-field col s6">
                <input
                  v-model="task.name"
                  id="input_name"
                  type="text"
                  maxlength="20"
                />
                <span>{{ task.description.length }}/20</span>
                <span>{{ error }}</span>
                <label for="input_name">Заголовок</label>
                <!-- <span
                  class="character-counter"
                  style="float: right; font-size: 12px"
                  ><font style="vertical-align: inherit">
                    <font style="vertical-align: inherit">
                      {{ task.name.length }}/20
                    </font>
                  </font>
                  ></span
                > -->
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
                <span>{{ task.description.length }}/1200</span>
                <!-- <span
                  class="character-counter"
                  style="float: right; font-size: 12px"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit">{{ task.description.length }}/1200</font
                    ></font
                  ></span
                > -->
              </div>
            </div>
          </div>
        </div>
        <div class="task_type-container">
          <div class="task_type">
            <div class="task-type_text">
              <h6>Тип задачи</h6>
            </div>
            <div class="task-type_selection">
              <div class="selection-checkbox">
                <label for="typeChoice1" class="checkbox-name">
                  <input
                    v-model="task.typeTask"
                    name="choice1"
                    class="checkbox-task"
                    id="typeChoice1"
                    type="radio"
                    value="К выполнению"
                    checked
                  />
                  <span>К выполнению</span>
                </label>
              </div>
              <div class="selection-checkbox">
                <label for="typeChoice2" class="checkbox-name">
                  <input
                    v-model="task.typeTask"
                    name="choice1"
                    class="checkbox-task"
                    id="typeChoice2"
                    type="radio"
                    value="Напоминание"
                    checked
                  />
                  <span> Напоминание</span>
                </label>
              </div>
            </div>
          </div>
          <div class="task_type">
            <div class="task-type_text"><h6>Приоритет</h6></div>
            <div class="task-type_selection">
              <div class="selection-checkbox">
                <label for="priorityChoice1" class="checkbox-name">
                  <input
                    v-model="task.priorityTask"
                    id="priorityChoice1"
                    value="Высокий"
                    class="checkbox-task"
                    type="radio"
                    name="choice2"
                    checked
                  />
                  <span>Высокий</span>
                </label>
              </div>
              <div class="selection-checkbox">
                <label for="priorityChoice2" class="checkbox-name">
                  <input
                    v-model="task.priorityTask"
                    id="priorityChoice2"
                    value="Средний"
                    class="checkbox-task"
                    type="radio"
                    name="choice2"
                    checked
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
                    checked
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
              name=""
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

// import plusSing from "./plusSing.vue";
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
        typeTask: null,
        priorityTask: null,
        dateAdd: "",
        dateDue: "",
        id: "",
        status: "active",
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
      if (!this.task.name) {
        this.error = "Обязательно для заполнения";
        return;
      }
      this.task.id = Date.now();
      this.task.dateAdd = new Date().toLocaleDateString();
      this.$store.dispatch("newTask", this.task);
      this.$emit("add-task", this.task);
      // console.log(this.task);
      // console.log(this.task.id);
      this.showModal = false;
      this.task = {};
      this.error = "";
      // console.log(this.refs.datepicker, this.task);
    },
  },
};
</script>
