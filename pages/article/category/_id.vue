<template>
  <div class="article-category">
    <h1 class="p-8 bg-primary text-white">
      {{ Number($route.params.id) | formatArticleCategory }}
    </h1>
    <div class="container mt-6">
      <div class="flex flex-wrap">
        <div class="lg:w-4/5 w-full lg:pr-4">
          <div v-for="(article,index) in articles" :key="index" class="articles">
            <nuxt-link :to="`/article/${article.slug}`">
              <div class="flex flex-wrap">
                <div class="md:w-1/3 w-full md:pr-4 pb-4">
                  <img :src="article.imageUrl" :alt="article.slug" class="rounded-lg">
                </div>
                <div class="md:w-2/3 w-full md:px-4">
                  <div class="new-article-desc">
                    <div class="header-desc">
                      <h2 class="mb-3 text-xl font-semibold">
                        {{ article.title }}
                      </h2>
                    </div>
                    <div class="content-desc">
                      {{ article.desc }}
                    </div>
                    <div class="footer-desc">
                      <p>
                        by <span class="font-semibold">{{ article.writer }}</span>
                      </p>
                      <p>
                        <nuxt-link :to="`/article/category/${article.category}`" class="bg-grey-light">
                          {{ article.category | formatArticleCategory }}
                        </nuxt-link> - {{ article.created_at }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="lg:w-1/5 w-full lg:pt-0 pt-4">
          <div class="popular">
            <h3 class="font-semibold pb-4">
              Popular Category
            </h3>
            <ul class="list-disc ml-5 text-sm">
              <li v-for="(cat,index) in categories" :key="index" class="mb-2">
                <nuxt-link :to="`/article/category/${cat.id}`">
                  {{ cat.name }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Id',
  data: () => ({
    articles: [],
    categories: []
  }),
  created () {
    this.fetchArticlesByCategory()
    this.fetchCategories()
  },
  methods: {
    fetchArticlesByCategory () {
      this.$axios.get(`/api/articles/category/${this.$route.params.id}`)
        .then((res) => {
          this.articles = res.data
        }).catch((err) => {
          throw new Error(err)
        })
    },
    fetchCategories () {
      this.$axios.get('/api/categories')
        .then((res) => {
          this.categories = res.data
        }).catch((err) => {
          throw new Error(err)
        })
    }
  }
}
</script>

<style scoped>

</style>
