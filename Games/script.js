//declaring the variables we all need
const randomNumber = Math.floor(Math.random() * 10)+1;
const guessInput = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");
const message = document.getElementById("message");

checkBtn.addEventListener("click",function(){
    const userGuess = Number(guessInput.value);

if(!userGuess || userGuess < 1 || userGuess > 10){
    message.textContent = "Please enter a value between 1 and 10"
    return;

}

if (userGuess === randomNumber){
    message.textContent = "Yayyy!! You Guessed it smartypants!!"
    message.style = "Green";
}else if(userGuess < randomNumber){
    message.textContent = "Hade boss, Thats to low"
    message.style = "Red";
}else{
    message.textContent = "Hade boss, Thats too high!"
    message.style = "Red";
}
})