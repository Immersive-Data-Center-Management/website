---
lastUpdated: false
aside: false
---

<script setup>
    import { data as posts } from './posts.data.mts'
</script>

# News

<div class="blog-overview-list">
  <template v-for="post in posts" :key="post.url">
    <a :href="post.url" class="post-card">
      <span class="post-date">{{ post.date.string }}</span>
      <h2 class="post-title">{{ post.title }}</h2>
      <div v-html="post.excerpt" class="post-excerpt"/>
    </a>
  </template>
</div>
