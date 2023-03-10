//KEEP TRACK OF ACTIVE PLAYER
let activePlayer = "X";

//DETERMINE WIN CONDITIONS OF GAME
let selectedSquares = [];

//FUNCTION FOR PLACING X OR O
function placeXOrO(squareNumber) {

    //CHECKS IF SQUARE HAS BEEN CLICKED ON OR NOT
    if (!selectedSquares.some(element => element.includes(squareNumber))) {

        //RETRIEVES ELEMENT ID THAT WAS CLICKED
        let select = document.getElementById(squareNumber);

        //CHECKS TURN
        if (activePlayer === "X") {
            //PLACES FOR X
            select.style.backgroundImage = "url('images/x.png')";
        } else {
            //PLACES FOR O IF NOT X
            select.style.backgroundImage = "url('images/o.png')";
        }

        selectedSquares.push(squareNumber + activePlayer);
        //CHECKS FOR WIN CONDITIONS AFTER TURN
        checkWinConditions();

        //CHANGES ACTIVE PLAYER TO THE OTHER
        if (activePlayer === "X") {
            activePlayer = "O";
        } else {
            activePlayer = "X";
        }

        //PLAYS AUDIO
        audio("./media/place.mp3");

        //CHECKS FOR COMPUTER'S TURN
        if (activePlayer === "O") {
            //DISABLES CLICKING FOR COMPUTER'S TURN
            disableClick();
            //WAITS 1 SECOND FOR COMPUTER'S TURN
            setTimeout(function () { computersTurn(); }, 1000);
        }

        //NEEDED FOR computersTurn() FUNCTION TO WORK
        return true;

    }

    //RANDOM SQUARE BEING RETURNED BY COMPUTER
    function computersTurn() {

        //BOOLEAN FOR WHILE LOOP
        let success = false;
        //VARIABLE FOR RANDOM SQUARE
        let pickASquare;

        //KEEPS TRYING FOR RANDOM NUMBER INCASE SQUARE IS ALREADY SELECTED
        while (!success) {
            //RANDOM SQUARE/NUMBER BETWEEN 0-8
            pickASquare = String(Math.floor(Math.random() * 9));

            //IF RANDOM NUMBER IS TRUE, SQUARE HASN'T BEEN SELECTED
            if (placeXOrO(pickASquare)) {
                //CALLS FUNCTION
                placeXOrO(pickASquare);
                //END LOOP
                success = true;
            };
        }
    }
}

//CHECKS WIN CONDITIONS AND DRAWS LINE ACCORDINGLY
function checkWinConditions() {

    if (arrayIncludes("0X", "1X", "2X")) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes("3x", "4X", "5X")) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes("6X", "7X", "8X")) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes("0X", "3X", "6X")) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes("1X", "4X", "7X")) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes("2X", "5X", "8X")) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes("6X", "4X", "2X")) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes("0X", "4X", "8X")) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes("0O", "1O", "2O")) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes("3O", "4O", "5O")) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes("6O", "7O", "8O")) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes("0O", "3O", "6O")) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes("1O", "4O", "7O")) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes("2O", "5O", "8O")) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes("6O", "4O", "2O")) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes("0O", "4O", "8O")) { drawWinLine(100, 100, 520, 520) }

    //CHECKS FOR TIE IF 9 SQUARES SELECTED AND NO WINNER
    else if (selectedSquares.length >= 9) {
        //PLAYS AUDIO
        audio("./media/tie.mp3");
        //FUNCTION SETS TIMER VEFORE GAME RESETS
        setTimeout(function () { resetGame(); }, 500);
    }

    //FUNCTION TO CHECK FOR 3 IN A ROW
    function arrayIncludes(squareA, squareB, squareC) {
        //VARIABLES USED TO CHECK FOR 3 IN A ROW
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);

        //IF TRUE THEN OUR DRAWLINE EXECUTES AND DRAWS LINE WHERE 3 IN A ROW
        if (a === true && b === true && c === true) { return true; }
    }
}

//MAKES BODY ELEMENT TEMPORARILY UNCLICKABLE
function disableClick() {
    //BODY BECOMES UNCLICKABLE
    body.style.pointerEvents = "none";
    //CAN CLICK AGAIN AFTER 1 SECONDD
    setTimeout(function () { body.style.pointerEvents = "auto"; }, 100);
}

//ETS STRING PARAMETER FOR AUDIO PATH
function audio(audioURL) {
    //CREATE NEW AUDIO OBJECT AND PASS THE PATH AS A PARAMETER
    let audio = new Audio(audioURL);
    //PLAYS AUDIO SOUND
    audio.play();
}

//UTILIZE CANVAS TO DRAW LINE IN HTML
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {

    //ACCESS TO HTML CANVAS ELEMENT (BY ID)
    const canvas = document.getElementById("winLines");
    //ACCESS TO METHODS & PROPERTIES TO USE ON CANVAS
    const c = canvas.getContext("2d");
    //INDICATES LINES START ON X-AXIS
    let x1 = coordX1,
        //START OF LINES Y-AXIS
        y1 = coordY1,
        //END OF LINES X-AXIS
        x2 = coordX2,
        //END OF LINES Y-AXIS
        y2 = coordY2,
        //STORES TEMPORARY X-AXIS DATA FOR ANIMATION LOOP
        x = x1,
        //STORES TEMPORARY Y-AXIS DATA FOR ANIMATION LOOP
        y = y1;

    //CANVAS INTERACTION
    function animateLineDrawing() {

        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = "rgba(70, 255, 33, .8";
        c.stroke();

        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }

        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }

    disableClick();
    audio("./media/winGame.mp3");
    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);

}

function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = "";
    }
    selectedSquares = [];
}