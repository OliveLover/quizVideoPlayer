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

  //버그
  // let toggleBtn = document.getElementById("pipmode");
  // toggleBtn.addEventListener("click", togglePiPMode);
  // async function togglePiPMode(event) {
  //   try {
  //     if (video !== document.pictureInPictureElement) {
  //       await video.requestPictureInPicture();
  //       toggleBtn.textContent = "PIP 모드 종료";
  //     } else {
  //       await document.exitPictureInPicture();
  //       toggleBtn.textContent = "PIP 모드 시작";
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

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
  var progressHandle = document.getElementById("seek-handle");

  progressBar.addEventListener("click", function (event) {
    var progressWidth = progressBar.offsetWidth;
    var clickPosition = event.offsetX;
    var seekTime = (clickPosition / progressWidth) * videoPlayer.duration;
    videoPlayer.currentTime = seekTime;
  });

  videoPlayer.addEventListener("timeupdate", function () {
    var currentTime = videoPlayer.currentTime;
    var duration = videoPlayer.duration;
    var progress = (currentTime / duration) * 100;
    progressBar.style.width = progress + "%";
  });
});
