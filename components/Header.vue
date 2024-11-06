<script setup lang="ts">
const selectedKeys = ref<string[]>(["1"]);
const openKeys = ref<string[]>(["sub1"]);
const handleClick = (e: Event) => {
  console.log("click", e);
};
const titleClick = (e: Event) => {
  console.log("titleClick", e);
};
watch(
  () => openKeys,
  (val) => {
    console.log("openKeys", val);
  }
);
</script>

<template>
  <div class="header-container">
    <div class="header">
      <div class="center-tab">
        <NuxtLink class="logo" to="/">
          <a-image
            :preview="false"
            :width="180"
            :height="59"
            src="/images/logo.png"
          />
        </NuxtLink>
        <div class="navbar">
          <NuxtLink to="/">首页</NuxtLink>
          <div class="dropdown">
            <button class="dropbtn">
              关于协会
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <NuxtLink to="/"><div flexc>协会简介</div></NuxtLink>
              <NuxtLink to="/"><div flexc>领导机构</div></NuxtLink>
              <NuxtLink to="/"><div flexc>分支机构</div></NuxtLink>
              <NuxtLink to="/"><div flexc>联系我们</div></NuxtLink>

              
            </div>
          </div>
          <NuxtLink to="/">会员专区#</NuxtLink>

          <div class="dropdown">
            <button class="dropbtn">
              新闻动态
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <NuxtLink to="/"><div flexc>行业新闻</div></NuxtLink>
              <NuxtLink to="/"><div flexc>协会动态</div></NuxtLink>
             
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">
              专题内容
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <NuxtLink to="/"><div flexc>分类显示</div></NuxtLink>
              <NuxtLink to="/"><div flexc>视频播放</div></NuxtLink>
           
            </div>
          </div>
          <NuxtLink to="/">行业报告#</NuxtLink>
          <NuxtLink to="/">团体标准#</NuxtLink>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.register {
  background-color: #4d555d;
  padding: 2px;
  width: 60px;
  height: 30px;
  color: white;
  text-align: center;
  line-height: 26px;
}

.header-container {
  display: flex;
  flex-basis: 1200px;

  min-width: 1200px;
  height: 67px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0px 0px 5px 0px #d7d7d7;
}

.header {
  flex-basis: 1200px;
  display: flex;
  height: 72px;
  align-items: center;
  font-size: 16px;
  justify-content: space-between;

  .center-tab {

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #4f555d;

    &:hover {
      color: #f38e48;
    }
  }

  .active {
    color: orange;
  }

  & > * {
    cursor: pointer;
    user-select: none;
  }

  .logo img {
    width: 138px;
    height: 63px;
    line-height: 62px;
    font-size: 0;
  }
}

.navbar {
 margin-left: 50px;
  overflow: hidden;
}

.navbar a {
  float: left;
  display: block;
  color: #333333;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
  transition: background 0.5s ease;
}

.navbar a:hover,
.dropdown:hover .dropbtn {
  // background-color: #002c4a;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  border: none;
  outline: none;
  color: #4f555d;
  padding: 14px 20px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  // background-color: #30220a;
}

.dropdown:hover .dropdown-content {

  display: block;
}

</style>
