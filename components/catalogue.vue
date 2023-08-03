<script setup lang="ts">
import _ from 'lodash'
import dayjs from 'dayjs'
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

interface IDoc {
  date: String
  list: ParsedContent[]
}
const catalogue = [
  { name: '博客', path: '/posts' },
  { name: '杂谈', path: '/talks' },
]
const route = useRoute()
const docs = await queryContent().where({ categories: route.path.slice(1) }).find()
const list: IDoc[] = _(docs).groupBy(x => dayjs(x.date).get('year')).map((list, date) => ({ date, list })).sort((a,b)=>dayjs(b.date).valueOf() - dayjs(a.date).valueOf()).value()

</script>

<template>
  <main class="m-auto my-0 max-w-65ch">
    <div class="flex gap2 text-xl sm:gap3 sm:text-3xl mb-4">
      <NuxtLink
        v-for="item of catalogue" :key="item.path"
        class="!border-none !font-400 opacity-20 hover:opacity-50" :to="item.path"
        :class="item.path === route.path ? 'text-#000 dark:text-#fff !opacity-100' : ''"
      >
        {{ item.name }}
      </NuxtLink>
    </div>
    <article>
      <ul v-for="(articles, idx) of list" :key="idx">
        <div relative h20 pointer-events-none>
          <span  text-8em color-transparent absolute left--1.5rem sm:left--3rem top--2rem font-bold text-stroke-2 text-stroke-hex-aaa op10>{{ articles.date }}</span>
        </div>
        <NuxtLink
          v-for="article in articles.list" :key="article._path"
          class="mt-2 mb-6 block cursor-pointer opacity-50 hover:opacity-100" :to="`/posts${article._path}`"
        >
          <div class="text-xl leading-1.2em">
            <span class="text-xs border border-current rounded px-1 pb-0.2 md:ml--8 mr2 align-middle">{{ _.upperCase(article._dir) }}</span>
            <span class="align-middle"> {{ article.title }}</span>
          </div>
          <p class="text-md my-2">
            {{ article.description }}
          </p>
          <p class="text-sm">
            {{ formatTime(article.date) }}
          </p>
        </NuxtLink>
      </ul>
    </article>
    <Back />
  </main>
</template>

<style scoped lang="scss">

</style>
