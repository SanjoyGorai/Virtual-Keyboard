
const keyboardCheckbox = document.getElementById('keyboard-checkbox');
const output = document.getElementById('output');
const keyboardDiv = document.getElementById('keyboard-div');

keyboardCheckbox.addEventListener('change', showKeyboard)

function showKeyboard() {
    if (keyboardDiv.hidden) {
        keyboardDiv.hidden = false
        console.log('Hidden');
    } else {
        keyboardDiv.hidden = true
        console.log('Not Hidden');
    }
}



const keyOne = document.getElementById('key-one');
const keyTwo = document.getElementById('key-two');
const keyThree = document.getElementById('key-three');
const keyFour = document.getElementById('key-four');
const keyFive = document.getElementById('key-five');
const keySix = document.getElementById('key-six');
const keySeven = document.getElementById('key-seven');
const keyEight = document.getElementById('key-eight');
const keyNine = document.getElementById('key-nine');
const keyZero = document.getElementById('key-zero');

const c = 'click';
keyOne.addEventListener(c, keyOneClicked);
keyTwo.addEventListener(c, keyTwoClicked);
keyThree.addEventListener(c, keyThreeClicked);
keyFour.addEventListener(c, keyFourClicked);
keyFive.addEventListener(c, keyFiveClicked);
keySix.addEventListener(c, keySixClicked);
keySeven.addEventListener(c, keySevenClicked);
keyEight.addEventListener(c, showOutput);
keyNine.addEventListener(c, showOutput);
keyZero.addEventListener(c, showOutput);

function showOutput() {
    // switch (document.getElementById(keyOne)) {
    //     case keyOne:
    //         console.log(keyOne.textContent);
    //         break;
    //     case keyTwo:
    //         console.log(keyTwo.textContent)
    //         break;
    //     default:
    //         break;
    // }

}

function keyOneClicked() {
    output.innerHTML = output.innerHTML + keyOne.textContent
}
function keyTwoClicked() {
    output.innerHTML = output.innerHTML + keyTwo.textContent
}
function keyThreeClicked() {
    output.innerHTML = output.innerHTML + keyThree.textContent
}
function keyFourClicked() {
    output.innerHTML = output.innerHTML + keyFour.textContent
}
function keyFiveClicked() {
    output.innerHTML = output.innerHTML + keyFive.textContent
}
function keySixClicked() {
    output.innerHTML = output.innerHTML + keySix.textContent
}
function keySevenClicked() {
    output.innerHTML += keySeven.textContent
}