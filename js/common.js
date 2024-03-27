//모바일 100vh 변환 자바스크립트//
document.querySelector("main").style.height = window.innerHeight - 60 + "px";

// 외부 HTML 파일을 가져오는 함수
function includeHTML(url, elementId) {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(elementId).innerHTML = html;
    })
    .catch((error) => console.error("Error fetching included HTML:", error));
}

// 가져올 HTML 파일의 URL과 삽입할 요소의 ID를 전달하여 includeHTML 함수를 호출
includeHTML("./header.html", "header");

//연결테스트 콘솔//
const a = () => {
  console.log("연결 테스트");
};

a();
