// Putting API information into a local host server

const https = require('https');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000; // Change if already in use
app.use(cors());
let wordArr;

// API Website
https.get('https://random-word-api.vercel.app/api?words=5&length=5', (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    
    data += chunk;
    
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    let word = data.substring(1, data.length - 1);
    wordArr = word.split(",");
    for (let k = 0; k < 5; k++) wordArr[k] = wordArr[k].substring(1, 6);

  });

}).on("error", (err) => {
    
    // Error Handling
    console.log("Error: " + err.message);

});

app.get("/getWords", function(req, res) {
    
    // Uploading to the localhost
    res.send(wordArr);

});

app.listen(PORT, () => {
    
    // Informing user of where the localhost port is
    console.log(`Backend is running on http://localhost:${PORT}`);

});
