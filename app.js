function toggleAnswer(questionNumber) {
    var answerId = 'answer' + questionNumber;
    var answerElement = document.getElementById(answerId);

    if (answerElement.style.display === 'none') {
        answerElement.style.display = 'block';
        document.getElementById(questionNumber).innerText = 'Скрыть ответ';
    } else {
        answerElement.style.display = 'none';
        document.getElementById(questionNumber).innerText = 'Показать ответ';
    }
}