<template>
  <div class="layout">
    <!-- 顶部菜单栏 -->
    <div class="layout__top">
      <BuTopBar></BuTopBar>
    </div>
    <div class="layout__content">
      <!-- 最左侧图标菜单栏 -->
      <div class="layout__content-side"><BuSideBar /></div>
      <!-- 文件目录菜单操作区域 -->
      <div class="layout__content-file">
        <BuWorkSpace></BuWorkSpace>
      </div>
      <!-- 编辑区域 -->
      <div class="layout__content-editor">
        <BuEditor />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BuTopBar from "@/modules/bu-top-bar/index.vue";
import BuSideBar from "@/modules/bu-side-bar/index.vue";
import BuWorkSpace from "@/modules/bu-work-space/index.vue";
import BuEditor from "@/modules/bu-editor/index.vue";
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  &__content {
    height: calc(100vh - 40px);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    & > div {
      height: 100%;
    }
    &-editor {
      flex: 1;
    }
  }
}
</style>
