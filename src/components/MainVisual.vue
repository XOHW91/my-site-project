<template>
  <div class="top">
    <div class="top-left">
      <div class="text-area">
        <h1>변수명을 만들어 드립니다.</h1>
        <p>변수의 조건을 입력하면 조건에 맞는 변수명을 만들어 드립니다.</p>
      </div>
      <div class="search-bar">
        <!-- 검색바 요소 -->
        <input type="text" placeholder=" Search value..." v-model="searchQuery">
        <button class="search-btn" @click="goToSearch">
          <i class="fas fa-search"></i> <!-- 돋보기 아이콘 -->
        </button>
      </div>
    </div>
    <div class="top-right">
      <div class="carousel" @mouseover="stopSlide" @mouseleave="startSlide">
        <div class="carousel-item" v-for="(image, index) in carouselImages" :key="index" :class="{ 'active': index === currentIndex }">
          <img :src="image.src" :alt="'Slide ' + (index + 1)" class="carousel-image">
        </div>
        <div class="navigation">
          <button class="nav-btn prev" @click="prevSlide">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="nav-btn next" @click="nextSlide">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const searchQuery = ref('');
const router = useRouter();
const interval = ref(null);

// 캐러셀 이미지 배열
const carouselImages = ref([
  { src: require('@/assets/kta_tamas.png') },
  { src: 'https://via.placeholder.com/800x400/3498DB/FFFFFF' },
  { src: 'https://via.placeholder.com/800x400/27AE60/FFFFFF' },
]);

// 현재 슬라이드 인덱스
const currentIndex = ref(0);

// 검색 페이지로 이동
const goToSearch = () => {
  router.push(`/search?query=${searchQuery.value}`);
};
// 이전 슬라이드로 이동
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + carouselImages.value.length) % carouselImages.value.length;
};

// 다음 슬라이드로 이동
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % carouselImages.value.length;
};


// 슬라이드 자동 재생 시작
const startSlide = () => {
  interval.value = setInterval(() => {
    nextSlide();
  }, 2000);
};

// 슬라이드 자동 재생 중지
const stopSlide = () => {
  clearInterval(interval.value);
};

// 컴포넌트가 마운트될 때 자동 재생 시작
onMounted(() => {
  startSlide();
});

// 컴포넌트가 언마운트될 때 clearInterval을 통해 interval 정리
onUnmounted(() => {
  clearInterval(interval.value);
});
</script>

<style scoped>
p{
  color: #808080;
  margin-top: 25px;
}
h1{
  color: #ffff;
}
.top {
  display: flex;
  gap: 60px;
  margin-bottom: 10px;
}

.top-left,
.top-right {
  flex: 1;
  background-color: #2B2B2B;
  padding: 20px;
  max-width: 800px;
  height: 400px;
  margin-bottom: 50px;
}

.text-area {
  width: 96%;
  height: 200px;
  overflow: auto;
  padding: 10px;
  border: 1px solid #2B2B2B;
  border-radius: 5px;
  margin-top: 40px;
}

.search-bar {
  margin-top: 10px;
  display: flex;
  align-items: center;
}

.search-bar input {
  flex: 1;
  width: 120px;
  height: 50px;
  padding: 8px;
  font-size: 14px;
  border: 3px solid #1E1E1E;
  border-radius: 30px;
  background-color: #1E1E1E;
  color: #ffff; /* 바꾸고 싶은 글자색 설정 */
}

.search-bar button.search-btn {
  padding: 8px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 14px;
  margin-left: -18px;
  border-radius: 5px;
  width: 40px;
  border: 1px solid #504f4f;
}

.search-bar button.search-btn i {

}

.search-bar button.search-btn:focus {
  outline: none;
}

.carousel {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-item {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.carousel-item img.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지를 부모 요소에 맞춰서 자르고 크기를 조절 */
}

.carousel-item.active {
  display: block;
}

.navigation {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.nav-btn {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  font-size: 24px;
  cursor: pointer;
  transition: background 0.3s;
}

.nav-btn:hover {
  background: rgba(0, 0, 0, 0.7);
}

.nav-btn.prev {
  left: 10px;
}

.nav-btn.next {
  right: 10px;
}
</style>
