function checkAnswer(answer) {
    var currentQuestion = questions[numberPage - 8]; // 현재 문제 가져오기

    if (answer === currentQuestion.answer) {
        // 정답 처리 로직
        console.log("정답입니다!");
    } else {
        // 오답 처리 로직
        console.log("오답입니다!");
    }

    // 다음 문제로 이동 또는 결과 표시 등 추가적인 로직을 구현할 수 있습니다.
}