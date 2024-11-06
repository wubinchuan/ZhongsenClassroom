<script setup lang="ts">
import Banner from "./index/Banner.vue";

// 视频卡片列表请求接口

useHead({
  title: "小滴课堂 - 首页",
});
const test = reactive({ title: "专题内容", showMore: true, jumpLink: "/" });
</script>

<template>
  <div style="width: 1200px; min-width: 1200px">
    <div class="main">
      <!-- 轮播图 -->
      <div class="swiper">
        <Banner />
      </div>
    </div>
    <div flex justify-between>
        <div flex-1 p-2><notify-list></notify-list></div>
        <div flex-1 p-2><notify-list></notify-list></div>
        <div flex-1 p-2><notify-list></notify-list></div>
      </div>

      <div>
        <module-top v-model:ModuleTop="test"></module-top>
        <div flexb>
          <div w-250px text-center>
            <div>
              <img
                width="250"
                src="http://1.s140i.faiscm.com/2/AIwBCAAQAhgAIIfy6NcFKPXfn_EBMIAPOPsI!300x300.jpg"
              />
            </div>
            <div>“中国服务”·旅游产品创意案例征集活动及创新大会</div>
          </div>
          <div w-250px text-center>
            <div>
              <img
                width="250"
                src="http://1.s140i.faiscm.com/2/AIwBCAAQAhgAIIfy6NcFKPXfn_EBMIAPOPsI!300x300.jpg"
              />
            </div>
            <div>“中国服务”·旅游产品创意案例征集活动及创新大会</div>
          </div>
          <div w-250px text-center>
            <div>
              <img
                width="250"
                src="http://1.s140i.faiscm.com/2/AIwBCAAQAhgAIIfy6NcFKPXfn_EBMIAPOPsI!300x300.jpg"
              />
            </div>
            <div>“中国服务”·旅游产品创意案例征集活动及创新大会</div>
          </div>
          <div w-250px text-center>
            <div>
              <img
                width="250"
                src="http://1.s140i.faiscm.com/2/AIwBCAAQAhgAIIfy6NcFKPXfn_EBMIAPOPsI!300x300.jpg"
              />
            </div>
            <div>“中国服务”·旅游产品创意案例征集活动及创新大会</div>
          </div>
        </div>
        <div flexb>
          <div w-250px text-center>
            <div>
              <img
                width="250"
                src="http://1.s140i.faiscm.com/2/AIwBCAAQAhgAIIfy6NcFKPXfn_EBMIAPOPsI!300x300.jpg"
              />
            </div>
            <div>“中国服务”·旅游产品创意案例征集活动及创新大会</div>
          </div>
          <div w-250px text-center>
            <div>
              <img
                width="250"
                src="http://1.s140i.faiscm.com/2/AIwBCAAQAhgAIIfy6NcFKPXfn_EBMIAPOPsI!300x300.jpg"
              />
            </div>
            <div>“中国服务”·旅游产品创意案例征集活动及创新大会</div>
          </div>
          <div w-250px text-center>
            <div>
              <img
                width="250"
                src="http://1.s140i.faiscm.com/2/AIwBCAAQAhgAIIfy6NcFKPXfn_EBMIAPOPsI!300x300.jpg"
              />
            </div>
            <div>“中国服务”·旅游产品创意案例征集活动及创新大会</div>
          </div>
          <div w-250px text-center>
            <div>
              <img
                width="250"
                src="http://1.s140i.faiscm.com/2/AIwBCAAQAhgAIIfy6NcFKPXfn_EBMIAPOPsI!300x300.jpg"
              />
            </div>
            <div>“中国服务”·旅游产品创意案例征集活动及创新大会</div>
          </div>
        </div>
      </div>
  </div>
</template>

<style lang="less" scoped>

.main {
  display: flex;
  height: 400px;
  margin-bottom: 20px;

  .swiper {
    flex: 5;
    border-radius: 10px;
  }
}

.card-container {
  margin-bottom: 20px;
}

.two-card-container {
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
}
</style>
