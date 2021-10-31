<template>
  <div class="p-4 sm:p-8 min-h-screen bg-sky-200 flex">
    <div class="container p-4 sm:p-8 mx-auto rounded-2xl bg-gray-50 leading-loose text-gray-600">
      <slot/>
    </div>
  </div>
</template>

<style>
div.container > div > h1,
div.container > div > h2,
div.container > div > h3,
div.container > div > h4,
div.container > div > h5,
div.container > div > h6,
div.container > div > p {
  @apply py-4 px-6;
}
</style>
