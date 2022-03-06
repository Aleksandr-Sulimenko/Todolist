<template>
  <button v-on:click="AddEmit()" type="button" :class="type">
    {{ title }}
    <svg
      v-if="type === 'Close'"
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
    <svg
      v-if="type === 'Add'"
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
</template>

<script lang="ts">
export default {
  name: "ButtonButton",
  props: {
    title: {
      type: String,
      default: "Кнопка",
    },
    type: {
      type: String,
      default: "Default",
    },
  },
  methods: {
    AddEmit() {
      this.$emit("added-task");
    },
  },
};
</script>

<style>
/* .Close {
  background: red;
} */
/* .Add {
  background: blue;
} */
/* .Default {
  background: rgb(128, 128, 128) !important;
} */
</style>
