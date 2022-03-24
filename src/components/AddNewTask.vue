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
          <form class="col s8">
            <div class="row">
              <div class="input-field col s6">
                <input
                  required
                  v-model="task.name"
                  id="input_name"
                  type="text"
                  maxlength="20"
                />
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
                <!-- <span
                  class="character-counter"
                  style="float: right; font-size: 12px"
                  ><font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit"
                      >{{ task.description.length }}/1200</font
                    ></font
                  ></span -->
                >
              </div>
            </div>
          </form>
        </div>
        <div class="task_type-container">
          <div class="task_type">
            <div class="task-type_text">
              <h6>Тип задачи</h6>
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
            <div class="task-type_text"><h6>Приоритет</h6></div>
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
      task: {
        name: "",
        description: "",
        typeTask: null,
        priorityTask: null,
        dateAdd: new Date().toLocaleDateString(),
        dateDue: "",
        id: Date.now(),
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
      this.$store.dispatch("newTask", this.task);
      // this.$emit("add-task", this.task);
      // console.log(this.task);
      // console.log(this.task.id);
      this.showModal = false;
      this.task = {};
      // console.log(this.refs.datepicker, this.task);
    },
  },
};
</script>
