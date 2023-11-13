var pQuizSize = pQuizInfo.length;
var pQuizSubmitted = false;
var pQuizRecord = Array.from({ length: pQuizSize }, () => ({
  userAnswer: null,
  result: false,
}));

/****************************************
              사전 퀴즈 화면
 ****************************************/
function createPQuiz() {
  console.log("creatPQuiz 실행");
  console.log("pQuizeRecord : " + JSON.stringify(pQuizRecord));
  var pQuiz_txt = "";
  pQuiz_txt += '<div class="pQuizTitle">';
  pQuiz_txt += "<h2>사전 진단 Test!</h2>";
  pQuiz_txt += "</div>";
  pQuiz_txt += '<div class="pQuizContainer">';

  for (var i = 0; i < pQuizSize; i++) {
    pQuiz_txt += '<div class="pQuizQuestionWrap">';
    pQuiz_txt += '<img class="pQuizCheck"></img>';
    pQuiz_txt += '<div class="pQuizQuestion">';
    pQuiz_txt += pQuizInfo[i].question;
    pQuiz_txt += "</div>";
    pQuiz_txt += '<div class="pQuizMultipleChoice">';
    pQuiz_txt += "<label>";
    pQuiz_txt +=
      '<input type="checkbox" name="pQuizAnswer_' +
      i +
      '" value="true" onclick="recordUserAnswer(' +
      i +
      ', true)">';
    pQuiz_txt +=
      '<img class="pQuizChoiceImage" src="./image/redCircle.png"></img>';
    pQuiz_txt += "</label>";
    pQuiz_txt += "<label>";
    pQuiz_txt +=
      '<input type="checkbox" name="pQuizAnswer_' +
      i +
      '" value="false" onclick="recordUserAnswer(' +
      i +
      ', false)">';
    pQuiz_txt += '<img class="pQuizChoiceImage" src="./image/redX.png"></img>';
    pQuiz_txt += "</label>";
    pQuiz_txt += "</div>";
    pQuiz_txt += "</div>";
  }

  pQuiz_txt += "</div>";
  pQuiz_txt += '<button onclick="submitQuiz()" id="submitBtn">제출</button>';

  document.getElementById("pQuizWrap").innerHTML = pQuiz_txt;
}

function createPQuizResult() {
  console.log("creatPQuiz 실행");
  console.log("pQuizeRecord : " + JSON.stringify(pQuizRecord));
  var pQuizResult_txt = "";
  pQuizResult_txt += '<div class = "pQuizTitle">';
  pQuizResult_txt += "<h2>사전 진단 Test 결과</h2>";
  pQuizResult_txt += "</div > ";
  pQuizResult_txt += '<div class ="pQuizContainer">';
  pQuizResult_txt += '<div class="pQuizScore">';
  pQuizResult_txt += "</div>";
  pQuizResult_txt += '<div class ="pQuizGrade">';
  pQuizResult_txt += "</div>";
  pQuizResult_txt += "</div>";

  document.getElementById("pQuizWrap").innerHTML = pQuizResult_txt;
}

// 유저의 답변을 기록하는 함수
function recordUserAnswer(index, answer) {
  pQuizRecord[index].userAnswer = answer;
}

// 퀴즈 제출 처리 함수
function submitQuiz() {
  console.log("pQuizRecord : " + JSON.stringify(pQuizRecord));
  var submitBtn = document.getElementById("submitBtn");

  if (!pQuizSubmitted) {
    submitBtn.textContent = "결과 확인";
    pQuizSubmitted = true;
  } else {
    createPQuizResult();
  }

  for (var i = 0; i < pQuizSize; i++) {
    var userAnswer = pQuizRecord[i].userAnswer;
    var correctAnswer = pQuizInfo[i].correct;
    pQuizRecord[i].result = userAnswer === correctAnswer;

    // 이미지 src 변경
    var imgElement = document.getElementsByClassName("pQuizCheck")[i];
    if (pQuizRecord[i].result) {
      imgElement.src = "./image/redCircle.png";
    } else {
      imgElement.src = "./image/redX.png";
    }
  }

  console.log("pQuizRecord : " + JSON.stringify(pQuizRecord));

  // 여기에서 pQuizRecord를 활용하여 제출 처리 로직을 작성할 수 있습니다.
}
