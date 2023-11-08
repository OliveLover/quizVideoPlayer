function checkAnswer(answer) {
    var currentQuestion = questions[numberPage - 8]; // 현재 문제 가져오기

    if (answer === currentQuestion.answer) {
        // 정답 처리 로직
        console.log("정답입니다!");
        numberPage++;
        button_load(numberPage);
    } else {
        // 오답 처리 로직
        console.log("오답입니다!");
        console.log(currentQuestion.explanation);

        let explanationHTML = '<div id="explanation">';
        explanationHTML += '  <h3>풀이</h3>';
        explanationHTML += '  <p>' + currentQuestion.explanation + '</p>';
        explanationHTML += '</div>';

        // 풀이를 보여줄 요소의 ID를 확인 후, 풀이를 추가합니다.
        let explanationElement = document.getElementById("explanation");
        if (explanationElement) {
            explanationElement.innerHTML = explanationHTML;
            console.log("explanationElement 생성");
        }

        button_load(numberPage);

    }

    // 다음 문제로 이동 또는 결과 표시 등 추가적인 로직을 구현할 수 있습니다.
}