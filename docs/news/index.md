<script setup>
    import { data as posts } from './posts.data.mts'
</script>

# News

<div class="blog-overview-list">
  <template v-for="post in posts" :key="post.url">
    <h2><a :href="post.url" class="post-link">{{ post.title }}</a></h2>
    <span class="post-date">{{ post.date.string }}</span>
    <div v-html="post.excerpt" class="post-excerpt"/>
  </template>
</div>
