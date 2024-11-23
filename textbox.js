// Tracks everything for keyboard inputs 

const answer = document.querySelector(".letterbox");
const letterbox = answer.querySelectorAll("p");
let answerStr = "";

// Event of when the user presses any key
window.addEventListener('keydown', function (e) {
    if (e.key.length === 1 && e.key.match(/[a-z]/i)) {
        
        // Fills in div box with pressed letter
        if (answerStr.length < 5) {
            const letter = document.createTextNode(`${e.key}`.toLowerCase());

            // Fills in the nearest empty box
            if (answerStr.length == 0) letterbox[0].appendChild(letter);
            else if (answerStr.length == 1) letterbox[1].appendChild(letter);
            else if (answerStr.length == 2) letterbox[2].appendChild(letter);
            else if (answerStr.length == 3) letterbox[3].appendChild(letter);
            else if (answerStr.length == 4) letterbox[4].appendChild(letter);

            // Updates the user's answer
            answerStr += e.key.toLowerCase();

        }
    }
    else if (e.key === "Backspace") {
        // Deletes a letter from div box
        if (answerStr.length > 0) {
            // Deletes letter in the nearest filled box
            if (letterbox[4].textContent) letterbox[4].textContent = "";
            else if (letterbox[3].textContent) letterbox[3].textContent = "";
            else if (letterbox[2].textContent) letterbox[2].textContent = "";
            else if (letterbox[1].textContent) letterbox[1].textContent = "";
            else if (letterbox[0].textContent) letterbox[0].textContent = "";
        }
        
        // Updates the user's answer
        answerStr = answerStr.substring(0,answerStr.length-1);
        
        if (finished && round === 5) {
            const scrambleDisplay = document.querySelector("h2");
            scrambleDisplay.textContent = "";
        }
        else if (finished && letterbox[0].textContent == "") {
            finished = false;
            word = wordArr[round];
            wordScramble = scrambledArr[round];
            gameMSG.textContent = `Round ${round + 1}: Rearrange the following scramble of letters into a word`;
            const scrambleDisplay = document.querySelector("h2");
            scrambleDisplay.textContent = wordScramble;
            time.textContent = "Time : 5:00";
            const timeboxAgain = setTimeout(clockTick, 1000);
            attempts.textContent = "Attempts Left : 5";
            score.textContent = "Points : 00";
        }
    }
    
  });