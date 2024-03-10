<template>
  <div class="status-view">
    <div>
      <!-- 일러스트 이미지 -->
      <div class="illustration">
        <img src="https://via.placeholder.com/200x200" alt="Illustration">
      </div>
      <div class="title">
        <i class="fas fa-upload icon"></i>
        <h3>최근 활동들</h3>
      </div>
    </div>
   
    <!-- 박스 세 개 -->
    <div class="boxes">
      <div class="box box1"></div>
      <div class="box box2"></div>
      <div class="box box3"></div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.title {
  display: flex;
  align-items: center;
}

.icon {
  font-size: 24px;
  margin-right: 10px;
  color: #569CD6; /* 아이콘 색상 변경 */
}

h3 {
  color: white;
}

.status-view {
  display: flex;
  justify-content: space-between; /* 각 요소 사이의 여백을 동일하게 분배 */
  align-items: center; /* 수직 가운데 정렬 */
  height: 400px; /* 높이 설정 */
  margin-top: 100px;
}

.illustration {
  display: flex;
  align-items: center; /* 수직 가운데 정렬 */
  margin-bottom: 30px;
}

.illustration img {
  max-width: 200px;
  height: auto;
}

.boxes {
  display: flex;
  gap: 1px;
  align-items: center; /* 수직 가운데 정렬 */
  margin-right: 30px;
  margin-left: 50px;
  height: 400px;
}

.box {
  width: 240px;
  height: 250px;
  background-color: #f0f0f0;
  border: 1px solid #ccc; /* 보더 추가 */
  border-radius: 8px; /* 라운드 처리 */
  margin-left: 10px;
  margin-right: 20px;
}

/* 박스 1 상위 정렬 */
.box1 {
  align-self: flex-start;
}

/* 박스 2 가운데 정렬 */
.box2 {
  align-self: center;
}

/* 박스 3 아래 정렬 */
.box3 {
  align-self: flex-end;
}
</style>
