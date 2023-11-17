/****************************************
              추천 영상 화면
 ****************************************/

function createRecommend() {
    var recommend_txt = "";
    recommend_txt += '<div class="recommendTitle">';
    recommend_txt += '봐주셔서 감사합니다.';
    recommend_txt += '</div >';
    recommend_txt += '<div class="recommendLinkWrap">';
    recommend_txt += '<div class="recommendLink">';
    recommend_txt += '<div img src="./image/recommend_01.jpg" style="background-position:"></div>';
    recommend_txt += '</div >';
    recommend_txt += '<div class="recommendLink">';
    recommend_txt += '<div class="recommendImg"></div>';
    recommend_txt += '</div >';
    recommend_txt += '<div class="recommendLink">';
    recommend_txt += '<div class="recommendText">추천 강의</div>';
    recommend_txt += '</div >';
    recommend_txt += '<div class="recommendLink">';
    recommend_txt += '<div class="recommendImg"></div>';
    recommend_txt += '</div > ';
    recommend_txt += '</div >';

    document.getElementById("recommendWrap").innerHTML = recommend_txt;
}