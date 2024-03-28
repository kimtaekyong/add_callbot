// 연도 선택 셀렉트 박스 생성
const yearSelect = document.getElementById("yearSelect");
const currentYear = new Date().getFullYear();
const startYear = currentYear - 10; // 현재 연도로부터 10년 전부터 선택 가능하도록 설정
for (let year = startYear; year <= currentYear; year++) {
  const option = document.createElement("option");
  option.value = year;
  option.textContent = year + "년";
  yearSelect.appendChild(option);
}

// 월 선택 셀렉트 박스 생성
const monthSelect = document.getElementById("monthSelect");
const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
months.forEach((month, index) => {
  const option = document.createElement("option");
  option.value = index + 1; // 월은 1부터 시작하므로 인덱스에 1을 더합니다.
  option.textContent = month;
  monthSelect.appendChild(option);
});
