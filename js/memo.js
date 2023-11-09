/*메모를 txt 파일로 저장*/
document.getElementById("save_memo").addEventListener("click", function () {
  // textarea의 내용 가져오기
  var text = document.querySelector(".textarea").value;
  // .txt 파일로 만들기
  var textFile = new Blob([text], { type: "text/plain" });
  // 다운로드 링크 만들기
  var downloadLink = document.createElement("a");
  downloadLink.download = "memo.txt";
  downloadLink.href = window.URL.createObjectURL(textFile);
  // 링크 클릭하여 다운로드 시작
  downloadLink.click();
});

/*메모 삭제*/
document.getElementById("delet_memo").addEventListener("click", function () {
  document.querySelector(".textarea").value = "";
  localStorage.removeItem("memo"); // 로컬 스토리지에서 'memo' 항목을 삭제
});

/*메모 프린트*/
function printElement(elem) {
  var mywindow = window.open("", "PRINT", "height=600,width=800");

  mywindow.document.write("<html><head><title>" + document.title + "</title>");
  mywindow.document.write("</head><body >");
  mywindow.document.write("<h1>" + document.title + "</h1>");
  mywindow.document.write(document.querySelector(elem).value); // 수정된 부분
  mywindow.document.write("</body></html>");

  mywindow.document.close();
  mywindow.focus();

  mywindow.print();
  mywindow.close();

  return true;
}

document.getElementById("print_memo").addEventListener("click", function () {
  printElement(".textarea"); // 클래스 선택자를 사용
});

// textarea의 내용이 변경될 때마다 그 내용을 로컬 스토리지에 저장합니다.
document.querySelector(".textarea").addEventListener("input", function () {
  localStorage.setItem("memo", this.value);
});

// 페이지가 로드될 때 저장된 메모를 textarea에 불러옵니다.
window.addEventListener("load", function () {
  var memo = localStorage.getItem("memo");
  if (memo) {
    document.querySelector(".textarea").value = memo;
  }
});
