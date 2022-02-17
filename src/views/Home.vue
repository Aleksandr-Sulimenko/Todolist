<template>
  <!-- <div class="home"> -->
  <div class="container">
    <section>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, totam
        tempora illo asperiores mollitia blanditiis amet facere. Saepe corrupti
        doloremque vitae? Architecto, corporis sapiente error distinctio
        provident ipsa consectetur tenetur!
      </h1>
      <button class="button-add button" type="button">
        Добавить
        <svg
          class="svg-plus"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="#ffffff"
        >
          <path
            d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          ></path>
        </svg>
      </button>
      <div class="container-modal">
        <div class="modal-window_modal"></div>
      </div>
    </section>
  </div>
  <!-- </div> -->
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Home extends Vue {}
</script>
