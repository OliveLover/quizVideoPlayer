// 퀴즈 초깃값
var answerFlag = true;
var solutionFlag = true;
var completeQuiz = false;
var selectAnswerFlag = false;
var userAnswer = 0;
var quizSize = Object.keys(quizInfo).length;
var quizRecord = Array.from({ length: quizSize }, () => ({
  userAnswer: 0,
  result: false,
}));

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
  quiz_txt += '<div class="quizQuestion" >';
  quiz_txt += "<h2>" + quizInfo[questionNumber][0].question + "</h2>";
  quiz_txt += "</div>";
  quiz_txt += '<div class="multipleChoice">';
  quiz_txt += '<div class="choice check1">';
  quiz_txt += '<img src="./image/playBtn.png" onclick="selectAnswer(1)">';
  quiz_txt +=
    '<p onclick="selectAnswer(1)">' +
    quizInfo[questionNumber][1].select +
    "</p>";
  quiz_txt += "</div>";
  quiz_txt += '<div class="choice check2">';
  quiz_txt += '<img src="./image/playBtn.png" onclick="selectAnswer(2)">';
  quiz_txt +=
    '<p onclick="selectAnswer(2)">' +
    quizInfo[questionNumber][2].select +
    "</p>";
  quiz_txt += "</div>";
  quiz_txt += '<div class="choice check3">';
  quiz_txt += '<img src="./image/playBtn.png" onclick="selectAnswer(3)">';
  quiz_txt +=
    '<p onclick="selectAnswer(3)" >' +
    quizInfo[questionNumber][3].select +
    "</p>";
  quiz_txt += "</div>";
  quiz_txt += '<div class="choice check4">';
  quiz_txt += '<img src="./image/playBtn.png" onclick="selectAnswer(4)">';
  quiz_txt +=
    '<p onclick="selectAnswer(4)">' +
    quizInfo[questionNumber][4].select +
    "</p>";
  quiz_txt += "</div>";
  quiz_txt += "</div>";
  quiz_txt += '<div class="explainQuiz"></div>';
  document.getElementById("quizWrap").innerHTML = quiz_txt;

  console.log(questionNumber);
  //배경 이미지 설정
  var backgroundImage = "url('./image/" + (questionNumber) + ".jpg')";
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

  // 퀴즈의 개수만큼 quizReview div를 생성
  for (var i = 0; i < quizSize; i++) {
    result_txt += '<div class="quizReview">';
    result_txt += "<h2>";
    result_txt += i + 1;
    result_txt += "</h2>";

    // result 값에 따라 이미지 추가
    if (quizRecord[i].result === true) {
      result_txt += '<img src="./image/redCircle.png">';
      correctCount++;
    } else {
      result_txt += '<img src="./image/redX.png">';
    }

    result_txt += "</div>";
  }

  result_txt += "</div>";

  result_txt += '<div class="quizGrade">';
  result_txt += "정답률: " + ((correctCount / quizSize) * 100).toFixed(2) + "%";
  result_txt += "</div>";
  document.getElementById("quizWrap").innerHTML = result_txt;

  var backgroundImage = "url('./image/" + (questionNumber) + ".jpg')";
  document.getElementById("quizWrap").style.backgroundImage = backgroundImage;

  // "다음페이지로 이동" 버튼 생성
  var nextPageButton = document.createElement("button");
  nextPageButton.className = "buttonStyle";
  nextPageButton.innerText = "다음페이지로 이동";
  nextPageButton.onclick = function () {
    window.location.href = "09.html"; // 다음 페이지의 URL을 여기에 입력해주세요.
  };

  // 버튼을 표시할 위치 선택
  var buttonContainer = document.getElementById("quizWrap");
  // 버튼을 위치에 추가
  buttonContainer.appendChild(nextPageButton);
}

function selectAnswer(number) {
  console.log("selectAnswer 호출");
  if (!selectAnswerFlag) {
    var images = document.querySelectorAll('.choice img');
    for (var i = 0; i < 4; i++) {
      images[i].src = './image/playBtn.png';
    }

    var selectedImage = document.querySelector('.choice.check' + number + ' img');
    selectedImage.src = './image/check.png';

    userAnswer = number;

    // 제출 버튼 생성
    var submitButton = document.createElement("button");
    submitButton.className = "buttonStyle";
    submitButton.id = "submitButton";
    submitButton.innerText = "제출";
    submitButton.onclick = function () {
      submitAnswer(userAnswer);
    };

    // 버튼을 표시할 위치 선택
    var buttonContainer = document.getElementById("quizWrap");
    // 버튼을 위치에 추가
    buttonContainer.appendChild(submitButton);
  }
  console.log("selectAnswer -> userAnswer : " + userAnswer);
}

function submitAnswer(userAnswer) {
  selectAnswerFlag = true;
  checkAnswer(userAnswer);

  // 제출 버튼 제거
  var submitButton = document.querySelector("button");
  submitButton.remove();
}

function checkAnswer(userAnswer) {
  quizRecord[questionNumber - 1].userAnswer = userAnswer;

  if (Number(quizInfo[questionNumber][0].correct) === Number(userAnswer)) {
    console.log("선택지 : " + userAnswer);
    console.log("퀴즈 정답 : " + quizInfo[questionNumber][0].correct);
    console.log("정답");
    quizRecord[questionNumber - 1].result = true;
    solutionQUiz();
    showCorrectAnswer();
  } else {
    quizRecord[questionNumber - 1].result = false;
    solutionQUiz();
    showWrongAnswer();
  }

}

function solutionQUiz() {
  var solution_txt = "";
  solution_txt += "<div>" + quizInfo[questionNumber][0].explain + "</div>";

  // 풀이 내용이 없는 경우에만 추가
  if (solutionFlag) {
    var solutionElement = document.getElementsByClassName("explainQuiz")[0];
    // solutionElement.id = "quizSolution";
    solutionElement.innerHTML = solution_txt;
    // 다음 퀴즈로 넘어가는 버튼 생성
    var nextButton = document.createElement("button");
    nextButton.className = "buttonStyle";

    if (completeQuiz) {
      nextButton.id = "resultButton";
      nextButton.innerText = "결과 확인";
      nextButton.onclick = function () {
        var result_txt = "";
        document.getElementById("quizWrap").innerHTML = result_txt;
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

function showCorrectAnswer() {
  if (answerFlag) {
    var quizQuestionElement = document.querySelector(".quizQuestion");
    var correctAnswerImage = document.createElement("img");
    correctAnswerImage.src = "./image/redCircle.png";
    quizQuestionElement.appendChild(correctAnswerImage);
  }
  answerFlag = false;
}

function showWrongAnswer() {
  if (answerFlag) {
    var quizQuestionElement = document.querySelector(".quizQuestion");
    var wrongAnswerImage = document.createElement("img");
    wrongAnswerImage.src = "./image/redX.png";
    quizQuestionElement.appendChild(wrongAnswerImage);
  }
  answerFlag = false;
}
