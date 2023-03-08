

//make  random words work on the screen 
let randomWords = ['candy', 'nature', 'bean', 'bear', 'water', 'red', 'rose', 'spring', 'blue', 'power', 'car', 'pen', 'ear', 'laugh', 'plate', 'house', 'party', 'salt', 'shop', 'phone'];
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
console.log(randomWord);


let secretWord = document.getElementById("secretWord");
let randomWordLength = randomWord.length;
console.log(randomWordLength);
for (i = 0; i < randomWord.length; i++) {
    secretWord.innerText += '_\u00a0';

}



//putting the text of  randomword inside of the line but make it invisible;
let pEl = document.createElement('p');
pEl.value = randomWord;
pEl.style.display = 'none';
console.log(pEl)


//letter buttons will disappear after pressing it one time 
function setLetter(event) {
    let btn = event.target
    btn.onclick = function () {
        setTimeout(function () {
            btn.disabled = true;
        }, 0);
    };
}

//for letter buttons
let letter = document.getElementById("letters");
letter.addEventListener('click', (evt) => {
    if (randomWord.includes(evt.target.innerText.toLowerCase())
    ) {
        let splitWord = secretWord.innerText.split('\u00a0');
        splitWord[randomWord.indexOf(evt.target.innerText.toLowerCase())] = evt.target.innerText.toLowerCase();
        secretWord.innerText = splitWord.join('\u00a0')
        console.log(randomWord.indexOf(evt.target.innerText.toLowerCase()));
        console.log(secretWord.innerText.split('\u00a0'));
    } else {
        let changeImg = document.getElementById("hangman")
        changeImg.style.marginTop = "-310px";
    }
    console.log(displayMessage()); //calling the function

})











let inCorrectGuesses = 2;
let popupEl = document.getElementById("popupAlert")

//if player guessed the hidden word correct then display 'You won'
//  player couldnt guess it then move your img to up and player has 2 chances, if player loses it display 'You Lost';


//defining the function
function displayMessage() {
    if (randomWord === secretWord.innerText.replaceAll(/\s/g, '')) {
        return 'YOU WIN!'
    } else {
        return 'You Lost!'
    }


}































