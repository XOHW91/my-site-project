import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 CSS 파일 import
import 'bootstrap'; // 부트스트랩 JS 파일 import

const app = createApp(App);
app.use(router); // 앱에 라우터 추가
app.mount('#app');
