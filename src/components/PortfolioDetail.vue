<template>
  <div class="title">
      <!-- <h2>RECENT PROJECT</h2> -->
  </div>
  <div class="portfolio-detail">
    <div class="portfolio-left">
      <img src="../assets/kta_tamas.png" alt="이미지">
    </div>
    <div class="portfolio-right">
      <h2>호텔등급평가 평가시스템</h2>
      <p>이미지에 대한 설명이 들어갈 부분입니다.</p>
    </div>
  </div>
</template>

<script setup>
// 스크립트 로직이 필요한 경우 작성
</script>

<style scoped>
h2 {
color: #ffff;
}

.code-icon {
color: #4EC9B0; /* 아이콘 색상 변경 */
font-size: 20px;
}

.title {
margin-top: 50px;
}

.portfolio-detail {
display: flex;
justify-content: space-between;
align-items: flex-start;
height: 500px;
margin-top: 10px;
}

.portfolio-left {
flex: 1;
padding: 20px;
align-self: flex-start;
background-color: #800080;
border-radius: 10px;
}

.portfolio-left img {
width: 650px;
height: 450px;
}

.portfolio-right {
flex: 1;
padding: 20px;
align-self: flex-start;
}

.portfolio-right p {
font-size: 16px;
line-height: 1.6;
color: #333;
}
</style>
