<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

interface INav {
  title: string
  icon: string | null
  path: string
  isShowPhone: boolean
}
const navList: INav[] = [
  { title: '博客', icon: 'i-carbon-blog', path: '/posts', isShowPhone: true },
  { title: '杂谈', icon: null, path: '/talks', isShowPhone: true },
  // {
  //   title: "项目",
  //   icon: "i-carbon-delivery-parcel",
  //   path: "/pojects",
  //   isShowPhone: true,
  // },
]

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="flex p-8">
    <NuxtLink to="/">
      首页
    </NuxtLink>
    <nav class="flex-auto flex justify-end items-center gap-5">
      <NuxtLink
        v-for="item of navList" :key="item.path" class="icon" :to="item.path" :class="item.icon ? '' : 'hidden md:block'"
      >
        <span class="hidden md:block">{{ item.title }}</span>
        <div class="md:hidden" :class="item.icon" />
      </NuxtLink>
      <NuxtLink class="i-simple-icons-gitee cursor-pointer icon" to="https://gitee.com/gzl326" target="_blank" />
      <div class="dark:i-akar-icons-moon-fill i-carbon-light-filled cursor-pointer icon" @click="toggleDark()" />
    </nav>
  </div>
</template>

<style scoped lang="scss">

</style>
