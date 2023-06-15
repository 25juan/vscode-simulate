<template>
  <TopBar :menu="menu" />
</template>

<script lang="ts" setup>
import TopBar from "@/components/top-bar/index.vue";
const children = [
      {
        title: "新建文本文件",
        shortKey: "Ctrl+N",
      },
      {
        title: "新建文件",
        shortKey: "Ctrl+Alt+Windows+N",
      },
      {
        title: "新建窗口",
        shortKey: "Ctrl+Shift+N",
      },
      {
        title: "打开文件",
        shortKey: "Ctrl+O",
      },
      {
        title: "打开文件夹",
        shortKey: "Ctrl+K Ctrl+O",
      },
    ]
const menu = $ref([
  {
    title: "文件(F)",
    children ,
  },
  {
    title: "编辑(E)",
    children ,
  },
  {
    title: "选择(E)",
    children ,
  },
  {
    title: "查看(v)",
    children ,
  },
  {
    title: "转到(G)",
    children ,
  },
  {
    title: "运行(G)",
    children ,
  },
  {
    title: "终端(T)",
    children ,
  },
  {
    title: "帮助(T)",
    children ,
  },
]);
</script>
<style lang="scss" scoped></style>
