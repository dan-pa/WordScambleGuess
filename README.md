# Word Guessing Game

This is a program which will prompt the user with a scrambled word, and the user must guess what that word is.

## Introduction

Hello, my name is Daniel Park, and at the time of writing, I am a first-year CS student at Vanderbilt University. 
This was one of many of my first projects that I am now pushing onto Github. 
If you want to contact me, please email me at daniel.park@vanderbilt.edu

## Pre-Installations

To run this piece of software, you have to download a couple things. 
First is node.js, which is simply done by downloading it from their website. 
To check if you have node, you can type this line in the terminal to see what version you have:

```bash
$ node -v
```

When that's done, we need to input the following code in the terminal:

```bash
$ npm init
```

Next, we need express. In the same terminal, you can input this line of code:

```bash
$ npm install express
```

Lastly, we need to install cors. This can be done similarly with the previous installation: 

```bash
$ npm install cors
```

Everything is now set to run Project ekreb

## Running the Code

To run the backend, you would want to run this line of code in the terminal: 

```bash
node index.js
```

Make sure to do this first. Otherwise, there won't be a word to unscramble. 
If you want a new batch of words after the first five, run the line of code in the terminal again. 
As always, don't forget to run it with the other files (except for the json files). 