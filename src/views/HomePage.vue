<template>
  <div class="content">
    <main-visual></main-visual>
    <main-content></main-content>
    <portfolio-detail></portfolio-detail>
    <status-view></status-view>
  </div>
</template>

<script setup>
import MainVisual from '../components/MainVisual.vue';
import MainContent from '@/components/MainContent.vue';
import PortfolioDetail from '@/components/PortfolioDetail.vue'
import StatusView from '@/components/StatusView.vue'
</script>

<style scoped>
.content {
  max-width: 1100px;
  height: 1900px;
  margin: 100px auto;
  padding: 10px;
  background-color: #2B2B2B;
}

.main-content {
  margin-top: 10px; /* 원하는 여백 설정 */
}

.main-visual {
  margin-bottom: 10px; /* 메인 비주얼과 메인 컨텐츠 사이 여백 */
}

</style>
