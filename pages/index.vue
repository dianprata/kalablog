<template>
  <div class="container px-4 home">
    <list-category />
    <section id="hero-article">
      <h1 class="py-5 font-semibold text-3xl">
        {{ topArticle.category | formatArticleCategory }}
      </h1>
      <div class="flex flex-wrap">
        <div class="lg:w-2/3 w-full lg:pr-4">
          <nuxt-link :to="`/article/${topArticle.slug}`">
            <div class="top-article">
              <img :src="topArticle.imageUrl" :alt="topArticle.slug">
              <div class="top-article-desc">
                <h1 class="font-semibold py-4">
                  {{ topArticle.title }}
                </h1>
                <h6>by {{ topArticle.writer }}</h6>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="lg:w-1/3 w-full lg:px-4">
          <div class="recent-articles">
            <h2 class="lg:pb-4 lg:pt-0 py-4 font-semibold">
              Recent Articles
            </h2>
            <nuxt-link v-for="(recent,index) in recentArticles" :key="index" :to="`/article/${recent.slug}`">
              <div class="recent-articles-list">
                <img :src="recent.imageUrl" :alt="recent.slug">
                <div class="recent-article-desc">
                  <h5>
                    {{ recent.title }}
                  </h5>
                  <p>
                    by <span class="font-semibold">{{ recent.writer }}</span>
                  </p>
                  <p>{{ recent.created_at }}</p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <section id="all-articles">
      <h1 class="lg:pt-6 pb-4 font-semibold">
        New Articles
      </h1>
      <div class="flex lg:flex-no-wrap flex-wrap">
        <div class="lg:w-4/5 w-full lg:mr-4">
          <div v-for="(article,index) in newArticles" :key="index" class="articles">
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
          <div class="popular-articles">
            <h3 class="font-semibold pb-4">
              Popular Articles
            </h3>
            <ul class="list-disc ml-5 text-sm">
              <li v-for="(article,index) in newArticles" :key="index" class="mb-2">
                <nuxt-link :to="`/article/${article.slug}`">
                  {{ article.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="popular-category">
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
    </section>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    topArticle: {},
    recentArticles: [],
    newArticles: [],
    categories: []
  }),
  created () {
    this.fetchTopArticle()
    this.fetchRecentArticles()
    this.fetchNewArticle()
    this.fetchCategories()
  },
  methods: {
    async fetchTopArticle () {
      await this.$axios.get('/api/articles/top')
        .then((res) => {
          this.topArticle = res.data
        }).catch((err) => {
          throw new Error(err)
        })
    },
    async fetchRecentArticles () {
      await this.$axios.get('/api/articles/recent')
        .then((res) => {
          this.recentArticles = res.data
        }).catch((err) => {
          throw new Error(err)
        })
    },
    async fetchNewArticle () {
      await this.$axios.get('/api/articles')
        .then((res) => {
          this.newArticles = res.data
        }).catch((err) => {
          throw new Error(err)
        })
    },
    async fetchCategories () {
      await this.$axios.get('/api/categories')
        .then((res) => {
          this.categories = res.data
        }).catch((err) => {
          throw new Error(err)
        })
    }
  }
}
</script>
