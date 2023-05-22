let questionCount = 0;

// 30 questions for finding out who you are.

function relationships()

{
    const questions = [

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
            answera: "B - Talking at length to colleagues to keep your finger on the pulse at work.",
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
            answerb: "C - Someone you are madly in love with.",
        },

        {
            question: "14/ The pictures in your photograph album are of:",
            answera: "A - Several generations of family and friends.",
            answerb: "B - Various achievements in your life - for example - winning prizes at school or university.",
            answerb: "C - Yourself and your lover on holiday in various places.",
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
            auestion: "23/ Children should be brought up to believe in:",
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
    ]

}

// Show next question in list.

function displayNext()

{
    questionCount += 1;

    function relationships()

    document.getElementById(questions) = questions.innerHTML;

    if questionCount === 31 {

        // function to add 1 to answera, answerb or answerc

        answerToQuestions()
    }

    {
        if (answera === true) {
            answera = +1;
        } else if (answerb === true) {
            answerb = +1;
        } else
            (answerc === true); {
            answerc += 1;
        }
    }

    // event listeners.

    answera.addEventListener("click", answerToQuestions);
    answerb.addEventListener("click", answerToQuestions);
    answerc.addEventListener("click", answerToQuestions);

    // Final score and message explaining the score.

    function score() {

        Message = "ANSWER A SCORE:- " + Str(answera) < br >
            Message = Message + "ANSWER B SCORE:- " + Str(answerb) < br >
            Message = Message + "ANSWER C SCORE:- " + Str(answerc) < br >
            Message = Message + "This quiz was entitled 'What Makes You Tick - Career, Family or Romance." < br >
            Message = Message + "The computer has added up the number of 'a', 'b' and 'c' answers you gave. Please read the following explanation."

        if (AnswerA > AnswerB And AnswerA > AnswerC) {

            Message = "MOSTLY A's" < br >
                Message = Message + "Your major concern is with the family. You probably have children of your own or are planning to "
            Message = Message + "start a family fairly soon. If not, then you are the kind of person who values the parental home, "
            Message = Message + "gravitates there often and keeps in touch with brothers, sisters and other relatives. You are the "
            Message = Message + "kind of person who would not want to be away from home at Christmas." < br >
                Message = Message + "  If you are a woman you could be described as 'traditional', if a man, you would be seen as a "
            Message = Message + "devoted husband, father or son who prefers to spend as much time as possible with his family." < br >
                Message = Message + "CONTINUED ON NEXT PAGE"

            Message = "CONTINUED FROM LAST PAGE" < br >
                Message = Message + "  The main value of family life is probably stability and continuity and the identity that is derived "
            Message = Message + "from it - the series of the long-term purpose. The chances are that you keep a photograph album full of "
            Message = Message + "pictures of family events, such as holidays, birthdays, Christmas and Weddings which help you keep track "
            Message = Message + "of 'where you come from' and also help you to 'know who you are'. You understand your roles and duties and "
            Message = Message + "your self-esteem is greatly enhanced by the knowledge that other people need you." + LfCr + LfCr
            Message = Message + "CONTINUED ON NEXT PAGE"

            // MsgBox Message, DialogType, Title

            Message = "CONTINUED FROM LAST PAGE" < br >
                Message = Message + "REWARDS OF THE FAMILY" < br >
                Message = Message + "It is easy to lose sight of these virtues when we read about all the violence that takes place "
            Message = Message + "within families, observe the high divorce rate today, and hear people moan about lack of freedom "
            Message = Message + "and the high cost of bringing up children. All these negative aspects are real, but families also "
            Message = Message + "many rewards and satisfactions that are often taken for granted. If the family was all bad news (as "
            Message = Message + "some radical psychiatrists seem to imply) there would be no need to feel sorry for orphans. But the "
            Message = Message + "truth is we do: the family is the main source of 'base-camp' security and self-definition." < br >

                // MsgBox Message, DialogType, Title

        } else if {

            AnswerB > AnswerA And AnswerB > AnswerC
            Message = "MOSTLY B's" < br >
                Message = Message + "The core of your value system focuses around your career ambitions. You probably had early success "
            Message = Message + "and encouragement at school and have talents and abilities that you feel should not go to waste. You "
            Message = Message + "may have embarked upon a career and climbed several rungs of the ladder already. If so, this is likely "
            Message = Message + "to be within an occupation that is intrinsically interesting and creative and in which you can see prospects "
            Message = Message + "for future progress and achievement. Actors, artists, scientists and business people, for example, are more "
            Message = Message + "likely to devote themselves wholeheartedly to a career than typists or assembly workers. Jobs in the latter "
            Message = Message + "categories are more often viewed as stop-gaps or unpleasant necessities." < br >
                Message = Message + "CONTINUED ON NEXT PAGE"

            // MsgBox Message, DialogType, Title

            Message = "CONTINUED FROM LAST PAGE" < br >
                Message = Message + "REWARDS OF A CAREER" < br >
                Message = Message + "People who make successful careers are not only talented and achievement-oriented, they are usually extrovert "
            Message = Message + "and socially skilled as well. It is very difficult to make progress in the business world, or any other field, "
            Message = Message + "without meeting people and showing some degree  of diplomacy. Whether one is dealing with bosses, assistants, "
            Message = Message + "rivals, clients or the public at large, some capacity to 'win friends and influence people' is usually a prerequisite. "
            Message = Message + "Generally warmth and tact are innate traits, although some of the fundamental rules of how to deal with people can be "
            Message = Message + "taught and applied consciously." < br >
                Message = Message + "CONTINUED ON NEXT PAGE"

            // MsgBox Message, DialogType, Title

            Message = "CONTINUED FROM LAST PAGE" < br >
                Message = Message + "  The rewards of career achievement are fairly obvious. Power, wealth and fame are satisfying in their own right, and carry "
            Message = Message + "many spin-offs such as the opportunity to travel, dress well, eat in good restaurants, meet interesting people, and be "
            Message = Message + "attractive to the opposite sex. Henry Kissinger is quoted as saying, 'Power is the greatest aphrodisiac'." < br >
                Message = Message + "  Critics if this life-style say that the 'rat-race' leads to the neglect of friends and more important values, and if family "
            Message = Message + "and romance are sacrificed too much, a certain emptiness is ultimately experienced."

            // MsgBox Message, DialogType, Title

        } else {

            AnswerC > AnswerB And AnswerC > AnswerA Then
            Message = "MOSTLY C's" < br >
                Message = Message + "You are the type of person who lives primarily for love and romance. Perhaps you are 'in love' at "
            Message = Message + "this moment and seeing the world through the proverbial rose-coloured spectacles. Some say this is "
            Message = Message + "an illusion but others make an equal case that it the greatest 'reality'. Who can say which is more true?" < br >
                Message = Message + "  Perhaps you have already emerged from an intense love affair that gave life a new meaning. Or you have "
            Message = Message + "madly in love many times before, and know that life becomes much more exciting and exhilarating when you are." < br >
                Message = Message + "CONTINUED ON NEXT PAGE"

            // MsgBox Message, DialogType, Title

            Message = "CONTINUED FROM LAST PAGE" < br >
                Message = Message + "ROMANTIC AT HEART" < br >
                Message = Message + "Even if you are not crazy for a particular partner, and never have been in the past, you are in love with the idea "
            Message = Message + "of love and create it out of your imagination. You are an avid reader of romantic fiction who harks back to day of "
            Message = Message + "medieval chivalry or Victorian dignity and elegance. You prefer to focus upon the beautiful and stimulating things "
            Message = Message + "in life and ignore the pain, baring practicalities and dross." < br >
                Message = Message + "CONTINUED ON NEXT PAGE"

            // MsgBox Message, DialogType, Title

            Message = "CONTINUED FROM LAST PAGE" < br >
                Message = Message + "  Whatever your situation, you may count yourself fortunate, for it takes benevolence and a feeling of well-being "
            Message = Message + "to love. The chances are you are still young, for a romantic view of the world is notoriously difficult to sustain "
            Message = Message + "with age. On the other hand, as Barbara Cartland will attest, the belief that 'love is what makes the world go round' "
            Message = Message + "is not necessarily the temporary preserve of youth."

            // MsgBox Message, DialogType, Title

            function (lastMessage)()

        }

    }

    function lastMessage() {
        If AnswerA > AnswerB And AnswerA > AnswerC Or AnswerB > AnswerA And AnswerB > AnswerC Or AnswerC > AnswerB And AnswerC > AnswerA Then
        Message = "WHICH IS BEST" < br >
            Message = Message + "It is not our intention to judge which of these three life philosophies is the most satisfying or virtuous. People "
        Message = Message + "are different and must follow the dictates of their heart in such matters. Each orientation has its particular "
        Message = Message + "rewards and drawbacks." < br >
            Message = Message + "  Hopefully, what this quiz has achieved is to bring you to more explicit understanding of what motivates you in "
        Message = Message + "in life and where your true values really lie." < br >

            // MsgBox Message, DialogType, Title
    }