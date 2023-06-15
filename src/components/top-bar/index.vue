<template>
  <div class="top-bar">
    <div class="top-bar__menu">
      文件(F)
      <ul class="top-bar__menu-sub">
        <li>新建文本文件</li>
        <li>新建文件</li>
        <li>打开工作空间</li>
      </ul>
    </div>
    <div class="top-bar__menu">编辑(E)</div>
    <div class="top-bar__menu">选择(S)</div>
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
  color: #333;
  &__menu {
    padding: 0 12px;
    line-height: $menu-height;
    position: relative;
    &::before {
      content: " ";
      position: absolute;
      height: 70%;
      width: 90%;
      left: 5%;
      top: 15%;
      background-color: #fff;
      z-index: -1;
      border-radius: 6px;
      transition: background 0.3s;
    }
    &:hover {
      cursor: default;
      .top-bar__menu-sub {
        display: block;
      }
    }
    &:hover::before,
    .active {
      background-color: #eee;
    }
    &-sub {
      border: solid 1px #ddd;
      background-color: #fff;
      display: none;
      position: fixed;
      bottom: 0;
      list-style: none;
      z-index: 2;
      top: $menu-height;
      & > li {
        height: 40px;
        padding: 0 20px;
        line-height: 40px;
      }
    }
  }
}
</style>
