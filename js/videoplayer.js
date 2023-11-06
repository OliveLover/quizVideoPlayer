$(document).ready(function () {
  // 재생,정지

  $("#video-play-btn").on("click", function () {
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

  let toggleBtn = document.getElementById("#pipmode");
  toggleBtn.addEventListener("click", togglePiPMode);
  async function togglePiPMode(event) {
    try {
      if (video !== document.pictureInPictureElement) {
        await video.requestPictureInPicture();
        toggleBtn.textContent = "PIP 모드 종료";
      } else {
        await document.exitPictureInPicture();
        toggleBtn.textContent = "PIP 모드 시작";
      }
    } catch (error) {
      console.log(error);
    }
  }
});
