<template>
  <div class="top-bar">
    <div
      v-for="(m, idx) in menu"
      :key="idx"
      class="top-bar__menu"
      @click="handleMenuClick(m,idx,$event)"
    >
      <span>{{ m.title }}</span>
    </div>
    <div v-if="subMenuInfo.show" :style="subMenuInfo.style" class="top-bar__sub">
      <div
      v-for="(m, idx) in menu[subMenuInfo.selectIndex]?.children || []"
      :key="idx"
      class="top-bar__sub-menu select-none"
      @click="handleSubMenuClick(m)"
    >
      <span class="top-bar__sub-title">{{ m.title }}</span>
      <span class="top-bar__sub-key">{{m.shortKey}}</span>
    </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineEmits(["click"]);
const props = defineProps<{ menu: Array<ITopMenu> }>();
const subMenuInfo = reactive({
    show: false,
    selectIndex: 0,
    style: {
      left: 0,
      top: 0
    }
});
const handleMenuClick = (menu: ITopMenu, idx: number, event) => {
  const rect = event.target.getBoundingClientRect()
  subMenuInfo.style.left = rect.left + 'px'
  subMenuInfo.style.top = rect.bottom + 10 + 'px'
  if(subMenuInfo.selectIndex === idx) {
    subMenuInfo.show = !subMenuInfo.show
  }else {
    subMenuInfo.show = true
  }
  subMenuInfo.selectIndex = idx;
};
const handleSubMenuClick = (m)=>{
  subMenuInfo.show = false
  console.log(m)
}
</script>

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
    }
    &:hover > span {
      background-color: var(--top-bar-hover-color);
    }
  }
  &__sub {
      border: solid 1px var(--editor-bg);
      display: block;
      position: fixed;
      list-style: none;
      z-index: 2;
      box-show: 2px 2px 6px #000;
      cursor: default;
      background-color: var(--editor-bg);
      border-radius: 8px;
      &-menu {
        padding: 0 16px;
        line-height: 40px;
        font-size:14px;
        color: var(--editor-color);
        display: flex;
        flex-direction: row;
        &:hover {
          background-color: var(--editor-hover-color);
        }
      }
      &-title {
        display: inline-block;
        padding-right: 40px;
      }
      &-key {
        flex: 1;
        text-align: right;
      }
      
    }
}
</style>
