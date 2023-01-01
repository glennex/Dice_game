
    var player1=prompt("player 1 Name");
    var player2=prompt("Player 2 Name");



document.querySelector("button").addEventListener("click",start);

function start(){

    document.querySelector(".pl1").innerHTML=player1;
    document.querySelector(".pl2").innerHTML=player2;

    var music=new Audio("dsound/level-win-6416.mp3")
    music.play();

    var random_number1= Math.floor(Math.random() * 6) +1;
var random_number2= Math.floor(Math.random() * 6) +1;

var dice_shown1="images/" + "dice"+ random_number1 + ".png";
var dice_shown2="images/" + "dice"+ random_number2 + ".png";

var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",dice_shown1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",dice_shown2);

var winner1=player1 +" Wins!!";
var winner2=player2 +" Wins!!";

if (random_number1> random_number2)
{
    document.querySelector("h1").innerHTML=winner1;
}

else if (random_number2>random_number1)
{
    document.querySelector("h1").innerHTML=winner2;
}
else {
    document.querySelector("h1").innerHTML="Draw";

}


}

