<script setup lang="ts">
withDefaults(defineProps<{
  path?: string
}>(), {
  path: '/',
})
</script>

<template>
  <div class="m-auto mt-8 mb-8">
    <NuxtLink :to="path" class="font-mono no-underline opacity-50 hover:opacity-75">
      cd ..
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>
