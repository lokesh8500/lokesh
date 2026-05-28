let location1 = 1;
let location2 = 6;
let location3 = 5;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk == false) {
 guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
 if(guess < 0 || guess > 6 )
 {
	 alert("Enter valid number")
 }
 else
 {
	guesses = guesses + 1;
	if (guess == location1 || guess == location2 || guess == location3)
	{
		hits = hits + 1;
		alert("HIT!!!");
		if(hits == 3)
		{
			isSunk = true;
			alert("you SUNK my ship!!!");
		}
	}
	else
	{
		alert("Miss:)")
	}
 }
 
}
alert("Your Score is "+guesses+" with hits "+hits);