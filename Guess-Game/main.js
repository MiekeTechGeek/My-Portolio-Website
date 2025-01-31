// this is the var to assign secret value between 1-20
let secret =Math.floor(Math.random()*21);
// the user enters a number between 1-20 and string is put into integer
let guess = parseInt(prompt("Guess a number between 0-20"));
//let guessint = parseInt(guess);


//while secret is not equal to guess do

while(secret!=guess){
    //if secret is greater than guess show " Your number is too low!"
    if(secret>guess){
        alert("Your number is too low!");
        //else show "Your number is too high!"
    } else if (isNaN(guess)){
        alert("Please enter a number!");
    } else{
        alert("Your number is too high!");
    };
    guess= parseInt(prompt("Guess a number between 1-20"));
};

if (secret === guess){
    alert("You are correct! The Number is: "+secret);
};