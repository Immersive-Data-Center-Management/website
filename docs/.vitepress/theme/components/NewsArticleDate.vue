<script setup>
import { useData, useRoute } from 'vitepress'
import { computed } from 'vue'

const { frontmatter } = useData()
const route = useRoute()

const isNewsArticle = computed(() => /^\/news\/.+/.test(route.path))

const formattedDate = computed(() => {
  if (!isNewsArticle.value || !frontmatter.value.date) return ''
  return new Date(frontmatter.value.date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
  })
})
</script>

<template>
  <span v-if="isNewsArticle && formattedDate" class="post-date news-article-date">
    {{ formattedDate }}
  </span>
</template>
