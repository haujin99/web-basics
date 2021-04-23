// 헤더 선택자
const headerEl = document.getElementById('header--main')
// 로고 선택자
const logoEl = document.getElementById('logo')
// 대체 로고 선택자
const logoE2 = document.getElementById('logo2')


// 윈도우에서 스크롤 이벤트가 발생하면 익명의 함수 동작
window.addEventListener("scroll", function() {
    // y축으로 스크롤 위치가 100px을 넘어가면
    if(window.scrollY >= 100) {
        // 헤더 요소의 색을 바꾼다.
        headerEl.style.backgroundColor = '#101820'
        // 로고를 보이지 않게 처리하고,
        logoEl.style.display = 'none'
        // 대체 로고를 보이게 처리한다.
        logoE2.style.display = 'block'
        // 헤더 높이 변경
        headerEl.style.height = '71.38px'
    }
    else {
        // 스크롤 위치가 100px 미만이면,
        // 헤더 요소의 색을 원래대로 돌린다.
        headerEl.style.backgroundColor = null
        // 로고를 보이게 처리하고,
        logoEl.style.display = 'block'
        // 대체 로고를 보이지 않게 처리한다.
        logoE2.style.display = 'none'
        // 헤더 높이 변경
        headerEl.style.height = null
        
    }
})
