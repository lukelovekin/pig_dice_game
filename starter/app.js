/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var activePlayer, scores, gamePlaying, roundScore;

init()


document.querySelector(".btn-roll").addEventListener('click', function() {
    if (gamePlaying) {
        var diceDom = document.querySelector('.dice')
        var dice = Math.floor((Math.random() * 6) + 1)
        diceDom.style.display = 'block'
        diceDom.src = "dice-" + dice + ".png"

        roundScore += dice
        document.querySelector('#current-' + activePlayer).innerHTML = roundScore
        
        if (dice === 1) {
            nextPlayer()
        }
    }

})


document.querySelector(".btn-hold").addEventListener('click', function () {
    if (gamePlaying) {
        scores[activePlayer] += roundScore
    
        if (scores[activePlayer] >= 100) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner'
            gamePlaying = false
        }else{
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
    
            nextPlayer()
        }
    }
})


document.querySelector(".btn-new").addEventListener('click', init)


function nextPlayer() {

    roundScore = 0

    activePlayer ? activePlayer = 0 : activePlayer = 1
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')

    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0';
}

function init() {
    scores = [0, 0]
    gamePlaying = true
    activePlayer = 0
    roundScore = 0

    document.querySelector(".dice").style.display = 'none'

    document.querySelector('#score-0').innerHTML = "0"
    document.querySelector('#score-1').innerHTML = "0"
    document.querySelector('#current-0').innerHTML = "0"
    document.querySelector('#current-1').innerHTML = "0"
    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2';
}