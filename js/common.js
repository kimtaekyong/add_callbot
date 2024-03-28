//모바일 100vh 변환 자바스크립트//
document.querySelector("main").style.height = window.innerHeight - 60 + "px";

function checkMobileDevice() {
  const userAgent = navigator.userAgent;
  if (userAgent.match(/iPhone|iPod|iPad/i)) {
    // 아이폰이나 아이팟, 아이패드인 경우
    document.body.classList.add("iphone");
  } else if (userAgent.match(/Android/i)) {
    // 안드로이드 기기인 경우
    document.body.classList.add("android");
  }
}

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
includeHTML("header.html", "header");

// 납입 방법에 대한 체크박스 관련 스크립트
const togglePaymentSelection = () => {
  const creditCardRadio = document.getElementById("creditCard");
  const bankTransferRadio = document.getElementById("bankTransfer");
  const creditCardMenu = document.getElementById("creditCardMenu");
  const bankTransferMenu = document.getElementById("bankTransferMenu");

  creditCardRadio.addEventListener("click", () => {
    bankTransferRadio.checked = false;
    creditCardMenu.classList.remove("hidden");
    bankTransferMenu.classList.add("hidden");
  });

  bankTransferRadio.addEventListener("click", () => {
    creditCardRadio.checked = false;
    creditCardMenu.classList.add("hidden");
    bankTransferMenu.classList.remove("hidden");
  });
};
// 납입방법 show / hide 처리 및 애니메이션 컨트롤
const togglePaymentMenu = () => {
  const paymentopenBtn = document.getElementById("payment__open_btn");
  const paymentMenu = document.getElementById("pay__menu");

  paymentMenu.style.display = "none";

  paymentopenBtn.addEventListener("click", () => {
    paymentopenBtn.classList.toggle("active");
    if (paymentopenBtn.classList.contains("active")) {
      paymentMenu.style.display = "block";
    } else {
      paymentMenu.style.display = "none";
    }
  });
};
// 카드번호 최대 20자리 제한
function handleOnInput(el, maxlength) {
  if (el.value.length > maxlength) {
    el.value = el.value.substr(0, maxlength);
  }
}
//연결테스트 콘솔//
const a = () => {
  console.log("연결 테스트");
};
// 뒤로가기 버튼 클릭 시 이벤트 처리
const goBackButton = document.getElementById("clear_btn");
goBackButton.addEventListener("click", () => {
  window.history.back(); // 뒤로가기 기능을 수행하는 window.history.back() 함수 호출
});

// 페이지가 로드되면 사용자 디바이스 정보를 확인하여 스타일 적용
window.onload = function () {
  checkMobileDevice();
};
a();
togglePaymentSelection();
togglePaymentMenu();
goBackButton();
