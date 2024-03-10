<template>
  <footer class="footer">
    <div class="content">
      <div class="left">
        <p><i class="fas fa-code-branch"></i> <strong>git url</strong><a href="https://github.com/XOHW91" target="_blank" class="link">github.com/XOHW91</a></p>
        <p><i class="fas fa-envelope"></i> <strong>mail</strong> <span class="orange">so91062412@gmail.com</span></p>
        <p><i class="fas fa-comment"></i> <strong>kakao ID</strong> <span class="orange">so4368</span></p>
      </div>
      <div class="right">
        <img src="/" alt="Footer Image">
      </div>
    </div>
  </footer>
</template>

<style scoped>
strong {
  margin-right: 30px;
}
.footer {
  padding: 20px 100px;
  background-color: #1E1E1E;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left {
  text-align: left;
  margin-left: 200px;
  color: white;
}

.right {
  margin-right: 260px;
}

.right img {
  max-width: 100%;
  height: auto;
}

.link {
  color: #00AA00; /* 링크의 기본 색상 설정 */
  text-decoration: none; /* 밑줄 제거 */
}

.link:visited {
  color: #00AA00; /* 방문한 링크의 색상 설정 */
}

.orange {
  color: #00AA00; /* 주황색으로 설정 */
}
</style>
