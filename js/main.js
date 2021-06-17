import Player from "./Player.js";
console.log("js loaded")
/**
 * To start:
 * Check index.html, make sure the board with fields are created with correct classnames
 * The board should be 3x3 fields
 * Add correct classes
 */
const players = [ ];
const fields = document.querySelectorAll('.box');
const resetButton = document.querySelector(".reset-btn");
let currentPlayer = 0; // This is the index of the array of the currentplayer
let amountOfPlayers = 0;
let currentReward = 10;
//Create two players aligned with the Player class
//const playerOne = ...
//const playerTwo = ...
//Add both players to the players array
updateRewardIndicator(currentReward);
for (let i = 0; i < 1; i++) {
    document.querySelector(".input-btn").addEventListener('click', (e) => {
        if(players.length < 2){
            let duplicatedSymbol = false;
            let inputName = document.getElementById("pname").value;
            let inputSymbol = document.getElementById("psymbol").value;
            if(players.length == 1){
                if(players[0].symbol == inputSymbol){
                    duplicatedSymbol = true;
                }
            }
            if(!duplicatedSymbol){
                const newPlayer = new Player(inputName, inputSymbol);
                players.push(newPlayer);
                changePlayerTurn();
                amountOfPlayers++;

                if(amountOfPlayers == 1) {
                    document.querySelector(".player1Name").textContent = inputName;
                    document.querySelector(".player1Symbol").textContent = inputSymbol;
                    document.querySelector(".player1Balance").textContent = 0;
                } else {
                    document.querySelector(".player2Name").textContent = inputName;
                    document.querySelector(".player2Symbol").textContent = inputSymbol;
                    document.querySelector(".player2Balance").textContent = 0;
                }
            } else {
                alert("You can't have the same symbol as player 1!");
            }
        } else {
            alert("too many players");
        }
    })
}

/**
 * Assignment
 * Make a loop thru all the fields and add a click event. 
 * Connect the addSymbolToField function in the eventHandler
 */
for (let i = 0; i < fields.length; i++){
    fields[i].addEventListener('click', (e) => {
        if(players.length == 2){
            console.log(i);
            addSymbolToField(i);
            if(checkWinner()){
                resetBoard();
            }
            changePlayerTurn();
        } else {
            alert("You need to add more players!");
        }
    })
}

/**
 * Assignment 
 * Give body to the reset function (the function exists below)
 */
resetButton.addEventListener("click", resetBoard);

/* fix symbol not showing up*/
function addSymbolToField(box) {
    let fieldContent = fields[box].textContent;

    if (fieldContent === players[0].symbol || fieldContent === players[1].symbol) {
        alert('This field can not be used');
    }

    if (currentPlayer == 0){
        fields[box].textContent = players[0].symbol;
    } else {
        fields[box].textContent = players[1].symbol;
    }
}

function updateBalanceIndicator() {
    if(document.querySelector(".player1Balance") || document.querySelector(".player2Balance")) {
        document.querySelector(".player1Balance").textContent = players[0].points;
        document.querySelector(".player2Balance").textContent = players[1].points;
    }
}

function updateRewardIndicator(reward) {
    if (document.querySelector(".currentReward")) {
        document.querySelector(".currentReward").textContent = reward;
    }
}

function updateStreakIndicator() {
    if(document.querySelector(".player1Streak") || document.querySelector(".player2Streak")) {
        document.querySelector(".player1Streak").textContent = players[0].winCounter;
        document.querySelector(".player2Streak").textContent = players[1].winCounter;
    }
}

function changePlayerTurn() {
    currentPlayer++;
    if(currentPlayer >1) {
        currentPlayer = 0;
    }
}

function resetBoard() {
    for (let g = 0; g < fields.length; g++){
        fields[g].textContent = "";
    }
}

function endOfMatch(playerr, winner) {
    alert("Player: " + winner + " won!"); 
    players[playerr].addPointsPlayer(currentReward);
    if(players[0].winCounter > players[1].winCounter || players[1].winCounter > players[0].winCounter) {
        for(let p = 0; p < players[playerr].winCounter; p++) {
            currentReward += 10;
        }
    } else {
        for(let i = 0; players[i] > players[i + 1]; i++)
        currentReward = 10;
    }
    updateRewardIndicator(currentReward);
    updateBalanceIndicator();
    updateStreakIndicator();
}

function checkWinner() {
    let winPlayer = currentPlayer + 1;
    if(fields[0].textContent == players[0].symbol && fields[1].textContent == players[0].symbol && fields[2].textContent == players[0].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[3].textContent == players[0].symbol && fields[4].textContent == players[0].symbol && fields[5].textContent == players[0].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[6].textContent == players[0].symbol && fields[7].textContent == players[0].symbol && fields[8].textContent == players[0].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[0].textContent == players[0].symbol && fields[3].textContent == players[0].symbol && fields[6].textContent == players[0].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[1].textContent == players[0].symbol && fields[4].textContent == players[0].symbol && fields[7].textContent == players[0].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[4].textContent == players[0].symbol && fields[5].textContent == players[0].symbol && fields[8].textContent == players[0].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[0].textContent == players[0].symbol && fields[4].textContent == players[0].symbol && fields[8].textContent == players[0].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[2].textContent == players[0].symbol && fields[4].textContent == players[0].symbol && fields[6].textContent == players[0].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[2].textContent == players[0].symbol && fields[5].textContent == players[0].symbol && fields[8].textContent == players[0].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[0].textContent == players[1].symbol && fields[1].textContent == players[1].symbol && fields[2].textContent == players[1].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[3].textContent == players[1].symbol && fields[4].textContent == players[1].symbol && fields[5].textContent == players[1].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[6].textContent == players[1].symbol && fields[7].textContent == players[1].symbol && fields[8].textContent == players[1].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[0].textContent == players[1].symbol && fields[3].textContent == players[1].symbol && fields[6].textContent == players[1].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[1].textContent == players[1].symbol && fields[4].textContent == players[1].symbol && fields[7].textContent == players[1].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[4].textContent == players[1].symbol && fields[5].textContent == players[1].symbol && fields[8].textContent == players[1].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[0].textContent == players[1].symbol && fields[4].textContent == players[1].symbol && fields[8].textContent == players[1].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[2].textContent == players[1].symbol && fields[4].textContent == players[1].symbol && fields[6].textContent == players[1].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    else if(fields[2].textContent == players[1].symbol && fields[5].textContent == players[1].symbol && fields[8].textContent == players[1].symbol) {
        endOfMatch(currentPlayer, winPlayer);
        return true;
    }
    return false;
}

console.log('File loaded');