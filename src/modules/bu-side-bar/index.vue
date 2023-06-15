<template>
  <div class="bu-side-bar">
    <div class="bu-side-bar__top">
      <!-- <div class="x-icon x-icon-list"></div> -->
      <div class="x-icon x-icon-file"></div>
      <div class="x-icon x-icon-search"></div>
      <div class="x-icon x-icon-git"></div>
      <div class="x-icon x-icon-debug"></div>
      <div class="x-icon x-icon-plugin"></div>
    </div>
    <div class="x-icon x-icon-user"></div>
    <div class="x-icon x-icon-setting"></div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.bu-side-bar {
  width: 48px;
  background-color: var(--side-bar-bg);
  height: 100%;
  display: flex;
  flex-direction: column;
  .x-icon {
    line-height: 48px;
    font-size: 24px;
  }

  &__top {
    flex: 1;
    padding-top: 8px;
  }
}
</style>
