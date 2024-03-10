<template>
  <div class="container">
    <div class="square-box left-align">
      <table>
        <tr><td class="left-cell" colspan="2"><i class="fas fa-code purple"></i> <span class="left-align-text"> INTRODUCE</span></td></tr>
        <tr><td class="left-cell bug-icon"><i class="fas fa-bug"></i></td><td>나는 박희원입니다.</td></tr>
        <tr><td class="left-cell">2</td><td>내용</td></tr>
        <tr><td class="left-cell">3</td><td>내용</td></tr>
        <tr><td class="left-cell">4</td><td>내용</td></tr>
        <tr><td class="left-cell">5</td><td>내용</td></tr>
        <tr><td class="left-cell">6</td><td>내용</td></tr>
        <tr><td class="left-cell">7</td><td>내용</td></tr>
      </table>
    </div>
    <div class="square-box right-align">
      <table>
        <tr><td class="left-cell" colspan="2"><i class="fas fa-wrench blue"></i> <span class="left-align-text"> SKILL</span></td></tr>
        <tr><td class="left-cell">1</td><td></td></tr>
        <tr><td class="left-cell">2</td><td>Java · JSP · MVC </td></tr>
        <tr><td class="left-cell"><i class="fas fa-circle red circle-red-icon"></i></td><td>Spring boot · Spring Security · Spring JPA </td></tr>
        <tr><td class="left-cell">4</td><td>Vue3 · JavaScript · JQuery · Ajax </td></tr>
        <tr><td class="left-cell">5</td><td>Maria DB · MySQL · MariaDB </td></tr>
        <tr><td class="left-cell">6</td><td>jwt · RESTFUL API · GitHub</td></tr>
        <tr><td class="left-cell">7</td><td></td></tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 350px;
}

.square-box {
  height: 260px;
  background-color: #1E1E1E;
  padding: 10px;
}

.left-align {
  width: 50%; /* 3열로 나누기 위해 너비를 조절 */
}

.right-align {
  width: 80%; /* 3열로 나누기 위해 너비를 조절 */
  margin-left: 5%; /* 오른쪽 여백 */
}

table {
  width: 100%;
  height: 100%;
}

td {
  text-align: center;
  color: white;
  font-size: 18px;
}

td.left-cell {
  background-color: #2B2B2B; /* 왼쪽 열의 배경색 */
  color: #808080;
  width: 50px;
  border-right: 0.3px solid #808080; /* 왼쪽 열의 오른쪽 선 색상 설정 */
}

td.left-cell[colspan] {
  border-right: none; /* colspan을 가진 셀의 오른쪽 선 제거 */
  border-bottom: 0.3px solid #808080; 
}

.bug-icon i {
  color: #00FF00; /* 초록색으로 변경 */
}

.circle-red-icon {
  color: #FF0000; /* 빨간색으로 변경 */
}

.fa-database.white {
  color: white; /* 하얀색으로 변경 */
}

.fa-code.purple {
  color: #800080; /* 보라색으로 변경 */
}

td:nth-child(even) {
  background-color: #1E1E1E;
}

.left-align-text {
  margin-left: 0; /* 왼쪽으로 여백 초기화 */
  display: inline-block; /* 인라인 블록 요소로 변경 */
  text-align: left; /* 왼쪽 정렬 */
}

.blue {
  color: #00AA00; /* 파란색으로 변경 */
}
</style>
