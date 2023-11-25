var totalPage = 9;

// 토탈 페이지 수 입력

var paList = [];
for (var i = 1; i <= totalPage; i++) {
  paList.push(`${i < 10 ? "0" + i : i}`);
}

var videoList = [];
for (var j = 1; j <= totalPage; j++) {
  videoList.push(`${j < 10 ? "0" + j : j}.mp4`);
}

var questions = [
  {
    question: "1차 산업혁명은 전기 에너지를 활용한 대량생산 혁명으로 볼 수 있다.",
    answer: "O",
    explanation: "풀이1"
  },
  {
    question: "문제 2",
    answer: "X",
    explanation: "풀이2"
  },
];

function goPrevPage() {
  //이전페이지 이동
  var current = parseInt(page);

  if (current <= 1) {
    alert("첫 페이지 입니다.");
    return false;
  } else {
    var win_link = `index.html?page=${Number(page) - 1}`;
    window.location.href = win_link;
  }
}
function goNextPage() {
  //다음페이지 이동
  var current = parseInt(page);
  current++;
  if (current > totalPage) {
    alert("마지막 페이지 입니다.");
    return false;
  } else {
    var win_link = `index.html?page=${Number(page) + 1}`;
    window.location.href = win_link;
  }
}

function volumeControl(volume) {
  let video = document.getElementById("video-player");
  video.volume = volume / 100;
}

var numberPage = 0;
//next, prev 버튼, 페이지 숫자 위치 시키기
function button_load(str) {

  let isQuiz = false;
  if (Number(str) > Number(totalPage) - 2) {
    isQuiz = true;
    numberPage = Number(str);
  } else {
    numberPage = Number(str);
  }

  if (isQuiz) {
    var quiz_tx = "";
    var lxt = "";

    var currentQuestion = questions[numberPage - 8];


    quiz_tx +=
      '<div id="quiz" style="position: relative; width: 100%; height: 100%; background-image: url(\'./image/quiz_bg.jpg\'); background-size: cover;">';
    quiz_tx += '<div id="quiz_content" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">';
    quiz_tx += '  <h2>간단 퀴즈</h2>';
    quiz_tx += '  <p>' + currentQuestion.question + '</p>';
    quiz_tx += ' <br /><br />';
    quiz_tx += '  <ul>';
    quiz_tx += '    <input type="image" src="./image/playBtn.png" style="width:100px; margin-right:170px;" onclick="checkAnswer(\'O\')"></input>';
    quiz_tx += '    <input type="image" src="./image/playBtn.png" style="width:100px;" onclick="checkAnswer(\'X\')"></input>';
    quiz_tx += '  </ul>';
    quiz_tx += '</div>';
    quiz_tx += '</div>';
    lxt += ' <div id="prev"> ';
    lxt +=
      ' 	<input type="image" src="./image/prevBtn.png" id="btnPrev" alt="이전 페이지" title="이전 페이지" onclick="goPrevPage()"	onmouseover="this.src=\'./image/prevBtnOver.png\'" onmouseout="this.src=\'./image/prevBtn.png\'"> ';
    lxt += " </div> ";
    lxt += ' <div id="page_num"> ';

    lxt +=
      ' <span id="current_page">' +
      paList[numberPage - 1] +
      '</span><span id="total_page"> / ' +
      totalPage +
      "</span> ";
    lxt += " </div> ";
    lxt += ' <div id="next"> ';
    lxt +=
      ' 	<input type="image" src="./image/nextBtn.png" id="btnNext" alt="다음 페이지" title="다음 페이지" onclick="goNextPage()" onmouseover="this.src=\'./image/nextBtnOver.png\'" onmouseout="this.src=\'./image/nextBtn.png\'"> ';
    lxt += " </div> ";
    document.getElementById("myvideo").innerHTML = quiz_tx;
    document.getElementById("paging").innerHTML = lxt;
  } else {
    var video_tx = "";
    video_tx +=
      '<video id="video-player" style="width:1280px;height:720px;" controlslist="noplaybackrate nodownload">';
    var lxt = "";
    lxt += ' <div id="prev"> ';
    lxt +=
      ' 	<input type="image" src="./image/prevBtn.png" id="btnPrev" alt="이전 페이지" title="이전 페이지" onclick="goPrevPage()"	onmouseover="this.src=\'./image/prevBtnOver.png\'" onmouseout="this.src=\'./image/prevBtn.png\'"> ';
    lxt += " </div> ";
    lxt += ' <div id="page_num"> ';

    lxt +=
      ' <span id="current_page">' +
      paList[numberPage - 1] +
      '</span><span id="total_page"> / ' +
      totalPage +
      "</span> ";
    video_tx +=
      '<source src="./video/' + videoList[numberPage - 1] + '" type="video/mp4">';

    lxt += " </div> ";
    lxt += ' <div id="next"> ';
    lxt +=
      ' 	<input type="image" src="./image/nextBtn.png" id="btnNext" alt="다음 페이지" title="다음 페이지" onclick="goNextPage()" onmouseover="this.src=\'./image/nextBtnOver.png\'" onmouseout="this.src=\'./image/nextBtn.png\'"> ';
    lxt += " </div> ";
    video_tx += "</video>";

    document.getElementById("myvideo").innerHTML = video_tx;
    document.getElementById("paging").innerHTML = lxt;
  }


  // 비디오 요소 참조 및 이벤트 핸들러 설정
  let video = document.getElementById("video-player");

  video.ontimeupdate = function () {
    updateTimer();
  };

  video.onloadedmetadata = function () {
    let length = video.duration; // 비디오 총 길이 (초)
  };

  function updateTimer() {
    let currentPos = video.currentTime; // 현재 재생 위치 (초)
    let length = video.duration; // 비디오 총 길이 (초)

    // 시간을 mm:ss 형식으로 변환
    let currentPosMin = Math.floor(currentPos / 60);
    let currentPosSec = Math.floor(currentPos % 60);
    let lengthMin = Math.floor(length / 60);
    let lengthSec = Math.floor(length % 60);

    if (currentPosSec < 10) currentPosSec = "0" + currentPosSec;
    if (lengthSec < 10) lengthSec = "0" + lengthSec;
    if (currentPosMin < 10) currentPosMin = "0" + currentPosMin;
    if (lengthMin < 10) lengthMin = "0" + lengthMin;

    // 타이머 업데이트
    $("#timer").text(
      `${currentPosMin}:${currentPosSec} / ${lengthMin}:${lengthSec}`
    );

    let progress = (currentPos / length) * 100; // 재생 상태를 백분율로 표현
    $("#seek-bar").css("width", progress + "%"); // css의 width 속성을 업데이트
  }

  $("#sound-control").on("input", function () {
    var volume = $(this).val();
    volumeControl(volume);
  });


}
