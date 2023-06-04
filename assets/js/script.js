window.onload = (event) => {
    console.log('Page Loaded');
};

// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
// const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "1 What does HTML stand for?",
        // imgSrc : "img/html.png",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        correct : "A"
    },{
        question : "2 What does CSS stand for?",
        // imgSrc : "img/css.png",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        correct : "B"
    },{
        question : "3 What does JS stand for?",
        // imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C"
    },{
        question : "What does HTML stand for?",
        // imgSrc : "img/html.png",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        correct : "A"
    },{
        question : "What does CSS stand for?",
        // imgSrc : "img/css.png",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        correct : "B"
    },{
        question : "4 What does JS stand for?",
        // imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C"
    },{
        question : "5 What does HTML stand for?",
        // imgSrc : "img/html.png",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        correct : "A"
    },{
        question : "6 What does CSS stand for?",
        // imgSrc : "img/css.png",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        correct : "B"
    },{
        question : "7 What does JS stand for?",
        // imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C"
    },{
        question : "8 What does HTML stand for?",
        // imgSrc : "img/html.png",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        correct : "A"
    },{
        question : "9 What does CSS stand for?",
        // imgSrc : "img/css.png",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        correct : "B"
    },{
        question : "10 What does JS stand for?",
        // imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C"
    },{
        question : "11 What does CSS stand for?",
        // imgSrc : "img/css.png",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        correct : "B"
    },{
        question : "12 What does JS stand for?",
        // imgSrc : "img/js.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        correct : "C"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 15; // 15s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    // qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    // TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

alpha.addEventListener("click",renderProgress);
bravo.addEventListener("click",renderProgress);
charlie.addEventListener("click",renderProgress);

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);

    // Match case to answers

   /* Select Case CorrectAnswers

Case 0 To 3
Message = "This score shows that your knowledge about sex is very basic. "
Message = Message + "Finding out more about it can only be to your advantage."

MsgBox Message, DialogType, Title

Case 4 To 6
Message = "Your knowledge of sex is not as good as it could be. Finding out as much "
Message = Message + "as you can about sex can only help to improve your relationship with "
Message = Message + "your partner."

MsgBox Message, DialogType, Title

Case 8 To 10
Message = "THis is a fair score but you might like to learn more. Try to broaden your knowledge "
Message = Message + "by reading more about the subject."

MsgBox Message, DialogType, Title

Case 11 To 12
Message = "A very impressive performance. If you are as warm and considerate a lover as you are knnowledgeable "
Message = Message = "about sex, your partner should be a very happy person."

MsgBox Message, DialogType, Title

End Select
*/
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "assets/images/05.png" :
              (scorePerCent >= 60) ? "assets/images/04.png" :
              (scorePerCent >= 40) ? "assets/images/03.png" :
              (scorePerCent >= 20) ? "assets/images/02.png" :
              "assets/images/01.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}