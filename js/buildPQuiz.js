/****************************************
              사전 퀴즈 화면
 ****************************************/
function createPQuiz () {
    console.log("creatPQuiz 실행");
    var pQuiz_txt ="";
    pQuiz_txt += '<div class="pQuizTitle">';
    pQuiz_txt += "<h2>사전 진단 Test!</h2>";
    pQuiz_txt += "</div>";
    pQuiz_txt += '<div class="pQuizWrap">';
    pQuiz_txt += '<div class="pQuizQuestionWrap">';
    pQuiz_txt += '<div class="pQuizQuestion">';
    pQuiz_txt += 'ddd';
    pQuiz_txt += '</div>';
    pQuiz_txt += '<div class="pQuizMultipleChoice">';
    pQuiz_txt += 'O';
    pQuiz_txt += '</div>';
    pQuiz_txt += '</div>';
    pQuiz_txt += '</div>';

    document.getElementById("quizWrap").innerHTML = pQuiz_txt;
}