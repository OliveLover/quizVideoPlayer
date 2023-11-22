/****************************************
              추천 영상 화면
 ****************************************/

function createRecommend() {
    var recommend_txt = "";
    recommend_txt += '<div class="recommendLinkWrap">';
    recommend_txt += '<div class="recommendPreview">';
    recommend_txt += '<div class="recommendImg">';
    recommend_txt += '<a href="' + recommendInfo[0].link + '">';
    recommend_txt += '<img src="./image/recommend_01.png" style="background-position:">';
    recommend_txt += '</a>';
    recommend_txt += '</div >';
    recommend_txt += '<div><a href=';
    recommend_txt += recommendInfo[0].link;
    recommend_txt += '>';
    recommend_txt += recommendInfo[0].title;
    recommend_txt += '</a ></div > ';
    recommend_txt += '</div >';
    recommend_txt += '<div class="recommendPreview">';
    recommend_txt += '<div class="recommendImg">';
    recommend_txt += '<a href="' + recommendInfo[1].link + '">';
    recommend_txt += '<img src="./image/recommend_02.png" style="background-position:">';
    recommend_txt += '</a>';
    recommend_txt += '</div >';
    recommend_txt += '<div><a href=';
    recommend_txt += recommendInfo[1].link;
    recommend_txt += '>';
    recommend_txt += recommendInfo[1].title;
    recommend_txt += '</a ></div > ';
    recommend_txt += '</div >';
    recommend_txt += '<div class="recommendPreview">';
    recommend_txt += '<div class="recommendImg">';
    recommend_txt += '<a href="' + recommendInfo[1].link + '">';
    recommend_txt += '<img src="./image/recommend_03.png" style="background-position:">';
    recommend_txt += '</a>';
    recommend_txt += '</div >';
    recommend_txt += '<div><a href=';
    recommend_txt += recommendInfo[2].link;
    recommend_txt += '>';
    recommend_txt += recommendInfo[2].title;
    recommend_txt += '</a ></div > ';
    recommend_txt += '</div > ';
    recommend_txt += '</div >';
    recommend_txt += '<div class="recommendLink"><a href="https://www.eniedu.co.kr/course">추천영상 링크 바로가기</a></div>';

    document.getElementById("recommendWrap").innerHTML = recommend_txt;
}