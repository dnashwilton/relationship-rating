window.onload = (event) => {
    console.log('Page Loaded');
};

// All selected elements.

const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
let answera = document.getElementById("alpha");
let answerb = document.getElementById("bravo");
let answerc = document.getElementById("charlie");

// Variables selected

let runningQuestion = 0;
let questionCount = 0;
let answerOne = 0;
let answerTwo = 0;
let answerThree = 0;

// 30 questions for finding out who you are.

let questions = [

    {
        question: "1/ The greatest compliment anyone could pay you would be to say:",
        answera: "A - What a great job you make of bringing up your family.",
        answerb: "B - That you deserve to be at the top of your chosen career/profession.",
        answerc: "C - How happy your lover looks since they met you.",
    },

    {
        question: "2/ At Christmas, it is important for you too:",
        answera: "A - Have a traditional family celebration.",
        answerb: "B - Send presents to essential business contacts.",
        answerc: "C - Be alone with your partner.",
    },

    {
        question: "3/ You have to give up your job to look after your children. You feel:",
        answera: "A - It is the right and proper way to proceed.",
        answerb: "B - Frustrated that you will not be able to fulfil your ambitions.",
        answerc: "C - Relieved when they go to school so that you have more time to spend with your partner.",
    },

    {
        question: "4/ Where do you want to live?",
        answera: "A - In the country, in fresh air and green countryside.",
        answerb: "B - In a big city, where you can be at the heart of a thriving business community.",
        answerc: "C - By the sea, with stunning sunsets to share with your soul mate.",
    },

    {
        question: "5/ You mostly dress in clothes that are:",
        answera: "A - Comfortable for knocking around the house.",
        answerb: "B - Smart and create an impression of elegant efficiency.",
        answerc: "C - Alluring and attractive to the opposite sex.",
    },

    {
        question: "6/ You prefer to eat:",
        answera: "A - A well-cooked meal at home.",
        answerb: "B - In an expensive, fashionable restaurant.",
        answerc: "C - In a candlelit, cosy bistro.",
    },

    {
        question: "7/ People whose homes are always in a mess tend to be:",
        answera: "A - Lazy and undisciplined.",
        answerb: "B - Too busy with more important things.",
        answerc: "C - Charmingly Bohemian.",
    },

    {
        question: "8/ Energy is well spent on:",
        answera: "A - Keeping your home spotless.",
        answerb: "B - Talking at length to colleagues to keep your finger on the pulse at work.",
        answerc: "C - Strenuous exercise and beauty programmes to keep in shape.",
    },
    {
        question: "9/ A person who is power and money-motivated is:",
        answera: "A - Missing out on the real rewards to be gained by family life.",
        answerb: "B - A real 'go-getter' deserving of admiration.",
        answerc: "C - Losing touch with the joy of romance.",
    },

    {
        question: "10/ Someone who is prepared to devote themselves to finding an ideal mate is:",
        answera: "A - Chasing rainbows.",
        answerb: "B - A romantic fool.",
        answerc: "C - An idealist.",
    },

    {
        question: "11/ A secure and happy home and family life is:",
        answera: "A - All you could ever desire.",
        answerb: "B - Not enough to satisfy you.",
        answerc: "C - The way you like to think of your parents.",
    },

    {
        question: "12/ Most of your friends are:",
        answera: "A - Other parents.",
        answerb: "B - People connected with work.",
        answerc: "C - Other young couples.",
    },

    {
        question: "13/ You choose as a partner:",
        answera: "A - Someone you can trust to be a good parent.",
        answerb: "B - A person who is independent and has their own career.",
        answerc: "C - Someone you are madly in love with.",
    },

    {
        question: "14/ The pictures in your photograph album are of:",
        answera: "A - Several generations of family and friends.",
        answerb: "B - Various achievements in your life - for example - winning prizes at school or university.",
        answerc: "C - Yourself and your lover on holiday in various places.",
    },

    {
        question: "15/ The cosmetics and toiletries you use are primarily:",
        answera: "A - To keep your skin clean and fresh smelling.",
        answerb: "B - To preserve a well-groomed and sophisticated image.",
        answerc: "C - To make yourself alluring and attractive to the opposite sex.",
    },

    {
        questions: "16/ The politician who would get your vote would be lobbying for:",
        aAnswera: "A - Better education.",
        answerb: "B - Cuts in income tax.",
        answerC: "C - More support for the arts.",
    },

    {
        question: "17/ Most of your food budget goes on:",
        answera: "A - Meals for the family.",
        answerb: "B - 'Expense account' lunches.",
        answerc: "C - Banquets for your lover.",
    },

    {
        question: "18/ When you are feeling emotional or upset, the cause more often than not is:",
        answera: "A - Problems at home.",
        answerb: "B - Trouble at work.",
        answerc: "C - Conflict with your partner.",
    },

    {
        question: "19/ Whom do you relate to most comfortably?",
        answera: "A - Relatives.",
        answerb: "B - Business colleagues.",
        answerc: "C - Your partner.",
    },

    {
        question: "20/ Your daydreams take the form of:",
        answera: "A - Decorating your 'dream' home.",
        answerb: "B - Being eminently successful in the career that you have chosen.",
        answerc: "C - Going on a romantic voyage with your lover.",
    },

    {
        question: "21/ A woman whose lifestyle you admire is:",
        answera: "A - The Late Queen (Elizabeth II).",
        answerb: "B - The former Prime Minister (Margaret Thatcher).",
        answerc: "C - The Late Princess of Wales (Lady Diana).",
    },

    {
        question: "22/ You feel 'in your element' where you are:",
        answera: "A - On home territory and surrounded by your loved ones.",
        answerb: "B - In an office which is equipped with the latest technology.",
        answerc: "C - Anywhere with your lover by your side to provide strength and support.",
    },

    {
        question: "23/ Children should be brought up to believe in:",
        answera: "A - Making a stable relationship as a base for building a family.",
        answerb: "B - Making the most of whatever talents and ability they may have.",
        answerc: "C - Seeking out happiness and beauty.",
    },

    {
        question: "24/ A gift you would really appreciate right now would be:",
        answera: "A - A new vacuum cleaner.",
        answerb: "B - Next year's diary.",
        answerc: "C - A recording of your favourite love song.",
    },

    {
        question: "25/ What aspect of shopping do you find irritating?",
        answera: "A - Being patronized because you are a 'mere' housewife/husband.",
        answerb: "B - Time wasted standing in queues.",
        answerc: "C - Drabness in shops and lack of glamour generally.",
    },

    {
        question: "26/ If you are forced, by financial circumstances to work, what do you do?",
        answera: "A - Choose something you can do at home, so as not interfere with your family life.",
        answerb: "B - You would never have to be forced, since you are already strongly motivated to work.",
        answerc: "C - Opt to do something that is artistic and creative.",
    },

    {
        question: "27/ Birthdays can be pretty expensive when:",
        answera: "A - Youngsters in the family circle are growing up and want the latest fashions.",
        answerb: "B - There is a continuous stream of them at work.",
        answerc: "C - You want to spend all your money on a fabulous gift for your lover.",
    },

    {
        question: "28/ One of the most important decisions you have made recently was:",
        answera: "A - Choosing a new house.",
        answerb: "B - Making up your mind on what career you want to follow.",
        answerc: "C - Deciding on getting married.",
    },

    {
        questions: "29/ A friend suggests you emigrate and join them in Australia. That would depend upon whether:",
        answera: "A - You could bear to leave some of your relatives behind.",
        answerb: "B - Your career would be advanced by going.",
        answerc: "C - Your partner would go with you.",
    },

    {
        question: "30/ In a competition, you win the star prize of two weeks for two on a Caribbean Island. You:",
        answera: "A - Give the tickets as a honeymoon present to a couple in your family who are getting married.",
        answerb: "B - Ensure your promotion by offering them to your boss.",
        answerc: "C - Take off with your sweetheart.",
    },
];

let finalQuestion = questions.length;

alpha.addEventListener("click", NextQuestion);
bravo.addEventListener("click", NextQuestion);
charlie.addEventListener("click", NextQuestion);

// Questions to be answered in turn.

if (runningQuestion < finalQuestion) {
    runningQuestion++;
    NextQuestion();
    addAnswers();
    console.log('running question');
} else {

    endOfQuestions();
    console.log('end of questions');
}

// Have a question and multiiple answer session.

function NextQuestion() {
    let relationship = questions[runningQuestion];
    question.innerHTML = relationship.question;
    A.innerHTML = relationship.answera;
    B.innerHTML = relationship.answerb;
    C.innerHTML = relationship.answerc;
    addAnswers();
    console.log('nextQuestion');
}

function addAnswers() {
    if (alpha === true) {
        answerA()
    } else if (bravo === true) {
        answerB()
    } else(charlie === true); {
        answerC()
    }

    // questionCount = answerOne + answerTwo + answerThree;

    console.log(questionCount);

    endOfQuestions;

    NextQuestion;

}

function answerA() {
    answerOne++;
    console.log('answerOne');
}

function answerB() {
    answerTwo++;
    console.log('answerTwo');
}

function answerC() {
    answerThree++
    console.log('answerThree')
}

function endOfQuestions() {
    if (questionCount >= 31) {
        endMessage;

        console.log('end of message');
    }
}