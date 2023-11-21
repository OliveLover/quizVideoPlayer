var pQuizSize = pQuizInfo.length;
var pQuizSubmitted = false;
var pQuizCorrect = 0;
var pQuizRecord = Array.from({ length: pQuizSize }, () => ({
  userAnswer: null,
  result: false,
}));

/****************************************
              사전 퀴즈 화면
 ****************************************/
function createPQuiz() {
  pQuizCorrect = 0;
  var pQuiz_txt = "";
  pQuiz_txt += '<div class="pQuizContainer">';
  pQuiz_txt += '<div class="pQuizSubHeading">';
  pQuiz_txt += '<div>차시</div>';
  pQuiz_txt += '<div>번호</div>';
  pQuiz_txt += '<div>문항</div>';
  pQuiz_txt += '<div>그렇다</div>';
  pQuiz_txt += '<div>아니다</div>';
  pQuiz_txt += '</div>';

  for (var i = 0; i < pQuizSize; i++) {
    pQuiz_txt += '<div class="pQuizQuestionWrap">';
    pQuiz_txt += '<div class="pQuizCheck">';
    pQuiz_txt += pQuizInfo[i].number;
    pQuiz_txt += '</div>';
    pQuiz_txt += '<div class="pQuizNumber"></div>';
    pQuiz_txt += '<div class="pQuizQuestion">';
    pQuiz_txt += pQuizInfo[i].question;
    pQuiz_txt += "</div>";
    // pQuiz_txt += '<div class="pQuizMultipleChoiceY">';
    pQuiz_txt += "<div class='pQuizMultipleChoiceY'>";
    pQuiz_txt +=
      '<input type="radio" name="pQuizAnswer_' +
      i +
      '" value="true" onclick="recordUserAnswer(' +
      i +
      ', true)">';
    pQuiz_txt += "</div>";
    pQuiz_txt += "<div class='pQuizMultipleChoiceN'>";
    pQuiz_txt +=
      '<input type="radio" name="pQuizAnswer_' +
      i +
      '" value="false" onclick="recordUserAnswer(' +
      i +
      ', false)">';
    pQuiz_txt += "</div>";
    // pQuiz_txt += "</div>";
    pQuiz_txt += "</div>";
  }

  pQuiz_txt += "</div>";

  document.getElementById("pQuizWrap").innerHTML = pQuiz_txt;
  var backgroundImage = "url('./image/pQuiz_bg_empty.png')";
  document.getElementById("pQuizWrap").style.backgroundImage = backgroundImage;

  // 제출 버튼 생성
  var submitButton = document.createElement("button");
  submitButton.className = "pQuizButtonStyle";
  submitButton.id = "submitBtn";
  submitButton.innerText = "제출";
  submitButton.onclick = function () {
    submitQuiz();
  };

  // 버튼을 표시할 위치 선택
  var buttonContainer = document.getElementById("pQuizWrap");
  // 모든 정답지에 체크되었을 때만 제출 버튼을 추가
  buttonContainer.appendChild(submitButton);
}

/****************************************
            사전 퀴즈 결과 화면
 ****************************************/

function createPQuizResult() {
  console.log("pQuizRecord : " + JSON.stringify(pQuizRecord));
  var pQuizResult_txt = "";
  pQuizResult_txt += '<div class ="pQuizContainer">';
  pQuizResult_txt += '<div class="pQuizScore">';
  pQuizResult_txt += pQuizCorrect + " / " + pQuizSize;
  pQuizResult_txt += "</div>";
  pQuizResult_txt += '<div class ="pQuizGrade">';
  pQuizResult_txt += '<img class="emoticon" src=""></img >';
  pQuizResult_txt += getGrade(pQuizCorrect);
  pQuizResult_txt += "</div>";
  pQuizResult_txt += "</div>";

  document.getElementById("pQuizWrap").innerHTML = pQuizResult_txt;
  // 배경 이미지 설정
  var backgroundImage = "url('./image/pQuizResult.png')";
  document.getElementById("pQuizWrap").style.backgroundImage = backgroundImage;

  // Emoticon 이미지 설정
  var emoticonImg = document.querySelector(".emoticon");
  if (pQuizCorrect === pQuizSize) {
    emoticonImg.src = "./image/smile.png";
  } else if (pQuizCorrect / pQuizSize >= 0.6) {
    emoticonImg.src = "./image/neutral.png";
  } else {
    emoticonImg.src = "./image/sad.png";
  }

  // 제출 버튼 생성
  var goToNextPageBtn = document.createElement("button");
  goToNextPageBtn.className = "quizButtonStyle";
  goToNextPageBtn.id = "goToNextPageBtn";
  goToNextPageBtn.innerText = "다음페이지로 이동";
  goToNextPageBtn.onclick = function () {
    window.location.href = "03.html";
  };

  // 버튼을 표시할 위치 선택
  var buttonContainer = document.getElementById("pQuizWrap");
  // 버튼을 위치에 추가
  buttonContainer.appendChild(goToNextPageBtn);
}

// 유저의 답변을 기록하는 함수
function recordUserAnswer(index, answer) {
  // 선택된 답변을 기록합니다.
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
    var imgElement = document.getElementsByClassName("pQuizCheckImage")[i];
    if (pQuizRecord[i].result) {
      imgElement.src = "./image/redCircle.png";
      pQuizCorrect++;
    } else {
      imgElement.src = "./image/redX.png";
    }
  }

  console.log("pQuizRecord : " + JSON.stringify(pQuizRecord));

  // 여기에서 pQuizRecord를 활용하여 제출 처리 로직을 작성할 수 있습니다.
}

function getGrade(pQuizCorrect) {
  console.log(pQuizCorrect);
  console.log(pQuizSize);
  if (pQuizCorrect === pQuizSize) {
    return "훌륭해요!";
  } else if (pQuizCorrect / pQuizSize >= 0.6) {
    return "노력하세요!";
  } else {
    return "분발하세요!";
  }
}
