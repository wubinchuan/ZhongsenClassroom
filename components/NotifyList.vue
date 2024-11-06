<script lang="ts" setup>
import type { NotifyListObj, NotifyObj } from "~/types/api";
// const props = defineProps<NotifyListObj>()

const testNotifyListObj = reactive({
  notifyType: "通知公告",
  jumpLink: "/newsList",
  notifyObj: [
    {
      title: "信息标题信息标题信息标题信息标题信息标题信息标题信息标题信息标题",
      dateText: "2024-02-19",
      id: "111",
    },
    {
      title: "信息标信息标题1题2",
      dateText: "2024-03-19",
      id: "2222",
    },
    {
      title: "信息信息标题1标题3",
      dateText: "2024-04-19",
      id: "3333",
    },
    {
      title: "信息信息标题1标4",
      dateText: "2024-05-19",
      id: "4444",
    },
    {
      title: "信息信息标题1标题5",
      dateText: "2024-06-19",
      id: "555",
    },
  ],
});
// testNotifyListObj.notifyObj.forEach(element => {
//     if(element.title.length>20)

//     element.title=
// });
</script>

<template>
  <div style="width:100%;" mt-5>
    <div flexb style="border-bottom: 1px solid #ccc">
      <div
        style="
          color: #1e50ae;
          font-size: 18px;
          border-bottom: 3px solid #1e50ae;
          text-indent: 0.5em;
        "
      >
        {{ testNotifyListObj.notifyType }}
      </div>
      <div>
        <NuxtLink to="/newsList">更多>> </NuxtLink>
        <!-- <NuxtLink :to="testNotifyListObj.jumpLink">更多>> </NuxtLink> -->
      </div>
    </div>
    <div>
      <div
        v-for="notifyObj in testNotifyListObj.notifyObj"
        :key="notifyObj.id"
        style="
          cursor: pointer;
          border-bottom: 1px solid #ccc;
          text-indent: 0.5em;
        "
        flexb
        h-44px
      >
        <div truncate-1>{{ notifyObj.title }}</div>
        <div style="color: #cccccf; min-width: 100px; padding-left: 10px">
          {{ notifyObj.dateText }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
