<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/MainHeader.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import Footer from './components/MainFooter.vue';

</script>

<style>

</style>
