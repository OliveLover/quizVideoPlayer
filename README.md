# Quiz-Video-Player

### Introduce

<img width="1213" alt="image" src="https://github.com/user-attachments/assets/1ce32565-959d-41aa-8592-4aa3ce499161" />

사용자에게 말풍선으로 재생버튼을 누르도록 유도합니다.

<img width="1217" alt="image" src="https://github.com/user-attachments/assets/8cbd7b7f-8a10-42f3-bacd-59800a66b089" />

인데스를 열어 페이지를 빠르게 이동할 수 있습니다.

<img width="1222" alt="image" src="https://github.com/user-attachments/assets/4b157894-d0f3-42dc-a485-706a5e8c8d34" />

재생이 완료되면 말풍선으로 다음버튼을 누르도록 유도합니다.

<img width="267" alt="image" src="https://github.com/user-attachments/assets/ca741ebc-c5bc-444f-bee8-3b2c63ffd30f" />

막대의 버튼으로 소리크기도 조절할 수 있습니다.

<img width="354" alt="image" src="https://github.com/user-attachments/assets/4d54cc05-0aa0-4f1f-b1cd-307ce77355de" />

메모기능은 수강중인 차시에 대하여 메모를 해두었다가 ".txt" 파일로 저장또는, 인쇄가 가능합니다.

<img width="1224" alt="image" src="https://github.com/user-attachments/assets/3dc2540e-a896-43dc-8c6c-d8046d20cc40" />

<img width="1223" alt="image" src="https://github.com/user-attachments/assets/43bfb6c7-aa7d-4889-a681-e1a505e45f08" />

<img width="389" alt="image" src="https://github.com/user-attachments/assets/2182604c-e00d-4738-9e56-5d22e3bfcb1f" />

사전 설문조사를 진행한 후, 결과에 따라 수준에 맞는 학습자료를 다운로드할 수 있습니다.

<img width="1223" alt="image" src="https://github.com/user-attachments/assets/76b43c56-1743-4617-9155-f4b716140330" />

<img width="1224" alt="image" src="https://github.com/user-attachments/assets/62843c8e-31c1-4342-9cb2-85e621e8bd72" />


학습 후, 퀴즈를 통하여 수준을 체크할 수 있습니다. 본 퀴즈는 나중에 치르게될 시험문제가 됩니다.

### 구조
```HTML
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>

<head>
  <title></title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=1610, initial-scale=0.4" />
  <link rel="stylesheet" type="text/css" href="./css/basic.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Changa+One&display=swap" rel="stylesheet">

  <script src="./js/dataInfo.js"></script>
  <script src="./js/jquery-3.7.1.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="./js/jquery-1.12.4.js"></script>
  <script src="./js/jquery-ui.js"></script>
  <script src="./js/jquery.mCustomScrollbar.concat.min.js"></script>
  <script src="./js/videoplayer.js"></script>
  <script src="./js/index.js"></script>
</head>

<body scroll="no" ondragstart="return false" onselectstart="return false" oncontextmenu="return false">
  <div style="width: 1280px">
    <div id="container">
      <div id="wrap">
        <div id="myvideo">
          <video id="video-player" style="width: 1280px; height: 720px" controlslist="noplaybackrate nodownload" autoplay playsinline>
            <source src="./video/01.mp4" type="video/mp4" />
          </video>
          <div id="navBar">
            <div id="navBarWrap">
              <div class="index" id="videoIndex">INDEX</div>
              <div class="index-popup" id="index-popup">
                <div class="indexWrap">
                  <div class="indexTitle">비즈니스테크니션 :<br><span>성공을 이끄는 전략</span>
                  </div>
                  <div>
                    <hr style="border: none; height: 2px; background-color: rgba(245, 245, 245, 0.8);">
                    <div class="movePage" onclick="location.href='01.html'">인트로</div>
                    <div class="movePage" onclick="location.href='02.html'">사전진단 TEST</div>
                    <div class="movePage" onclick="location.href='03.html'">학습목표</div>
                    <div class="movePage" onclick="location.href='04.html'">학습내용</div>
                    <div class="movePage" onclick="location.href='05.html'">학습 전 QUIZ</div>
                    <div id="lectureWrap">
                    </div>
                    <div class="movePage" onclick="location.href='09.html'">마무리 Quiz</div>
                    <div class="movePage" onclick="location.href='10.html'">Summary</div>
                    <div class="movePage" onclick="location.href='11.html'">Advanced</div>
                  </div>
                </div>
              </div>
              <div class="playWrapper">
                <!-- 말풍선 추가 -->
                <div class="bubbleBox">
                  <div class="playAlarm gr">재생버튼을<br> 눌러주세요.</div>
                </div>
                <!--말풍선 추가 -->
                <!-- 말풍선 추가 -->
                <div class="bubbleBoxNext">
                  <div class="playAlarm gr">다음 버튼을<br> 눌러주세요.</div>
                </div>
                <!--말풍선 추가 -->
                <div class="play" id="video-play-btn"></div>
              </div>
              <div class="pause" id="video-pause-btn"></div>
              <div class="reload" id="video-reload-btn"></div>
              <div class="seek" id="seek-container">
                <div id="seek-bar">
                  <div id="seek-handle"></div>
                </div>
              </div>
              <div class="timer" id="timer">00:00 / 00:00</div>
              <div class="controls-bar">
                <div class="sound" id="volume-btn"></div>
                <div class="volume-popup" id="volume-popup">
                  <input type="range" id="sound-control" min="0" max="100" step="1" value="50" orient="vertical"
                    style="writing-mode: bt-lr" />
                </div>
                <div class="widemode" id="fullscreen-btn"></div>
                <!-- <a href="./download/summary.pdf">
                  <div class="download">
                  </div>
                </a> -->
              </div>
              <div id="paging">
                <div id="prev">
                  <img src="./image/emptyPrevBtn.png" id="btnPrev" alt="이전 페이지" title="이전 페이지" />
                </div>
                <div id="page_num">
                  <span id="current_page">01</span>
                  <span id="total_page"> / 12</span>
                </div>
                <div id="next">
                  <a href="02.html"><img src="./image/nextBtn.png" id="btnNext" alt="다음 페이지" title="다음 페이지"
                      onmouseover="this.src='./image/nextBtnOver.png'"
                      onmouseout="this.src='./image/nextBtn.png'" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="memo">
          <div class="memoTitle">NOTE</div>
          <div class="memoContents">학습한 내용을 메모해보세요!</div>
          <textarea class="textarea" placeholder="강의를 들으며 필요한 메모를 입력해주세요."></textarea>
          <div class="memoGuide"> * 작성한 내용은 자동으로 저장됩니다. <br>* <span style="font-weight: bold;">[저장하기]</span> 버튼 클릭시
            <span style="font-weight: bold;">'텍스트
              파일'</span>로 저장됩니다.
          </div>
          <div class="memoFunction" id="save_memo">저장하기</div>
          <div class="memoFunction" id="delet_memo">전체삭제</div>
          <div class="memoFunction" id="print_memo">인쇄하기</div>
        </div>
      </div>
    </div>
  </div>
</body>
<script src="./js/memo.js"></script>

</html>

```

### 주요기능
- 영상 재생 (기업의 요구사항으로 구현)
- 목차 (기업의 요구사항으로 구현)
- 학습자료 다운로드 (기업의 요구사항으로 구현)
- 작성한 메모를 txt파일로 저장 (기업의 요구사항으로 구현)
- 작성한 메모를 삭제 (기업의 요구사항으로 구현)
- 작성한 메모 인쇄 (기업의 요구사항으로 구현)
- 수준확인을 위한 설문조사와 수준에 따른 자료 다운로드(기업의 요구사항으로 구현)
- OX퀴즈 (기업의 요구사항으로 타업체 참조하여 구현)
