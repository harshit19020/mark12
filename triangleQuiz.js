const quizform = document.querySelector('.quiz-form');
const submitBtn = document.querySelector('.submitBtn');
const outputText = document.querySelector('.output');

const correctAns = ["75", "right-angled", "equilateral"];

function calScore(){
    let score = 0;
    let i = 0;
    const formResult = new FormData(quizform);
    for(let value of formResult.values()){
        if(value === correctAns[i]){
            score++;
        }
        i++;
    }
    outputText.innerText = "Your score is " + score;
}

submitBtn.addEventListener("click", calScore);