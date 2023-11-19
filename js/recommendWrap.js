/****************************************
              추천 영상 화면
 ****************************************/

function createRecommend() {
    var recommend_txt = "";
    recommend_txt += '<div class="recommendTitle">';
    recommend_txt += '봐주셔서 감사합니다.';
    recommend_txt += '</div >';
    recommend_txt += '<div class="recommendLinkWrap">';
    recommend_txt += '<div class="recommendPreview">';
    recommend_txt += '<div class="recommendImg">';
    recommend_txt += '<img src="./image/recommend_01.png" style="background-position:">'
    recommend_txt += '</div >';
    recommend_txt += '</div >';
    recommend_txt += '<div class="recommendPreview">';
    recommend_txt += '<div class="recommendImg">';
    recommend_txt += '<img src="./image/recommend_01.png" style="background-position:">'
    recommend_txt += '</div >';
    recommend_txt += '</div >';
    recommend_txt += '<div class="recommendPreview">';
    recommend_txt += '<div class="recommendImg">';
    recommend_txt += '<img src="./image/recommend_01.png" style="background-position:">'
    recommend_txt += '</div >';
    recommend_txt += '</div > ';
    recommend_txt += '</div >';
    recommend_txt += '<div class="recommendLink"><a href="https://www.eniedu.co.kr/course" style="text-decoration:none; font-size:30px;">추천영상 링크 바로가기</a></div>';

    document.getElementById("recommendWrap").innerHTML = recommend_txt;
}