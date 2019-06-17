$(document).ready(function () {
})

//1.- Defining Global Variables
var correct = 0;
var wrong = 0;
var time = 10;
var interval = '';
var x = 0;
var game = $('#game');
//Reference elements    $('#IdName') $('.className') $('h1')
//Create new elements    $('<h1>') $("<h2>") $("<h3>") $("<div>") $("<button>") $("<img>")
var myQuestions = [
    {
        question: "Which of the following movies is a Steven King book?",
        answers: [
            "Dracula",
            "The Shining",
            "Hell House",
        ],
        correctAnswer: "The Shining"
    },
    {
        question: "Who is the villan in Texas Chainsaw Massacre?",
        answers: [
            "Jack the Ripper",
            "Norman Bates",
            "Leatherface",
        ],
        correctAnswer: "Leatherface"
    },
    {
        question: "What weapon belongs to Jason?",
        answers: [
            "A Saw",
            "A Knife",
            "A Machette",
        ],
        correctAnswer: "A Machette"
    },
    {
        question: "Who said, Heeere's Johnny...?",
        answers: [
            "Jack Torrance",
            "Penny Wise",
            "Michael Myers",
        ],
        correctAnswer: "Jack Torrance"
    }
];

function postQuestions(x) {
    game.empty();


    var h1 = $("<h1>");
    h1.text(myQuestions[x].question);
    game.append(h1)
    var answersBox = myQuestions[x].answers;

    //if ((wrong + correct) === myQuestions[x].question); {
    //$("<button>").empty();
    //$("#game").append("<h4> Correct: " + correct + "</h4>");
    //$("#game").append("<h4> Wrong: " + wrong + "</h4>");
    //}

    for (var i = 0; i < answersBox.length; i++) {
        var button = $("<button>");
        button.text(answersBox[i]);
        button.addClass('btnQ')
        button.attr('data-usa', answersBox[i]);
        button.attr('data-ca', myQuestions[x].correctAnswer)
        game.append(button)
    }
    //else

    // ??
}


$(document).on('click', '.btnQ', function (x) {
    var userAnswer = $(this).attr('data-usa');
    var correctAnswer = $(this).attr('data-ca')
    // console.log('correct Answer is: ' + correctAnswer)
    // console.log('User Answer is: ' + dataUsa)
    if (userAnswer === correctAnswer) {
        correct++;
        userAnswer = "";
        $("#wins").text(correct);
        console.log('correct' + correct)
    } else (userAnswer == correctAnswer); {
        stop();
        wrong++;
        userAnswer = " ";
        console.log('wrong' + wrong)
    }

})

// messed up my timing. question at 1 sec not 10.

interval = setInterval(function () {
    time--;
    console.log(time)

    if (time === 0) {
        x++;
        postQuestions(x)

    }
    else {
        x++;
        postQuestions(x)

    }

}, 10000);




postQuestions(x);