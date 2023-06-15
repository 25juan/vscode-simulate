<template>
  <div class="top-bar">
    <div class="top-bar__menu">
      <span>文件(F)</span>
      <!-- <ul class="top-bar__menu-sub">
        <li>新建文本文件</li>
        <li>新建文件</li>
        <li>打开工作空间</li>
      </ul> -->
    </div>
    <div class="top-bar__menu">
      <span>编辑(E)</span>
    </div>
    <div class="top-bar__menu">
      <span>选择(S)</span>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped lang="scss">
$menu-height: 40px;
.top-bar {
  width: 100%;
  height: $menu-height;
  z-index: 9;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 14px;
  background-color: var(--top-bar-bg);
  color: var(--top-bar-color);
  &__menu {
    padding: 0 6px;
    line-height: $menu-height;
    position: relative;
    & > span {
      display: inline-block;
      position: relative;
      padding: 4px 6px;
      line-height: 1;
      background-color: transparent;
      z-index: 1;
      border-radius: 6px;
      transition: background 0.3s;
    }
    &:hover {
      cursor: default;
      .top-bar__menu-sub {
        display: block;
      }
    }
    &:hover > span {
      background-color: var(--top-bar-hover-color);
    }
    // &-sub {
    //   border: solid 1px #ddd;
    //   background-color: #fff;
    //   display: none;
    //   position: fixed;
    //   bottom: 0;
    //   list-style: none;
    //   z-index: 2;
    //   top: $menu-height;
    //   & > li {
    //     height: 40px;
    //     padding: 0 20px;
    //     line-height: 40px;
    //   }
    // }
  }
}
</style>
