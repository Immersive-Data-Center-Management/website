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
    <div class="post-card">
      <span class="post-date">{{ post.date.string }}</span>
      <h2 class="post-title"><a :href="post.url" class="post-link">{{ post.title }}</a></h2>
      <div v-html="post.excerpt" class="post-excerpt"/>
    </div>
  </template>
</div>
