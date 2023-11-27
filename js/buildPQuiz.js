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
  pQuiz_txt += '<div class="pQuizTitleWrap">';
  pQuiz_txt += '<div class="pQuizTitle">사전 진단 TEST</div>';
  pQuiz_txt += '<div class="pQuizGuide">문항에 따라 맞으면 <span style="color:red; font-weight:bold">O</span>, 틀리면 <span style="color:red; font-weight:bold">X</span>를 선택하여 주세요.<br> 사전 지식 테스트 결과에 따라 학습 가이드가 제시되니 신중하게 참여해 주세요.</div>';
  pQuiz_txt += '</div>';
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
    pQuiz_txt += '<span class="numberCheck" style="display:none; color:red;">' + pQuizInfo[i].number + '</span >';
    pQuiz_txt += '</div>';
    pQuiz_txt += '<div class="pQuizNumber">';
    pQuiz_txt += i + 1;
    pQuiz_txt += '</div>';
    pQuiz_txt += '<div class="pQuizQuestion">';
    pQuiz_txt += pQuizInfo[i].question;
    pQuiz_txt += "</div>";
    pQuiz_txt += "<div class='pQuizMultipleChoiceY'>";
    pQuiz_txt +=
      '<input type="radio" style="width:20px; height:20px;" name="pQuizAnswer_' +
      i +
      '" value="true" onclick="recordUserAnswer(' +
      i +
      ', true)">';
    pQuiz_txt += "</div>";
    pQuiz_txt += "<div class='pQuizMultipleChoiceN'>";
    pQuiz_txt +=
      '<input type="radio" style="width:20px; height:20px;" name="pQuizAnswer_' +
      i +
      '" value="false" onclick="recordUserAnswer(' +
      i +
      ', false)">';
    pQuiz_txt += "</div>";
    pQuiz_txt += "</div>";
  }

  pQuiz_txt += "</div>";

  /************ 퀴즈 결과 팝업 ************/
  pQuiz_txt += "<div class='pQuizResult-popUp' id='pQuizResultPopUp'>";
  pQuiz_txt += "<div class='pQuizResultWrap'>";
  pQuiz_txt += "<div class='pQuizResultTitleWrap'>";
  pQuiz_txt += "<div id='pQuizResultImgWrap'>";
  pQuiz_txt += "</div>";
  pQuiz_txt += "<div id='pQuizResultGradeWrap'>";
  pQuiz_txt += "</div>";
  pQuiz_txt += "</div>";
  pQuiz_txt += "<div class='pQuizResultContentWrap'>dddddd</div>";
  pQuiz_txt += "</div>";
  pQuiz_txt += "</div>";

  /************ 결과별 학습자료 다운로드 ************/
  pQuiz_txt += "<div id='learning-materials'>";
  pQuiz_txt += "<div class='pointWrap'>";
  pQuiz_txt += "<a href='#' id='downloadLink' download>학습자료 다운로드</a>";
  pQuiz_txt += "<div style='width:140px; height:1px; border-bottom:2px solid;margin-top:4px;'></div>";
  pQuiz_txt += "</div>";
  pQuiz_txt += "<div class='pointImgWrap'>";
  pQuiz_txt += "<img src='./image/click.png' style='margin-left:10px width:45px;height:45px'></img>";
  pQuiz_txt += "</div>";
  pQuiz_txt += "</div>";

  document.getElementById("pQuizWrap").innerHTML = pQuiz_txt;
  var backgroundImage = "url('./image/pQuiz_bg.png')";
  document.getElementById("pQuizWrap").style.backgroundImage = backgroundImage;

}

/****************************************
            사전 퀴즈 결과 화면
 ****************************************/

// 유저의 답변을 기록하는 함수
function recordUserAnswer(index, answer) {
  // 선택된 답변을 기록합니다.
  pQuizRecord[index].userAnswer = answer;
  var checkCount = 0;
  for (var i = 0; i < pQuizSize; i++) {
    if (pQuizRecord[i].userAnswer !== null) {
      checkCount++;
    }
  }

  if (checkCount === pQuizSize) {
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

}

// 퀴즈 제출 처리 함수
function submitQuiz() {
  var submitBtn = document.getElementById("submitBtn");
  var popUp = document.getElementById("pQuizResultPopUp");
  var numberCheck = document.getElementsByClassName("numberCheck");
  var materials = document.getElementById("learning-materials");

  popUp.style.display = "block";

  submitBtn.remove();

  var resultButton = document.createElement("button");
  resultButton.className = "pQuizButtonStyle";
  resultButton.id - "resultBtn";
  resultButton.innerText = "결과 확인";
  resultButton.onclick = function () {
    for (var i = 0; i < numberCheck.length; i++) {
      numberCheck[i].style.display = "block";
    }
    popUp.style.display = "none";
    materials.style.display = "flex";
    resultButton.remove();

    // "다음페이지로 이동" 버튼 생성
    var nextPageButton = document.createElement("button");
    nextPageButton.className = "pQuizButtonStyle";
    nextPageButton.innerText = "다음페이지로 이동";
    nextPageButton.onclick = function () {
      window.location.href = "03.html"; // 다음 페이지의 URL을 여기에 입력해주세요.
    };

    // 버튼을 표시할 위치 선택
    var buttonContainer = document.getElementById("pQuizWrap");
    // 버튼을 위치에 추가
    buttonContainer.appendChild(nextPageButton);
  };

  var buttonContainer = document.getElementById("pQuizWrap");
  buttonContainer.appendChild(resultButton);

  for (var i = 0; i < pQuizSize; i++) {
    var userAnswer = pQuizRecord[i].userAnswer;
    var correctAnswer = pQuizInfo[i].correct;

    if (userAnswer === correctAnswer) {
      pQuizCorrect++;
      pQuizRecord[i].result = userAnswer;
    }
  }

  getGrade(pQuizCorrect);
}

function getGrade(pQuizCorrect) {
  var image = document.getElementById("pQuizResultImgWrap");
  var downloadLink = document.getElementById("downloadLink");
  var gradeText = document.getElementById("pQuizResultGradeWrap");
  if (pQuizCorrect / pQuizSize >= 0.8) {
    image.style.background = "url('./image/smile.png') no-repeat";
    image.style.backgroundSize = "cover";
    downloadLink.href = "./download/[사전진단학습] 수준별 학습자료 - 우수.pdf";
    gradeText.textContent = "\"우수\"";
    return "우수";
  } else {
    image.style.background = "url('./image/neutral.png') no-repeat";
    image.style.backgroundSize = "cover";
    downloadLink.href = "./download/[사전진단학습] 수준별 학습자료 - 미흡.pdf";
    gradeText.textContent = "\"미흡\"";
    return "미흡";
  }
}