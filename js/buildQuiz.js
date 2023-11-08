// 퀴즈 정보를 가져와서 퀴즈를 생성하는 함수
function createQuiz() {
  // 퀴즈를 생성할 요소를 선택합니다.
  var quizElement = document.querySelector(".quiz");

  var quiz_txt = "";
  quiz_txt += '<div class="quizQuestion" >';
  quiz_txt += "<h2>" + quizInfo[1][0].question + "</h2>";
  quiz_txt += "</div>";
  quiz_txt += '<div class="quizChoice">';
  quiz_txt += '<div class="choice">';
  quiz_txt += '<img src="./image/playBtn.png">';
  quiz_txt += "<p>" + quizInfo[1][1].select + "</p>";
  quiz_txt += "</div>";
  quiz_txt += '<div class="choice">';
  quiz_txt += '<img src="./image/playBtn.png">';
  quiz_txt += "<p>" + quizInfo[1][2].select + "</p>";
  quiz_txt += "</div>";
  quiz_txt += '<div class="choice">';
  quiz_txt += '<img src="./image/playBtn.png">';
  quiz_txt += "<p>" + quizInfo[1][3].select + "<br/></p>";
  quiz_txt += "</div>";
  quiz_txt += '<div class="choice">';
  quiz_txt += '<img src="./image/playBtn.png">';
  quiz_txt += "<p>" + quizInfo[1][4].select + "<br/></p>";
  quiz_txt += "</div>";
  quiz_txt += "</div>";
  document.getElementById("quizWrap").innerHTML = quiz_txt;
}

// // createQuiz 함수를 호출하여 퀴즈를 생성합니다.
// createQuiz();
