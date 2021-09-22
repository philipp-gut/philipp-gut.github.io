window.onload = () => {

    let score = $("#score");
    let correct = $("#correct");
    let incorrect = $("#incorrect");

    let scoreLabel = document.getElementById("scoreLabel");
    let correctLabel = document.getElementById("correctLabel");
    let incorrectLabel = document.getElementById("incorrectLabel");

    let s = parseInt(window.localStorage.getItem("score"));
    let c = parseInt(window.localStorage.getItem("correct"));
    let i = parseInt(window.localStorage.getItem("incorrect"));

    let localScore = parseInt(s) / 30 * 100;
    let localCorrect = parseInt(c) / 30 * 100;
    let localIncorrect = parseInt(i) / 30 * 100;

    scoreLabel.innerHTML = "Punkte: " + s;
    correctLabel.innerHTML = "Korrekt: " + c;
    incorrectLabel.innerHTML = "Inkorrekt: " + i;

    score.css("width", localScore + '%');
        $({animatedValue: 0}).animate({ animatedValue: localScore }, {
        duration: 1000,
        step: () => {
            score.attr('per', Math.floor(localScore) + '%');
        },
        complete: () => {
            console.log(this.animatedValue);
            score.attr('per', Math.floor(localScore) + '%');
        }
    });

    correct.css("width", localCorrect + '%');
        $({animatedValue: 0}).animate({ animatedValue: localCorrect }, {
        duration: 1000,
        step: () => {
            correct.attr('per', Math.floor(localCorrect) + '%');
        },
        complete: () => {
            correct.attr('per', Math.floor(localCorrect) + '%');
        }
    });

    incorrect.css("width", localIncorrect + '%');
        $({animatedValue: 0}).animate({ animatedValue: localIncorrect }, {
        duration: 1000,
        step: () => {
            incorrect.attr('per', Math.floor(localIncorrect) + '%');
        },
        complete: () => {
            incorrect.attr('per', Math.floor(localIncorrect) + '%');
        }
    });
    
}