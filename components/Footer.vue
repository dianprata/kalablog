<template>
  <footer class="footer bg-primary py-8 mt-6">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="md:w-1/3 w-full">
          <h3 class="my-4 text-white">
            Discovery Kala
          </h3>
          <p class="text-sm text-grey">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius error et id in incidunt iste laboriosam laborum libero nostrum quod.
          </p>
        </div>
        <div class="md:w-1/3 w-full">
          <h3 class="my-4 text-white">
            Discovery Kala
          </h3>
          <p class="text-sm text-grey">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur debitis dolor doloremque odio quasi quo, quos rerum velit voluptatem!
          </p>
        </div>
        <div class="md:w-1/3 w-full">
          <h3 class="my-4 text-white">
            Discovery Kala
          </h3>
          <p class="text-sm text-grey">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor error labore modi molestiae nisi optio rem. Temporibus?
          </p>
        </div>
      </div>
      <vs-divider color="white" class="py-4" />
      <div class="flex justify-between items-center">
        <nuxt-link to="/">
          <h1 class="text-white">
            Kala Blog
          </h1>
        </nuxt-link>
        <div class="flex">
          <nuxt-link to="/" class="mx-4 text-white">
            Home
          </nuxt-link>
          <nuxt-link to="#about" class="mx-4 text-white">
            About
          </nuxt-link>
          <nuxt-link to="#help" class="mx-4 text-white">
            Help
          </nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

</style>
