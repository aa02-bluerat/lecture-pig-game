'use strict';

function genRand(){
    return Math.floor(Math.random()*6)+1
}

function switchPlayer(){
    resetDice();
    if (player0.classList.contains('player--active')){
            player0.classList.remove('player--active'); 
            player1.classList.add('player--active');
    }
    else if (!player0.classList.contains('player--active')){
            player0.classList.add('player--active'); 
            player1.classList.remove('player--active');
    }
}

function resetDice(){
    numberToHold =0;
    diceImg.classList.add('hidden');
}

let randomNumber =''
let numberToHold =0;
let currentScoreP0=0;
let currentScoreP1=0;


//scores
const p0Score = document.querySelector('#score--0');
const p1Score = document.querySelector('#score--1');
const p0CurrentScore = document.querySelector('#current--0');
const p1CurrentScore = document.querySelector('#current--1');

//scores initial property
p0Score.textContent=Number(0);
p1Score.textContent=Number(0);
p0CurrentScore.textContent=currentScoreP0;
p1CurrentScore.textContent=currentScoreP1;

//buttons
const btnRollDice = document.querySelector('.btn--roll');
const btnNewGame = document.querySelector('.btn--new');
const btnHoldScore = document.querySelector('.btn--hold');

//player windows
const player0 = document.querySelector('.player.player--0');
const player1 = document.querySelector('.player.player--1');

//image
const diceImg = document.querySelector('.dice');
//image initial property
diceImg.classList.add('hidden');





btnRollDice.addEventListener('click', function(){
    randomNumber = genRand()
    console.log(randomNumber);
    diceImg.src=`dice-${randomNumber}.png`;
    diceImg.classList.remove('hidden');

    if (randomNumber!=1){
        numberToHold+=randomNumber;
        if (player0.classList.contains('player--active')){
                p0Score.textContent=numberToHold;
        }  
        else if(!player0.classList.contains('player--active')){
                p1Score.textContent=numberToHold;
        }
    }
    else if (randomNumber=1){
        numberToHold=0;
        if (player0.classList.contains('player--active')){
            p0Score.textContent=numberToHold;
        }  
        else if(!player0.classList.contains('player--active')){
            p1Score.textContent=numberToHold;
        }
        setTimeout(function(){
            p0Score.textContent=Number(0);
            p1Score.textContent=Number(0);
            switchPlayer()
        },180);
        //switchPlayer();
    }
    console.log(typeof numberToHold);
    console.log(numberToHold);
})

btnHoldScore.addEventListener('click', function(){
    if (player0.classList.contains('player--active')){
        currentScoreP0+=numberToHold;
        p0CurrentScore.textContent=currentScoreP0;
        p0Score.textContent=0;
        if((currentScoreP0>=100)||(currentScoreP1>=100)){
            alert('winner winner chicken dinner');
        }
        switchPlayer();
    }  
    else if(!player0.classList.contains('player--active')){
        currentScoreP1+=numberToHold;
        p1CurrentScore.textContent=currentScoreP1;
        p1Score.textContent=0;
        if((currentScoreP0>=100)||(currentScoreP1>=100)){
            alert('winner winner chicken dinner');
        }
        switchPlayer()
    }
    
})

