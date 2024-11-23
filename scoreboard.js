// Everything to do with the top part of the screen (i.e. score, time, attempts)

const scoreboard = document.querySelector(".scoreboard").querySelectorAll("p");
const score = scoreboard[0];
let scoreArr = [];
const attempts = scoreboard[1];
const time = scoreboard[2];
const textbox = document.querySelector(".letterbox").querySelectorAll("p");
const gameMSG = document.querySelector("h3");
const correctArr = [false, false, false, false, false];
let finished = false;

// Timer feature
const timebox = setTimeout(clockTick, 1000);

function clockTick() {
    if (!finished) {
        
        // Gets current seconds remaining
        let timeStr = time.textContent.substring(time.textContent.length - 2);
        timeStr = parseInt(timeStr);
        timeStr--;

        if (timeStr >= 0) {
            // Reduces seconds by one second
            if (timeStr / 10 >= 1) time.textContent = time.textContent.substring(0, time.textContent.length - 2) + timeStr;
            else time.textContent = time.textContent.substring(0, time.textContent.length - 2) + "0" + timeStr;
        }
        else {
            // Gets current minutes remaining
            timeStr = time.textContent.charAt(time.textContent.length - 4);
            timeStr = parseInt(timeStr);
            timeStr--;

            // minute goes down one and seconds reset
            if (timeStr >= 0) {
                time.textContent = time.textContent.substring(0, time.textContent.length - 4) + timeStr + ":59"; 
            }
            else {
                // Game over based on time
                let scoreCount = score.textContent.substring(score.textContent.length - 2);
                scoreCount = parseInt(scoreCount);
                scoreArr[round] = scoreCount;
                gameMSG.textContent = `Time's up! You lose! Your final score is ${scoreCount}. The word was ${word}. Clear the text to start Round ${++round + 1}`;
                finished = true;
                if (finished && round === 5) {
                    gameMSG.textContent = "Here are your final results!";
                    this.document.querySelector("h2").textContent = "";
                        const finalScore = document.querySelector(".finalScore").querySelectorAll("p");
                    for (let k = 0; k < 5; k++) {
                    if (correctArr[k] == true) finalScore[k].setAttribute("class", "correct");
                    else finalScore[k].setAttribute("class", "wrong");
                        finalScore[k].textContent = wordArr[k] + " " + scoreArr[k];
        }
                }
            }
        }

        // Recurses until variable finished is true
        const timeBoxRecursion = setTimeout(clockTick, 1000); 

    }
    
}

// Event of when the user presses "Enter"
window.addEventListener('keydown', function(e) {
     
    // Doesn't run unless textbox has 5 letters
    if (e.key !== "Enter" || !textbox[4].textContent) return;
    
    // Makes char in each div into a combined string
    let ansStr = "";
    for (let k = 0; k < textbox.length; k++) ansStr += textbox[k].textContent;

    let scoreCount = score.textContent.substring(score.textContent.length - 2);
    let attemptsNum = attempts.textContent.charAt(attempts.textContent.length - 1);

    if (ansStr === word && !finished) {
        // User guessed the word
        scoreCount = parseInt(scoreCount);
        scoreArr[round] = scoreCount + attemptsNum * 5;
        correctArr[round] = true;
        gameMSG.textContent = `You got the word!! Your final score is ${scoreCount + attemptsNum * 5}! Clear the text to start Round ${++round + 1}`;

        // Formatting so that there are always two numbers present in the score count
        if ((scoreCount + attemptsNum * 5) / 10 < 1) {
            score.textContent = score.textContent.substring(0, score.textContent.length - 1) + (scoreCount + attemptsNum * 5);
        }
        else {
            score.textContent = score.textContent.substring(0, score.textContent.length - 2) + (scoreCount + attemptsNum * 5);
        }

        // Reduces attempt number
        finished = true;
        attemptsNum = parseInt(attemptsNum);
        attemptsNum--;
        attempts.textContent = attempts.textContent.substring(0, attempts.textContent.length - 1) + attemptsNum;

    }
    else if (!finished) {
        
        // Calculates the score received based on guessed word
        let rightCounter = 0;
        for (let k = 0; k < textbox.length; k++) {
            if (word.charAt(k) === textbox[k].textContent) rightCounter++;
        }

        // Update score count
        scoreCount = parseInt(scoreCount);
        scoreCount += rightCounter;

        // Formatting so that there are always two numbers present in the score count
        if (scoreCount / 10 < 1) {
            score.textContent = score.textContent.substring(0, score.textContent.length - 1) + scoreCount;
        }
        else {
            score.textContent = score.textContent.substring(0, score.textContent.length - 2) + scoreCount;
        }

        if (rightCounter === 1) gameMSG.textContent = `There is 1 letter in the right position. Try again!`;
        else gameMSG.textContent = `There are ${rightCounter} letters in the right position. Try again!`;

    }

    if (attemptsNum === "1" && !finished) {
        
        // Game over based on attempts
        scoreArr[round] = scoreCount;
        gameMSG.textContent = `No more attempts! You lose! Your final score is ${scoreCount}. The word was ${word}. Clear the text to start Round ${++round + 1}`;
        finished = true;
        attemptsNum = parseInt(attemptsNum);
        attemptsNum--;
        attempts.textContent = attempts.textContent.substring(0, attempts.textContent.length - 1) + attemptsNum;

    }
    if (attemptsNum !== "0" && !finished) {
        
        // Attempt count reduces
        attemptsNum = parseInt(attemptsNum);
        attemptsNum--;
        attempts.textContent = attempts.textContent.substring(0, attempts.textContent.length - 1) + attemptsNum;

    }
    if (finished && round === 5) {
        gameMSG.textContent = "Here are your final results!";
        this.document.querySelector("h2").textContent = "";
        const finalScore = document.querySelector(".finalScore").querySelectorAll("p");
        for (let k = 0; k < 5; k++) {
            if (correctArr[k] == true) finalScore[k].setAttribute("class", "correct");
            else finalScore[k].setAttribute("class", "wrong");
            finalScore[k].textContent = wordArr[k] + " " + scoreArr[k];
        }
    }

});

