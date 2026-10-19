<script setup>
import { withBase, useData } from 'vitepress'
import { computed } from 'vue'

const { frontmatter, isDark } = useData()
const sections = computed(() => frontmatter.value.sections ?? [])
</script>

<template>
  <div v-if="sections.length" class="home-illustrations">
    <div
      v-for="(s, i) in sections"
      :key="i"
      class="home-illustration-section"
      :class="{ reverse: i % 2 === 1 }"
    >
      <div class="home-illustration-visual">
        <img
          :src="withBase(isDark && s.imageDark ? s.imageDark : s.image)"
          :alt="s.alt"
          class="home-illustration-img"
        />
      </div>
      <div class="home-illustration-text">
        <h2>{{ s.title }}</h2>
        <p>{{ s.text }}</p>
        <a :href="withBase(s.link)" class="home-illustration-link">
          {{ s.linkText || 'Learn more' }} <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </div>
</template>
