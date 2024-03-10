<template>
  <header class="main-header">
    <div class="logo">
      <!-- 로고 이미지 -->
      <img src="../assets/logo.png" alt="로고">
    </div>
    <!-- 네비게이션 메뉴 -->
    <nav class="main-nav">
      <ul>
        <!-- Home 링크 -->
        <li> 
          <i class="fas fa-circle red"></i>
          <router-link to="/"> HOME</router-link>
        </li>
        <!-- About 링크 -->
        <li>
          <i class="fas fa-circle yellow"></i>
          <router-link to="/about"> PORTFOLIO</router-link>
        </li>
        <!-- Information 링크 -->
        <li>
          <i class="fas fa-circle green"></i>
          
          <router-link to="/information"> PROGRAMMING</router-link>
        </li>
        <li>
          <i class="fas fa-circle blue"></i>
          <router-link to="/information"> BOARD</router-link>
        </li>
      </ul>
    </nav>
    <!-- 오른쪽 아이콘 -->
    <div class="right-icons">
      <!-- 검색 버튼 -->
      <button class="search-btn" @click="goToSearch">
        <i class="fas fa-search"></i> 
      </button>
      <!-- 메뉴 버튼 -->
      <button class="menu-btn" @click="goToMenu">
        <i class="fas fa-bars"></i> 
      </button>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// 검색 페이지로 이동
const goToSearch = () => {
  router.push('/search');
};

// 메뉴 페이지로 이동
const goToMenu = () => {
  router.push('/menu');
};
</script>

<style scoped>
.fas.fa-search {
  color: #4EC9B0;
}
.fas.fa-bars {
  color: #569CD6;
}
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #1E1E1E;
  color: #0e0d0d;
  /* width: 80%;
  margin: 0 auto; */
}

.logo img {
  height: 40px;
  padding: 0 0 0 30px ;
}

.main-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.main-nav ul li {
  margin-right: 100px;
}

.main-nav ul li:last-child {
  margin-right: 0;
}

.main-nav ul li a {
  color: #808080;
  text-decoration: none;
}

.right-icons button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
}

.right-icons button i {
  margin-right: 5px;
  font-size: 24px;
}

.right-icons button img {
  width: 20px;
  height: 20px;
}

/* 아이콘 색상 클래스 */
.red {
  color: #ff0000dc; /* 빨강 */
}

.yellow {
  color: #ffc800ea; /* 노랑 */
}

.green {
  color: #0c9d0c; /* 초록 */
}

.blue {
  color: #1c1cc5; /* 파랑 */
}

</style>
