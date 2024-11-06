
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
 
//视频文件链接
 
onMounted(() => {
  videojs(document.querySelector('.video-js')!, {
    sources: [{
      src: 'http://30202081.s21v.faiusr.com/58/ABUIABA6GAAg-O2ArwYoprXpnAM.mp4',
      type: 'video/mp4'
    }],
    //播放速度
    playbackRates: [0.5, 1, 1.5, 2, ],
    //加载热键
    userActions: {
      hotkeys:{
      }
    },
  }); 
});
</script>

<template>
  <div style="height: 800px; width: 800px;">

    <video ref="myPlay" controls style="height: 100%; width: 100%"
    class="video-js vjs-default-skin vjs-big-play-centered" />
  </div>


  
</template>

<style scoped>
.TEXT {
  font-size: 20px;
}

.PLANT {
  color: white;
  -webkit-text-stroke: 2px black;
}

.COMMON_1 {
  color: #7dfd4b;
}

.COMMON_2 {
  color: #5094ea;
}

.COMMON_3 {
  color: #fdb34b;
}

.COMMON_4 {
  color: #ea50cb;
}

.COMMON_5 {
  color: #ee1a30;
}
</style>
