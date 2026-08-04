<!--
MIT License

Copyright (c) 2019-present, Yuxi (Evan) You

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
-->

<!--
Copied and adapted from: https://github.com/vuejs/vitepress/blob/828000099843c982f4ce9456aa6eb8cfb649f55f/src/client/theme-default/components/VPFooter.vue
-->

<script setup lang="ts">
import { useLayout } from 'vitepress/theme';

const { hasSidebar } = useLayout()

</script>

<template>
  <footer class="VPFooter" :class="{ 'has-sidebar': hasSidebar }">
    <div class="container">
      <div class="funding-notice">
        <div class="funding-image">
          <div class="funding-image-container">
            <div class="funding-image-bg"></div>
            <img src="/eu_support.png" alt="EU and German government funding logos" class="funding-image-src">
          </div>
        </div>
        <div class="funding-text">
          <p>
            <strong>Funded by the European Union – NextGenerationEU.</strong>
          </p>
          <p>
            The views and opinions expressed are solely those of the author(s) and do not necessarily reflect the views of the European Union or the European Commission. Neither the European Union nor the European Commission can be held responsible for them.
          </p>
        </div>
      </div>
    </div>
  </footer>
  <div class="legal-bar">
    <div class="legal-bar-inner">
      <div class="legal-bar-sap">
        <img src="/SAP_R_grad_scrn.svg" alt="SAP" class="sap-logo" />
        <span class="legal-copyright">An SAP Open Source Project</span>
      </div>
      <div class="legal-bar-links">
        <a href="https://www.sap.com/germany/about/legal/impressum-se.html" target="_blank" rel="noopener">Legal Disclosure</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPFooter {
  position: relative;
  z-index: var(--vp-z-index-footer);
  border-top: 1px solid var(--vp-c-gutter);
  padding: 32px 24px;
  background-color: var(--vp-c-bg);
}

.VPFooter.has-sidebar {
  display: none;
}

.VPFooter :deep(a) {
  text-decoration-line: underline;
  text-underline-offset: 2px;
  transition: color 0.25s;
}

.VPFooter :deep(a:hover) {
  color: var(--vp-c-text-1);
}

@media (min-width: 768px) {
  .VPFooter {
    padding: 32px;
  }
}

.container {
  margin: 0 auto;
  max-width: 1152px;
  text-align: center;
}

/* Funding Notice Section */
.funding-notice {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
  padding: 0 0 24px 0;
}

.funding-image img {
  max-width: 300px;
  height: auto;
  display: block;
}

.funding-text {
  flex: 1;
  min-width: 280px;
  font-size: 12px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  text-align: left;
}

.funding-text p {
  margin: 0;
}

/* Always-visible legal bar — shown on all pages including those with sidebar */
.legal-bar {
  position: relative;
  z-index: 31; /* above --vp-z-index-sidebar (30) so sticky sidebar doesn't cover it */
  border-top: 1px solid var(--vp-c-gutter);
  padding: 12px 24px;
  background-color: var(--vp-c-bg);
}

.legal-bar-inner {
  margin: 0 auto;
  max-width: 1152px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.legal-bar-sap {
  display: flex;
  align-items: center;
  gap: 10px;
}

.sap-logo {
  height: 20px;
  width: auto;
  display: block;
  margin-top: -4px;
}

.legal-copyright {
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.legal-bar-links {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
}

.legal-bar-links a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s;
}

.legal-bar-links a:hover {
  color: var(--vp-c-brand-1);
}

.legal-sep {
  color: var(--vp-c-divider);
}

@media (max-width: 768px) {
  .legal-bar {
    padding: 12px 16px;
  }

  .legal-bar-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>