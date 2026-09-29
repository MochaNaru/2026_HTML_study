// .btn-menu 요소를 가져와 btn 변수에 저장
const btn = document.querySelector('.btn-menu');
// .main-nav 요소 가져와 nav 변수에 저장.
const nav = document.querySelector('.main-nav');

// 버튼을 클릭하면..
btn.addEventListener('click', () => {
    // nav 요소의 클래스에 'open-menu'를 토글한다.
    nav.classList.toggle('open-menu');
    // 만약 btn 요소의 innerHTML 이 'Menu'인 경우
    if(btn.innerHTML === 'Menu') {
        // btn 요소의 innerHTML을 'Close'로 변경
        btn.innerHTML = 'Close';
    } else {  // 아니면
        // btn 요소의 innerHTML을 'Menu'로 변경
        btn.innerHTML = 'Menu';
    }
});

// 다크 모드 버튼 

const themebtn = document.querySelector('.btn-theme');

themebtn.addEventListener('click', () => {
    // body에 'dark' 클래스를 붙였다 뗀다
    document.body.classList.toggle('dark');
    //body에 'dark' 클래스가 있으면 해 아이콘, 없ㅇ면 달 아이콘으로 변경
    if (document.body.classList.contains('dark')) {
        themebtn.innerHTML = '☀️';
    } else {
        themebtn.innerHTML = '🌙';
    }
});

// 신청 폼 글자 수 세기
const textarea = document.querySelector('.apply-textarea');
const charCount = document.querySelector('.char-count');

// 글자를 입력할 때마다('input' 이벤트 ) 실행
textarea.addEventListener('input', () => {
    const length = textarea.value.length;
    charCount.textContent = length + ' / 200자';

    // 180자 이상이면 경고 스타일(warn)을 붙이고, 아니면 뗀다.
    if (length >= 180) {
        charCount.classList.add('warn');
    } else {
        charCount.classList.remove('warn');
    }
});

//디지털 시계 (날짜 + 시각)

const clockDate = document.querySelector('.clock-date')
const clockTime = document.querySelector('.clock-time')
const days = [ '일', '월', '화', '수', '목', '금', '토']

function updateClock() {
    const now = new Date();

    // ---날짜---
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const day = days[now.getDay()];
    clockDate.textContent = year + '년 ' + month + '월 ' + date + '일 (' + day + ')';

    // ---시각---
    // String(값).padStart(2, '0') - 값을 글자로 바꾼 뒤, 두 자리가 되도록 앞에 '0'을 채움. (7 > 0)
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    clockTime.textContent = h + ':' + m + ':' + s;
}

updateClock(); // 함수 호출. 페이지를 열자마자 한 번 실행

// 정해진 시간(밀리초) 마다 함수를 계속 실행
setInterval(updateClock, 1000); // 이후 1초마다 반복 실행 