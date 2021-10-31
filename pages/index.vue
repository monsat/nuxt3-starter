<script setup lang="ts">
const header = ref('Nuxt 3 starter template')
</script>

<template>
  <div>
    <h1 class="rounded-md bg-green-200 text-xl text-green-700 font-bold">
      {{ header }}
      with <a href="https://vueuse.org/">VueUse</a> and <a href="with VueUse and Windi CSS" target="_blank">Windi CSS</a>.
    </h1>
    <p>
      Edit <strong>layouts/default.vue</strong> and <strong>windi.config.js</strong>.
    </p>
  </div>
</template>
