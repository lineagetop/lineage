// 자바스크립트 파일


/*ㅡㅡㅡㅡㅡhtml파일들에서 header 즉 Lineage를 눌렀을때 홈으로 이동되게ㅡㅡㅡㅡ */
function goHome() {
    window.location.href = "index.html"; // 홈으로 이동
}
/*ㅡㅡㅡㅡㅡhtml파일들에서 header 즉 Lineage를 눌렀을때 홈으로 이동되게ㅡㅡㅡㅡ */




/*ㅡㅡㅡㅡㅡㅡ각 메뉴들 중복코드로 인해 header.html파일로 분리ㅡㅡㅡㅡㅡ*/
//아래코드에 각 메뉴클릭했을시 해당메뉴로 이동되도록 코드삽입되있음

// header.html 파일을 가져와서 header-container에 삽입합니다.
fetch('header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header-container').innerHTML = data;

    // 네비게이션 메뉴의 각 링크에 active 클래스를 추가합니다.
    // 현재 URL 가져오기
    var currentUrl = window.location.href;

    // <nav> 요소에서 링크 찾기
    var navLinks = document.querySelectorAll('nav a');

    // 링크를 반복하여 현재 URL과 일치하는지 확인
    navLinks.forEach(function(link) {
        // 현재 링크의 href 속성값 가져오기
        var linkUrl = link.getAttribute('href');

        // 현재 URL과 링크의 href 속성값이 일치하는지 확인
        if (currentUrl.indexOf(linkUrl) !== -1) {
            // 현재 URL과 일치하는 링크에 active 클래스 추가
            link.classList.add('active');
        }
    });
})
.catch(error => console.error('Error:', error));
/*ㅡㅡㅡㅡㅡㅡㅡㅡ각 메뉴들 중복코드로 인해 header.html파일로 분리ㅡㅡㅡㅡㅡ*/




/*ㅡㅡㅡㅡㅡㅡㅡㅡㅡ자유게시판관련ㅡㅡㅡㅡㅡㅡㅡㅡㅡ */
// 포스트를 추가하는 함수
function addPost(username, content) {
    // 새로운 <li> 요소 생성
    var listItem = document.createElement("li");
    // 작성자와 내용을 포함한 텍스트 노드 생성
    var textNode = document.createTextNode(username + ": " + content);
    // 텍스트 노드를 <li> 요소에 추가
    listItem.appendChild(textNode);
    // <ul> 요소에 새로운 <li> 요소 추가
    document.getElementById("postList").appendChild(listItem);
}

// 글 올리기 폼 제출 이벤트 처리
document.getElementById("postForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 폼 제출 기본 동작 방지

    // 사용자 이름과 내용 가져오기
    var username = document.getElementById("username").value;
    var content = document.getElementById("content").value;

    // 포스트를 추가하는 함수 호출
    addPost(username, content);

    // 폼 내용 초기화
    document.getElementById("username").value = "";
    document.getElementById("content").value = "";
});
/*ㅡㅡㅡㅡㅡㅡㅡㅡㅡ자유게시판관련ㅡㅡㅡㅡㅡㅡㅡㅡㅡ */