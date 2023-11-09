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
});

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
