console.log("Js test main branch");

//make  random word/secret word for a player to guess
let randomWords = ['candy', 'nature', 'bean', 'bear', 'water', 'red', 'rose', 'spring', 'blue', 'power', 'car', 'pen', 'ear', 'laugh', 'plate', 'house', 'party', 'salt', 'shop', 'phone'];

//random word/secret word will show up on our display whenever we upload the page
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
console.log(randomWord);

//find an index of letter in random/secret word text which player pressed 
let secretWord = document.getElementById("secretWord");
let randomWordLength = randomWord.length;
console.log(randomWordLength);
for (i = 0; i < randomWord.length; i++) {
    secretWord.innerText += '_\u00a0';

}

//text of random word/secret will match
let pEl = document.createElement('p');
pEl.value = randomWord;
pEl.style.display = 'none';
console.log(pEl)


//letter buttons should disappear after pressing it one time 
function setLetter(event) {
    let btn = event.target
    btn.onclick = function () {
        setTimeout(function () {
            btn.disabled = true;
        }, 0);
    };
}
let numberOfTries = 0;
//if a player clicked some buttons of letter it should be inside of 
let letter = document.getElementById("letters");
letter.addEventListener('click', (evt) => {
    if (randomWord.includes(evt.target.innerText.toLowerCase())
    ) {
        let splitWord = secretWord.innerText.split('\u00a0');
        splitWord[randomWord.indexOf(evt.target.innerText.toLowerCase())] = evt.target.innerText.toLowerCase();
        secretWord.innerText = splitWord.join('\u00a0')
        console.log(randomWord.indexOf(evt.target.innerText.toLowerCase()));
        console.log(secretWord.innerText.split('\u00a0'));
        evt.target.style.backgroundColor = 'green';
    }
    else {
        evt.target.style.backgroundColor = "red";
        numberOfTries += 1;
    }


    console.log(displayMessage()); //calling the function

})

//if player guessed the hidden word correct then display something
//  player couldnt guess it then move your img to up and player has 2 chances, if player loses it display something else;


//defining the function
function displayMessage() {
    if (randomWord === secretWord.innerText.replaceAll(/\s/g, '')) {
        document.getElementById("hang").src = "https://static.vecteezy.com/system/resources/previews/008/440/439/original/you-won-illustration-free-vector.jpg"
    } else if (numberOfTries >= 3) {
        document.getElementById("hang").src = "https://play-lh.googleusercontent.com/CrLSEl1Vnn2XeXm9uEukivohhdzxebG-pVVOmaSsKW4oNNRg18OT8K5M--F4rHTR8P8"

    }


}

































