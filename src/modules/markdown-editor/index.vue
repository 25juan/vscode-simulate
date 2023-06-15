<template>
  <div class="section markdown-editor">
    <vue-monaco-editor
      v-model:value="store.editorContent"
      :theme="store.theme"
      ref="editorRef"
      :language="store.language"
      :options="store.monacoEditorOptions"
      @mount="store.setEditorRef"
    />
  </div>
</template>

<script setup lang="ts">
import VueMonacoEditor from "@guolao/vue-monaco-editor";
import { useEditorConfigStore } from "@/store";
const store = useEditorConfigStore();
console.log(store.monacoEditorOptions);
</script>

<style lang="scss" scoped>
.markdown-editor {
  flex: 1;
}
</style>
