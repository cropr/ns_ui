<template>
  <nuxt-content :document="page" />
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const page = await $content('hello')
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" })
      })
    return {
      page
    }
  }

}
</script>
