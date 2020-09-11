<template>
  <vs-navbar class="navbar-kala">
    <div slot="title">
      <vs-navbar-title>
        <nuxt-link to="/">
          Kala Blog
        </nuxt-link>
      </vs-navbar-title>
    </div>
    <vs-navbar-item class="font-semibold">
      <nuxt-link to="/">
        Home
      </nuxt-link>
    </vs-navbar-item>
    <vs-navbar-item>
      <vs-dropdown vs-trigger-click>
        <nuxt-link to="#category" class="font-semibold">
          Category
          <i class="feather icon-chevron-down" />
        </nuxt-link>

        <vs-dropdown-menu>
          <vs-dropdown-item to="/article/category/1">
            Productivity
          </vs-dropdown-item>
          <vs-dropdown-item to="/article/category/2">
            UI/UX
          </vs-dropdown-item>
          <vs-dropdown-item to="/article/category/3">
            Javascript
          </vs-dropdown-item>
        </vs-dropdown-menu>
      </vs-dropdown>
    </vs-navbar-item>
    <vs-navbar-item class="font-semibold">
      <nuxt-link to="#about">
        About
      </nuxt-link>
    </vs-navbar-item>
    <vs-navbar-item>
      <vs-button class="lg:ml-3 px-4 py-1 md:mb-0 mb-3 lg:ml-0 ml-2 rounded-full" type="border">
        Log In
      </vs-button>
    </vs-navbar-item>
    <vs-navbar-item>
      <vs-button class="lg:ml-3 px-4 py-1 lg:ml-0 ml-2 rounded-full">
        Get Started
      </vs-button>
    </vs-navbar-item>
  </vs-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>
