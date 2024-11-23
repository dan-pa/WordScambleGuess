// Getting a random five letter word from a free API online

let word = "";
let wordScramble = "";
let wordArr;
let scrambledArr = [];
let round = 0;

// Request to get information from localhost
const request = new XMLHttpRequest();
request.open("GET", "http://localhost:3000/getWords");
request.send();
request.onload = () => {
    if (request.status === 200) {
        
        // Cutting the information into useable data
        word = request.response.substring(1, request.response.length - 1);
        wordArr = word.split(",");
        for (let k = 0; k < 5; k++) wordArr[k] = wordArr[k].substring(1, 6);
        word = wordArr[round];
        
        // Scrambles the next five words
        for (let k = 0; k < wordArr.length; k++) {
            const wordScrambleArr = wordArr[k].split("");
            let letterIndex = "";
            let letterHolder = "";

            // Scramble the retrieved word
            for (let k = 0; k < 5; k++) {
                letterIndex = Math.floor(Math.random() * k);
                letterHolder = wordScrambleArr[k];
                wordScrambleArr[k] = wordScrambleArr[letterIndex];
                wordScrambleArr[letterIndex] = letterHolder;
            }
            wordScramble = wordScrambleArr.join("");
            scrambledArr[k] = wordScramble;

        }
        
        wordScramble = scrambledArr[round];

        // Sets the scrambled word onto main page
        const scrambleWordDisplay = document.querySelector("h2");
        scrambleWordDisplay.textContent = wordScramble;
        
    }
}

