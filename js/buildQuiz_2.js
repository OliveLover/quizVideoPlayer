// 퀴즈 초깃값
var answerFlag = true;
var solutionFlag = true;
var completeQuiz = false;
var selectAnswerFlag = false;
var questionNumber = 1;
var userAnswer = 0;
var chance = 1;
var quizSize = Object.keys(quizInfo_2).length;
var quizRecord = Array.from({ length: quizSize }, () => ({
  userAnswer: 0,
  result: false,
}));

/****************************************
              퀴즈 준비 화면
 ****************************************/
function createScreenView() {
  var screen_txt = "";
  screen_txt += "<div id='screenView'>";
  screen_txt += "<div class='screenViewTitle'>사전 진단 테스트</div>";
  screen_txt += "</div>";
  document.getElementById("quizWrap").innerHTML = screen_txt;

  var screenView = document.getElementById("screenView");

  var startQuizButton = document.createElement("button");
  startQuizButton.className = "quizButtonStyle";
  startQuizButton.innerText = "퀴즈시작";
  startQuizButton.onclick = function () {
    screenView.style.display = "none";
    createQuiz(questionNumber);
  };

  // 버튼을 표시할 위치 선택
  var buttonContainer = document.getElementById("screenView");
  // 버튼을 위치에 추가
  buttonContainer.appendChild(startQuizButton);
}

/****************************************
                퀴즈 화면
 ****************************************/

function createQuiz(questionNumber) {
  answerFlag = true;
  solutionFlag = true;
  selectAnswerFlag = false;
  userAnswer = 0;

  // 마지막 문제인지 확인하고, 마지막 문제라면 completeQuiz를 true로 설정
  if (questionNumber >= quizSize) {
    completeQuiz = true;
  }

  var quiz_txt = "";
  quiz_txt += '<div class = "questionWrap">';
  quiz_txt += '<div class="answerResultCheck"></div>';
  quiz_txt += '<div class="quizQuestion" >';
  quiz_txt += "<h2>" + quizInfo_2[questionNumber][0].question + "</h2>";
  quiz_txt += "</div>";
  quiz_txt += '</div>';
  quiz_txt += '<div class="multipleChoice">';
  quiz_txt += '<div class="choice check1">';
  quiz_txt += '<div class=viewAnswer1><p>정답</p></div>';
  quiz_txt += '<div class="checkImg1"></div>';
  quiz_txt += '<div class="choiceImg1" onclick="selectAnswer(1)"></div>'
  quiz_txt +=
    '<p class="look1" onclick="selectAnswer(1)">' +
    quizInfo_2[questionNumber][1].select +
    "</p>";
  quiz_txt += "</div>";
  quiz_txt += '<div class="choice check2">';
  quiz_txt += '<div class=viewAnswer2><p>정답</p></div>';
  quiz_txt += '<div class="checkImg2"></div>';
  quiz_txt += '<div class="choiceImg2" onclick="selectAnswer(2)"></div>'
  quiz_txt +=
    '<p class="look2" onclick="selectAnswer(2)">' +
    quizInfo_2[questionNumber][2].select +
    "</p>";
  quiz_txt += "</div>";
  quiz_txt += '<div class="choice check3">';
  quiz_txt += '<div class=viewAnswer3><p>정답</p></div>';
  quiz_txt += '<div class="checkImg3"></div>';
  quiz_txt += '<div class="choiceImg3" onclick="selectAnswer(3)"></div>'
  quiz_txt +=
    '<p class="look3" onclick="selectAnswer(3)" >' +
    quizInfo_2[questionNumber][3].select +
    "</p>";
  quiz_txt += "</div>";
  quiz_txt += '<div class="choice check4">';
  quiz_txt += '<div class=viewAnswer4><p>정답</p></div>';
  quiz_txt += '<div class="checkImg4"></div>';
  quiz_txt += '<div class="choiceImg4" onclick="selectAnswer(4)"></div>'
  quiz_txt +=
    '<p class="look4" onclick="selectAnswer(4)">' +
    quizInfo_2[questionNumber][4].select +
    "</p>";
  quiz_txt += "</div>";
  quiz_txt += "</div>";
  quiz_txt += '<div class="explainQuiz"></div>';
  document.getElementById("quizWrap").innerHTML = quiz_txt;

  console.log(questionNumber);
  //배경 이미지 설정
  var backgroundImage = "url('./image/afterQuiz.png')";
  document.getElementById("quizWrap").style.backgroundImage = backgroundImage;
}

/****************************************
              퀴즈 결과 화면
 ****************************************/

function createResult() {
  var result_txt = "";
  result_txt += '<div class="resultTitle">';
  result_txt += "<h2>퀴즈 결과</h2>";
  result_txt += "</div>";
  result_txt += '<div class="quizResult">';

  var correctCount = 0;

  result_txt += '<div class="quizReview">';
  for (var i = 0; i < quizSize; i++) {
    result_txt += '<div class="quizReview">';
    result_txt += '<div class="quizCheckWrap">';
    result_txt += '<div class="quizNumber">';
    result_txt += "Q" + (i + 1);
    result_txt += '</div>';
    result_txt += '<div class="quizCheck">';
    if (quizRecord[i].result === true) {
      result_txt += '<img src="./image/redCircle.png">';
      correctCount++;
    } else {
      result_txt += '<img src="./image/redX.png">';
    }
    result_txt += '</div>';
    result_txt += '</div>';
    result_txt += '</div>';
  }
  result_txt += '</div>';

  result_txt += "</div>";

  result_txt += '<div class="quizGrade">';
  result_txt += '총 <span style="color:red; margin-top:5px;">';
  result_txt += quizSize;
  result_txt += '</span>';
  result_txt += ' 개의 문제 중';
  result_txt += '<span style="color:red;margin-top: 5px;" >';
  result_txt += correctCount;
  result_txt += '</span>';
  result_txt += '문제를 맞히셨습니다.';
  result_txt += "</div>";

  document.getElementById("quizWrap").innerHTML = result_txt;

  var replayQuizBtn = document.createElement("button");
  replayQuizBtn.className = "quizButtonStyle2";
  replayQuizBtn.innerText = "다시 풀기";
  replayQuizBtn.onclick = function () {
    window.location.href = "09.html";
  };

  // 버튼을 표시할 위치 선택
  var buttonContainer = document.getElementById("quizWrap");
  // 버튼을 위치에 추가
  buttonContainer.appendChild(replayQuizBtn);

  var backgroundImage = "url('./image/PQuizResult.png')";
  document.getElementById("quizWrap").style.backgroundImage = backgroundImage;

  // "다음페이지로 이동" 버튼 생성
  var nextPageButton = document.createElement("button");
  nextPageButton.className = "quizButtonStyle";
  nextPageButton.innerText = "다음페이지로 이동";
  nextPageButton.onclick = function () {
    window.location.href = "10.html"; // 다음 페이지의 URL을 여기에 입력해주세요.
  };

  // 버튼을 표시할 위치 선택
  var buttonContainer = document.getElementById("quizWrap");
  // 버튼을 위치에 추가
  buttonContainer.appendChild(nextPageButton);
}

function selectAnswer(number) {
  console.log("selectAnswer 호출");
  if (!selectAnswerFlag) {
    var checkImage1 = document.querySelector('.checkImg1');
    var checkImage2 = document.querySelector('.checkImg2');
    var checkImage3 = document.querySelector('.checkImg3');
    var checkImage4 = document.querySelector('.checkImg4');

    checkImage1.style.display = "none";
    checkImage2.style.display = "none";
    checkImage3.style.display = "none";
    checkImage4.style.display = "none";

    var choiceImg1 = document.querySelector('.choiceImg1');
    var choiceImg2 = document.querySelector('.choiceImg2');
    var choiceImg3 = document.querySelector('.choiceImg3');
    var choiceImg4 = document.querySelector('.choiceImg4');

    choiceImg1.style.backgroundImage = 'url("./image/choice1.png")';
    choiceImg2.style.backgroundImage = 'url("./image/choice2.png")';
    choiceImg3.style.backgroundImage = 'url("./image/choice3.png")';
    choiceImg4.style.backgroundImage = 'url("./image/choice4.png")';

    var look1 = document.querySelector('.look1');
    var look2 = document.querySelector('.look2');
    var look3 = document.querySelector('.look3');
    var look4 = document.querySelector('.look4');

    look1.style.color = "black";
    look2.style.color = "black";
    look3.style.color = "black";
    look4.style.color = "black";

    userAnswer = number;

    // 체크 이미지 표시
    var checkImg = document.querySelector('.checkImg' + number);
    checkImg.style.display = 'block';

    // 체크한 숫자 표시
    var selectChoiceImg = document.querySelector('.choiceImg' + number);
    selectChoiceImg.style.backgroundImage = 'url("./image/selected' + number + '.png")';

    // 체크한 답안 표시
    var selectedLook = document.querySelector('.look' + number);
    selectedLook.style.color = "red";

    submitAnswer(userAnswer);
  }
  console.log("selectAnswer -> userAnswer : " + userAnswer);
}

function submitAnswer(userAnswer) {
  selectAnswerFlag = true;
  checkAnswer(userAnswer);

}

function checkAnswer(userAnswer) {
  quizRecord[questionNumber - 1].userAnswer = userAnswer;
  var answer = quizInfo_2[questionNumber][0].correct;
  if (Number(quizInfo_2[questionNumber][0].correct) === Number(userAnswer)) {
    console.log("선택지 : " + userAnswer);
    console.log("퀴즈 정답 : " + answer);
    console.log("정답");
    quizRecord[questionNumber - 1].result = true;
    solutionQUiz();
    showCorrectAnswer(answer);
  } else {
    quizRecord[questionNumber - 1].result = false;

    if (chance > 0) {
      chance--;
      selectAnswerFlag = false;
      window.alert("틀렸습니다. 한 번의 기회가 남았습니다.");
    } else {
      chance = 1;
      solutionQUiz();
      showWrongAnswer(answer);

      if (completeQuiz) {
        // 결과 확인 버튼 생성
        var resultButton = document.createElement("button");
        resultButton.className = "quizButtonStyle";
        resultButton.id = "resultButton";
        resultButton.innerText = "결과 확인";
        resultButton.onclick = function () {
          var result_txt = "";
          document.getElementById("quizWrap").innerHTML = result_txt;
          createResult();
        };

        // 버튼을 표시할 위치 선택
        var buttonContainer = document.getElementById("quizWrap");
        // 버튼을 위치에 추가
        buttonContainer.appendChild(resultButton);
      } else {
        // 다음 퀴즈로 이동하는 버튼 생성
        var nextButton = document.createElement("button");
        nextButton.className = "quizButtonStyle";
        nextButton.id = "nextButton";
        nextButton.innerText = "다음 퀴즈로 이동";

        nextButton.onclick = function () {
          questionNumber++;
          createQuiz(questionNumber);
          solutionFlag = true;
        };

        // 버튼을 표시할 위치 선택
        var buttonContainer = document.getElementById("quizWrap");
        // 버튼을 위치에 추가
        buttonContainer.appendChild(nextButton);
      }
    }
  }
}


function solutionQUiz() {
  var solution_txt = "";
  solution_txt += "<div>" + "<span style='color:red; font-weight:bold;'>해설 <br></span>" + quizInfo_2[questionNumber][0].explain + "</div>";

  // 풀이 내용이 없는 경우에만 추가
  if (solutionFlag) {
    var solutionElement = document.getElementsByClassName("explainQuiz")[0];;
    solutionElement.innerHTML = solution_txt;
    // 다음 퀴즈로 넘어가는 버튼 생성
    var nextButton = document.createElement("button");
    nextButton.className = "quizButtonStyle";

    if (completeQuiz) {
      nextButton.id = "resultButton";
      nextButton.innerText = "결과 확인";
      nextButton.onclick = function () {
        createResult();
      };
    } else {
      nextButton.id = "nextButton";
      nextButton.innerText = "다음 퀴즈로 이동";

      nextButton.onclick = function () {
        questionNumber++;

        createQuiz(questionNumber);
        solutionFlag = true;
      };
    }

    // 버튼을 표시할 위치 선택
    var buttonContainer = document.getElementById("quizWrap");
    // 버튼을 위치에 추가
    buttonContainer.appendChild(nextButton);
    solutionFlag = false;
  }
}

function changeImage(element, newImage) {
  element.src = newImage;
}

function showCorrectAnswer(answer) {
  if (answerFlag) {
    var quizQuestionElement = document.querySelector(".answerResultCheck");
    var correctAnswerImage = document.createElement("img");
    correctAnswerImage.src = "./image/redCircle1.png";
    quizQuestionElement.appendChild(correctAnswerImage);
    chance = 1;

    var answerView = document.querySelector(".viewAnswer" + answer + ">p");
    answerView.style.display = "flex";
  }

  answerFlag = false;
}

function showWrongAnswer(answer) {
  if (answerFlag) {
    var quizQuestionElement = document.querySelector(".answerResultCheck");
    var wrongAnswerImage = document.createElement("img");
    wrongAnswerImage.src = "./image/wrongCheck.png";
    quizQuestionElement.appendChild(wrongAnswerImage);

    var answerView = document.querySelector(".viewAnswer" + answer + ">p");
    answerView.style.display = "flex";
  }
  answerFlag = false;
}

window.onload = function () {
  createScreenView();
}