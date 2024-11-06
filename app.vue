<script setup>
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'ant-design-vue/es/message/style/css'
import 'ant-design-vue/es/notification/style/css'




useHead({
  title: '小滴课堂', meta: [
    { name: "description", content: "小滴课堂的网站" },
    { name: "keywords", content: "vue3教程,微服务教程,nuxt3教程" },
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage :key="$route.fullPath" />
  </NuxtLayout>
</template>

<style lang='less'>
@import '~/assets/reset.less';
</style>



