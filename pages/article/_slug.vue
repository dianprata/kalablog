<template>
  <div class="detail-article">
    <section class="container container-md detail-article-title">
      <h1 class="my-6">
        {{ article.title }}
      </h1>
      <p>by <span class="font-semibold">{{ article.writer }}</span></p>
      <p class="text-grey font-medium">
        <nuxt-link :to="`/article/category/${article.category}`" class="bg-grey-light text-black">
          {{ article.category | formatArticleCategory }}
        </nuxt-link> - {{ article.created_at }}
      </p>
    </section>
    <section class="detail-article-image">
      <div class="flex justify-center">
        <div class="md:w-3/4 w-full">
          <img :src="article.imageUrl" :alt="article.slug">
        </div>
      </div>
    </section>
    <section class="container container-md detail-article-content">
      <div v-html="article.content" />
    </section>
    <div class="container container-md mt-6">
      source:
      <a
        :href="article.source"
        target="_blank"
        class="hover:text-blue"
      >
        {{ article.source }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slug',
  data: () => ({
    article: {}
  }),
  created () {
    this.fetchDetailArticle()
  },
  methods: {
    fetchDetailArticle () {
      this.$axios.get(`/api/articles/${this.$route.params.slug}`)
        .then((res) => {
          this.article = res.data
        }).catch((err) => {
          throw new Error(err)
        })
    }
  }
}
</script>

<style scoped>

</style>
