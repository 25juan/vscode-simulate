<template>
  <div class="app">
    <!-- 
    <FileMenu />
    <MarkdownEditor />
    <MarkdownPreview /> -->
    <TopBar />
    <MarkdownEditor />
  </div>
</template>
<script setup lang="ts">
import TopBar from "@/components/top-bar/index.vue";
import FileMenu from "@/modules/file-menu/index.vue";
import MarkdownEditor from "@/modules/markdown-editor/index.vue";
import MarkdownPreview from "@/modules/markdown-preview/index.vue";
</script>

<style scoped lang="scss">
.app {
  width: 100%;
  position: relative;
  .section {
    height: 100vh;
  }
}
</style>
