let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Loses: 0
};
function compChoice () {
    const randomNumber = Math.random();
    let result = "";

    if (randomNumber >= 0 && randomNumber <= 1/2) {
        result = 'head';
    }
    else {
        result = 'tail';
    }
    return result;
}

function userChoice(choice) {
    const result = compChoice();
    let message = '';

    if (result === choice) {
        message = 'You win';
        score.Wins ++;
        alert(`${message}! Wins: ${score.Wins}, Loses: ${score.Loses}`)
        
        
    }
    else {
        message = 'You lose';        
        score.Loses ++;
        alert(`${message}! Wins: ${score.Wins}, Loses: ${score.Loses}`)

    }
    const scoreString = JSON.stringify(score);
    localStorage.setItem('score', scoreString);
    
}
function reset() {
    score = {
        Wins: 0,
        Loses: 0
    };
}