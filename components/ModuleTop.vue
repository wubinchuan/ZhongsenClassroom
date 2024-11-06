<script lang="ts" setup>
interface IModuleTop {
  ModuleTop: {
    title: string;
    showMore: boolean;
    jumpLink: string;
  };
}
const moduleTopObj = defineProps<IModuleTop>();
console.log(moduleTopObj);
</script>

<template>
  <div
    style="margin: 10px 0px; width: 100%; border-bottom: 1px solid #1e50ae"
    flexb
  >
    <div
      style="
        padding: 10px;
        background-color: #1e50ae;
        color: white;
        /* border-radius: 10px; */
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      "
    >
      {{ moduleTopObj.ModuleTop.title }}
    </div>
    <div v-if="moduleTopObj.ModuleTop.showMore" style="color: cccccf">更多>></div>
  </div>
</template>

<style lang="less" scoped></style>
