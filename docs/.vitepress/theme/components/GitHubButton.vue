<template>
  <a :href="href" target="_blank" rel="noopener noreferrer" class="github-button">
    <img class="github-button__icon" :src="iconSrc" alt="" aria-hidden="true" />
    <span>{{ label }}</span>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const props = defineProps<{
  href: string
  label: string
}>()

const { isDark } = useData()

const base = import.meta.env.BASE_URL ?? '/'

const iconSrc = computed(() =>
  isDark.value ? `${base}icons/github-dark.svg` : `${base}icons/github-light.svg`
)
</script>

<style scoped>
.github-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px 10px 16px;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  white-space: nowrap;
  text-decoration: none;

  background-color: #26292e;
  color: #ffffff;
  border: none;
}

.github-button:hover {
  color: #ffffff;
}

.dark .github-button {
  background-color: #f2f2f2;
  color: #1a1a1a;
  border: 1px solid #30363d;
}

.dark .github-button:hover {
  color: #1a1a1a;
}

.github-button__icon {
  width: 20px;
  height: 20px;
  display: block;
  flex-shrink: 0;
  margin: 0;
}
</style>
