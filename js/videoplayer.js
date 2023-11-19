$(document).ready(function () {
  // 재생,정지

  $("#video-play-btn").on("click", function () {
    $(".bubbleBox").hide();
    $("#video-player").get(0).play();
    $("#video-play-btn").hide();
    $("#video-pause-btn").show();
  });

  $("#video-pause-btn").on("click", function () {
    $("#video-player").get(0).pause();
    $("#video-play-btn").show();
    $("#video-pause-btn").hide();
  });

  // 전체화면

  $("#fullscreen-btn").on("click", function () {
    if ($("#video-player").get(0).requestFullScreen) {
      $("#video-player").get(0).requestFullScreen();
    } else if ($("#video-player").get(0).webkitRequestFullScreen) {
      $("#video-player").get(0).webkitRequestFullScreen();
    } else if ($("#video-player").get(0).mozRequestFullScreen) {
      $("#video-player").get(0).mozRequestFullScreen();
    }
  });

  // pip모드
  let toggleBtn = document.getElementById("pipmode");
  toggleBtn.addEventListener("click", togglePiPMode);
  async function togglePiPMode() {
    console.log("실행되니");  
    try {
      const video = document.getElementById("video-player"); // 비디오 요소의 ID를 적절히 변경해주세요
      if (!document.pictureInPictureElement) {
        await video.requestPictureInPicture();
      } else {
        await document.exitPictureInPicture();
      }
    } catch (error) {
      console.log(error);
    }
  }
  

  // 타이머 업데이트
  var videoPlayer = document.getElementById("video-player");
  var timer = document.getElementById("timer");

  videoPlayer.addEventListener("loadedmetadata", function () {
    updateTimer();
  });

  videoPlayer.addEventListener("timeupdate", function () {
    updateTimer();
  });

  function updateTimer() {
    var currentTime = videoPlayer.currentTime;
    var duration = videoPlayer.duration;
    var formattedCurrentTime = formatTime(currentTime);
    var formattedDuration = formatTime(duration);
    timer.textContent = formattedCurrentTime + " / " + formattedDuration;

    // 영상을 다 본 경우 콘솔에 메시지 출력
    if (currentTime === duration) {
      console.log("다봤다!");
      var bubbleBoxNext = document.querySelector(".bubbleBoxNext");
    bubbleBoxNext.style.display = "block";
    }
  }

  function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);
    return padZero(minutes) + ":" + padZero(seconds);
  }

  function padZero(value) {
    return value < 10 ? "0" + value : value;
  }

  // 볼륨 조절
  var volumeControl = document.getElementById("sound-control");

  volumeControl.addEventListener("input", function () {
    var volume = volumeControl.value / 100;
    videoPlayer.volume = volume;
  });

  // 팝업 초기 상태
  var popup = document.getElementById("volume-popup");
  popup.style.display = "none";

  // 불륨 팝업
  document.getElementById("volume-btn").addEventListener("click", function () {
    var popup = document.getElementById("volume-popup");
    if (popup.style.display === "none") {
      popup.style.display = "block";
      popup.style.animation = "fadein 0.5s forwards";
    } else {
      popup.style.animation = "fadeout 0.5s forwards";
      setTimeout(function () {
        popup.style.display = "none";
      }, 500);
    }
  });

  // 프로그레스 바 업데이트
  var progressBar = document.getElementById("seek-bar");

  $('#seek-container').on('click', function (e) {
    let clickX = e.pageX - $(this).offset().left;
    let percent = (clickX / $(this).width());
    let newTime = $("#video-player").get(0).duration * percent;
    $("#video-player").get(0).currentTime = newTime;
  })

  videoPlayer.addEventListener("timeupdate", function () {
    var currentTime = videoPlayer.currentTime;
    var duration = videoPlayer.duration;
    var progress = (currentTime / duration) * 100;
    progressBar.style.width = progress + "%";
  });
});