let score = JSON.parse (localStorage.getItem("score")) || {
    win : 0,
    lose : 0 ,
    tie :0
};

const scoreText = document.getElementById("score-text");
updateScore();

function updateScore(){
    scoreText.innerHTML = `Wins: ${score.win} Loses: ${score.lose} Ties: ${score.tie}`;
}

function playGame(playerMove){
    const computerMove = getComputerMove();

    updateMoves(playerMove , computerMove);

    const result = getResult(playerMove , computerMove);
    if(result === 'Round Win'){
        score.win++;
    }
    else if(result === 'Round Tie'){
        score.tie++;
    }
    else{
        score.lose++;
    }
    document.getElementById('status').innerText = `${result}`;
    updateScore();
}


function updateMoves(playerMove , computerMove){
    const currentMove = document.getElementById('current-moves');
    currentMove.innerHTML = `you <img src="img/${playerMove}-emoji.png" class='move'> <img src="img/${computerMove}-emoji.png" class='move'> Panav`;
    
    localStorage.setItem("score" , JSON.stringify(score));
}

function getComputerMove(){
    const computer = Math.random();

    if(computer < (1/3)){
        return 'rock';
    }
    else if(computer < (2/3)){
        return 'paper';
    }
    else{
        return 'scissor';
    }
}


function getResult(playerMove , computerMove){
    if(playerMove === 'rock'){
        if(computerMove === 'rock'){
            return `Round Tie`;
        }
        else if(computerMove === 'paper'){
            return `Round Lose`;
        }
        else{
            return `Round Win`;
        }
    }
    else if(playerMove === 'paper'){
        if(computerMove === 'rock'){
            return `Round Win`;
        }
        else if(computerMove === 'paper'){
            return `Round Tie`;
        }
        else{
            return `Round Lose`;
        }
    }
    else{
        if(computerMove === 'rock'){
            return `Round Lose`;
        }
        else if(computerMove === 'paper'){
            return `Round Win`;
        }
        else{
            return `Round Tie`;
        }
    }
}


function resetScore(){
    score.win = 0;
    score.lose= 0;
    score.tie = 0;
    localStorage.removeItem("score");
    updateScore();
}