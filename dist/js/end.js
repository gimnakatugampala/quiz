const saveScoreBtn = document.getElementById('saveScoreBtn');
const username = document.getElementById('username');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

//render the score to the dom
finalScore.innerText = mostRecentScore;

//Saving high sores to the localStorage
// localStorage.setItem('highscore',JSON.stringify([]))
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
console.log(highScores)

//User input value
username.addEventListener('keyup',(e) => {
    saveScoreBtn.disabled = !username.value;
})

saveScoreBtn.addEventListener('click',saveHighScores)

function saveHighScores(e){
    e.preventDefault();

    const score = {
        score:Math.floor(Math.random() * 100),
        name:username.value
    }

    //add to the array
    highScores.push(score)
    //sort the array to the highest score
    highScores.sort((a,b) => b.score -a.score)
    //cut off the lowest in the array
    highScores.splice(5)

    localStorage.setItem('highscore',JSON.stringify(highScores));
    username.value = '';
    console.log(highScores)
}