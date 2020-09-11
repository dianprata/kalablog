<template>
  <div class="category-list">
    <div class="flex">
      <nuxt-link to="/article/category/1" class="pl-0">
        Productivity
      </nuxt-link>
      <nuxt-link to="/article/category/2">
        UI/UX
      </nuxt-link>
      <nuxt-link to="/article/category/3">
        Javascript
      </nuxt-link>
    </div>
    <div class="flex items-center">
      <vs-input v-if="openSearch" v-model="search" type="text" placeholder="Search" class="mr-4" />
      <i class="feather icon-search text-xl cursor-pointer" @click="openSearch = !openSearch" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListCategory',
  data: () => ({
    openSearch: false,
    search: ''
  })
}
</script>

<style scoped>

</style>
