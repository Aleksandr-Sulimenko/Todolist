<template>
  <section>
    <h1>Хозяяяин времени</h1>
    <button-button
      class="button-add button"
      :title="titleAdd"
      @added-task="openModal"
    />
    <div v-if="showModal" class="container-modal">
      <div class="modal-window_modal">
        <div class="modal-h1">
          <h1>Формы к заполнению</h1>
        </div>
        <button-button class="modal-hide" @added-task="closeModal" />
        <!-- <button v-on:click="closeModal()" class="modal-hide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
            version="1.1"
            width="30"
            height="30"
            x="0"
            y="0"
            viewBox="0 0 511.76 511.76"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
          >
            <g>
              <path
                d="M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048    c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z     M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165    c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0    c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z"
                fill="#718096"
                data-original="#000000"
              ></path>
            </g>
          </svg>
        </button> -->
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
  components: { ButtonButton },
  name: "AddNewTask",
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
      // taskList: [],
      task: {
        name: "",
        content: "",
        dateAdd: new Date().toLocaleString(),
        dateDue: "",
      },
    };
  },

  created() {
    const tasksData = localStorage.getItem("todo-list");
    if (tasksData) {
      // this.taskList = [...this.taskList, ...JSON.parse(tasksData)];
      this.taskList = JSON.parse(tasksData);
    }
    // localStorage.clear();
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
      // this.taskList.push({ ...this.task });
      // localStorage.setItem("todo-list", JSON.stringify(this.taskList));
      // console.log(this.taskList);
      this.$emit("add-task", this.task);

      this.showModal = false;
      this.task = {};
    },
  },
};
</script>

<style src="../app.scss" lang="scss"></style>
