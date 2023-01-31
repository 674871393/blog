<script setup lang="ts">
import { formatTime } from '@/utils'
const route = useRoute()

const doc = await queryContent(
  `/${route.path.split('/').slice(2).join('/')}`,
).findOne()

const path = `/${route.path.split('/')[1]}`
</script>

<template>
  <div class="px-7 py-10">
    <main class="w-75ch mx-auto blog-content">
      <div class="mb-8">
        <p class="text-4xl mb-8">
          {{ doc.title }}
        </p>
        <p class="text-md">
          {{ formatTime(doc.date) }}
        </p>
      </div>
      <ContentRenderer :value="doc">
        <ContentRendererMarkdown :value="doc" class="prose" />
      </ContentRenderer>
      <Back :path="path" />
    </main>
  </div>
</template>

<style scoped lang="scss">

</style>
