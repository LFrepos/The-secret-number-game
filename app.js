let maxNum = 50;
let secretNumber = 0;
let listAttempts = [];

function assignTextElement(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
}

function verifyAttempt() {
    let userNumber = parseInt(document.getElementById("userValue").value);

     
    if (userNumber === secretNumber) {
        assignTextElement("p",`You got the correct number in ${attempts} ${(attempts === 1) ? `attempt congratulations` : `attempts congratulations!` }`);
        document.getElementById("restart").removeAttribute("disabled")
    } else{
        if (userNumber > secretNumber) {
            assignTextElement("p",`The secret number is less than ${userNumber}`);
        } else {
            assignTextElement("p",`The secret number is greater than ${userNumber}`);
        }
        attempts++;
    }   clear();

    return; 
}

function clear(){
    let boxValue = document.querySelector("#userValue");
    boxValue.value = "";
}
 

function generateSecretNumber() {
    let generatedNumber = Math.floor(Math.random() * maxNum) + 1;
   
    if (listAttempts.length == maxNum) {
        assignTextElement("p","All possible numbers have been drawn");
    }

    if (listAttempts.includes(generatedNumber)) {
        return generateSecretNumber();

    } else {
        listAttempts.push(generatedNumber);
        return generatedNumber;
    }
}     

function initialText() {
    assignTextElement("h1", "The secret number game");
    assignTextElement("p", "Please choose your secret number from 1 to 50");
    secretNumber = generateSecretNumber();
    attempts = 1;
}

function restartGame() {
    clear();
    initialText();
    document.querySelector("#restart").setAttribute("disabled","true");
}


initialText();


