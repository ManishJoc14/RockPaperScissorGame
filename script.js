function $(element) {
    return document.querySelector(element);
}
// Adding event listener to play button in order to change display properties
$(".play").addEventListener("click", () => {
    $(".start").style.display = "none";
    $(".game").style.display = "block";

// Staring the Game function
    const game = () => {
        // initializing player score and computer score as 0 .
        let pscore = 0;
        let cscore = 0;

        // selecting necessary DOM nodes inside the main game function 
        function playGame() {
            // selecting buttons 
            const rockbtn = $("#rock");
            const paperbtn = $("#paper");
            const scissorbtn = $("#scissor");

            // making array of buttons in order to loop through those array elements and simply adding click events 
            const pOpt = [rockbtn, paperbtn, scissorbtn];

            // array for computer choices 
            const cOpt = ['rock', 'paper', 'scissor'];

            // adding event listener to buttons 
            pOpt.forEach(opt => {
                opt.addEventListener("click", function () {
                    // generating a random number between 0 to 2
                    const cnum = Math.floor(Math.random() * 3);

                    // making choice for computer using random number 
                    const cchoice = cOpt[cnum];

                    // getting texts inside of button(like Rock, Paper, Scissor ), here this represents that button which is clicked
                    const innertext = this.textContent;

                    // changing the case of that text 
                    const pchoice = innertext.toLowerCase();

                    // since the button is clicked now hiding 'choose' text
                    $("#choose").style.visibility = "hidden";

                    // adding animations to images
                    $("#playerimg").style.animation = "shake 1s ease";
                    $("#computerimg").style.animation = "shake 1s ease";

                    // Call the compare function after 500millisececonds of click
                    setTimeout(() => {
                        compare(pchoice, cchoice);
                        // change the images as clicked by player and as choice for computer which is already choosed
                        $("#playerimg").src = `p${pchoice}.png`;
                        $("#computerimg").src = `c${cchoice}.png`;
                    }, 500);
                });
            });
        }
        // compare player and computer choices as logic of the game
        // and call the required functions and increase scores
        function compare(pchoice, cchoice) {
            if (pchoice == cchoice) {
                draw();
                updateScore(pscore, cscore);
            }
            else if (pchoice == "rock") {
                if (cchoice == "paper") {
                    cscore++;
                    lose();
                    updateScore(pscore, cscore);
                }
                else {
                    pscore++
                    win();
                    updateScore(pscore, cscore);
                }
            }
            else if (pchoice == "paper") {
                if (cchoice == "scissor") {
                    cscore++;
                    lose();
                    updateScore(pscore, cscore);
                }
                else {
                    pscore++
                    win();
                    updateScore(pscore, cscore);
                }
            }
            else if (pchoice == "scissor") {
                if (cchoice == "rock") {
                    cscore++;
                    lose();
                    updateScore(pscore, cscore);
                }
                else {
                    pscore++
                    win();
                    updateScore(pscore, cscore);
                }
            }

        }
        function win() {
            // set color of result text to green 
            $("#result").style.color = "green";
            $("#result").innerHTML = "You Won !! ";
        }
        function lose() {
            // set color of result text to red 
            $("#result").style.color = "red";
            $("#result").innerHTML = "You lose !! ";
        }
        function draw() {
            // set color of result text to white 
            $("#result").style.color = "white";
            $("#result").innerHTML = "Game Draw !! ";
        }

        function updateScore(pscore, cscore) {
            // make visible the result text which is hidden initially 
            $("#result").style.visibility = "visible";

            // update scores
            $("#playerscore").innerHTML = pscore;
            $("#computerscore").innerHTML = cscore;

            // set animation to images to none so that we can animate again after another click
            const images = document.querySelectorAll("img");
            images.forEach(image => {
                image.style.animation = "";
            });
            // make visible the choose text again to choose another time 
            $("#choose").style.visibility = "visible";

        }
        playGame();
    }
    game();
});

