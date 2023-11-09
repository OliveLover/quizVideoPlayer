// 퀴즈 정보를 가져와서 퀴즈를 생성하는 함수

function createQuiz(questionNumber) {
  // 퀴즈를 생성할 요소를 선택합니다.
  var quizElement = document.querySelector(".quiz");
  console.log(quizInfo[questionNumber][0].correct);
  console.log(questionNumber);

  var quiz_txt = "";
  quiz_txt += '<div class="quizQuestion" >';
  quiz_txt += "<h2>" + quizInfo[questionNumber][0].question + "</h2>";
  quiz_txt += "</div>";
  quiz_txt += '<div class="quizChoice">';
  quiz_txt += '<div class="choice">';
  quiz_txt += '<img src="./image/playBtn.png"  onclick="checkAnswer(1)">';
  quiz_txt += "<p>" + quizInfo[questionNumber][1].select + "</p>";
  quiz_txt += "</div>";
  quiz_txt += '<div class="choice">';
  quiz_txt += '<img src="./image/playBtn.png"  onclick="checkAnswer(2)">';
  quiz_txt += "<p>" + quizInfo[questionNumber][2].select + "</p>";
  quiz_txt += "</div>";
  quiz_txt += '<div class="choice">';
  quiz_txt += '<img src="./image/playBtn.png" onclick="checkAnswer(3)">';
  quiz_txt += "<p>" + quizInfo[questionNumber][3].select + "</p>";
  quiz_txt += "</div>";
  quiz_txt += '<div class="choice">';
  quiz_txt += '<img src="./image/playBtn.png" onclick="checkAnswer(4)">';
  quiz_txt += "<p>" + quizInfo[questionNumber][4].select + "</p>";
  quiz_txt += "</div>";
  quiz_txt += "</div>";
  document.getElementById("quizWrap").innerHTML = quiz_txt;
}

function checkAnswer(userAnswer) {
  if (Number(quizInfo[questionNumber][0].correct) === Number(userAnswer)) {
    console.log("선택지 : " + userAnswer);
    console.log("퀴즈 정답 : " + quizInfo[questionNumber][0].correct);
    console.log("정답");
    questionNumber++;
    if (questionNumber > 3) {
      window.location.href = "09.html";
    } else {
      createQuiz(questionNumber);
    }
  } else {
    solutionQUiz();
  }
}

function solutionQUiz() {
  var solution_txt = "";
  solution_txt += '<div">111</div>';

  var quizWrapElement = document.getElementById("quizWrap");
  var solutionElement = document.getElementById("quizSolution");
  quizWrapElement.appendChild(solutionElement); // quizWrap 요소에 solution 요소를 추가


  document.getElementById("quizSolution").innerHTML = solution_txt;

  // 다음 퀴즈로 넘어가는 버튼 생성
  var nextButton = document.createElement("button");
  nextButton.innerText = "다음 퀴즈로 이동";
  nextButton.onclick = function () {
    questionNumber++;
    if (questionNumber > 3) {
      window.location.href = "09.html";
    } else {
      createQuiz(questionNumber);
    }
  };

  // 버튼을 표시할 위치 선택
  var buttonContainer = document.getElementById("quizWrap");
  // 버튼을 위치에 추가
  buttonContainer.appendChild(nextButton);
}