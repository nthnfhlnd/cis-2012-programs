/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intRandom, intGuess, intCount, intPoints, floatMessage1; // declares variables

floatMessage1 = 'Do you want to play a guessing game? \nRespond "Yes" to play, or "No" to not play. ';

function validateGuess()
{
   while (isNaN(intGuess) || intGuess < intMin || intGuess > intMax)
   {
       intGuess = parseInt(prompt("That response was not a number between " + intMin + " and  " + intMax + ". Please enter a guess on the random number between " + intMin + " and  " + intMax));
   }
}
//the above function validates if the guess is a number and between the range of the intMin and intMax

while (prompt(floatMessage1) === "Yes")
{
    intMin = parseInt(prompt("Choose the lowest number (but no lower than 0) in your guessing range:"));
    //prompts user to enter the low number of their guessing range
    
    while (isNaN(intMin) || intMin < 0)
    {
        intMin = parseInt(prompt("That response was either not a number or was lower than 0. Please choose a number that is no lower than zero for the minimum of your guessing range:"));
    }
    //this while loop validates the user entered an actual number and makes sure the number is at least 0
    
    
    
    intMax =  parseInt(prompt("Choose the highest number in your guessing range: \nNote: your highest number must be at least 2 more than " + intMin));
    //prompts user to enter the high number of their guessing range
    
    while (isNaN(intMax) || intMax < intMin + 2) {
        intMax = parseInt(prompt("That response was either not a number or was not 2 more than " + intMin + ". Please choose a number that is at least 2 more than " + intMin));
    }
    //this while loop validates the user entered an actual number that is at least 2 more than intMin
    
    
    intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);
    //this line generates the random number as an integer to be used in the guessing game
    
    
    intCount = 1; //sets the loop counter at 1
    
    /* the following section prompts the user to enter their guess
     * and then validates that the user entered an actual number and makes sure that the
     * number is between the allowed max and min number choices.
    */
    
    intGuess = parseInt(prompt("What is your guess on the random number between " + intMin + " and  " + intMax));
    //prompts user to enter their guess
    

    
    validateGuess(); //executes the function to validate that intGuess is a real number within the guessing range
    
    
    
    /* The following section provides the main loop and logic for the program.
     * The user's guess is compared to the randomly generated number and feedback
     * is given based upon whether the guess is higher or lower. The loop exits when
     * the user chooses the correct number. Each time through the loop updates the loop counter.
     */
    
     while (intGuess != intRandom) //creates a while loop and intitially compares the guess to the answer
     {
           
        if (intGuess < intRandom)//compares the guess to the random number
        {
            intGuess = parseInt(prompt("Your choice of " + intGuess + " is too low! Please try again."));//states the guess is too low and prompts another guess
            validateGuess(); //validates the intGuess
        } else {
            intGuess = parseInt(prompt("Your choice of " + intGuess + " is too high! Please try again."));//states the guess is too high and prompts another guess
            validateGuess(); //validates the intGuess
        }
        
       
        intCount++; //increments intCount
        
     }
    
    
    /* The  following section provides the point values given based off of
     * the range of possible values and the amount of attempts it took to
     * guess the correct value
     */
    
    intPoints = (1+intMax-intMin)-intCount;
    
    // provides final output upon successful guessing
    alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
            " and it only took you " + intCount + " attempts!\nYou get " + intPoints + " points!");
    //outputs congratulations, how many guesses it took, and how many points were earned
}
