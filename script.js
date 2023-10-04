const dice = document.querySelector('.imgdice');
const roll_dice = document.querySelector('.roll-dice');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

roll_dice.addEventListener('click', function()
{
    dice.classList.remove('hide');
    const values = Math.ceil(Math.random()*6);
    dice.src = `Dice-${values}.png`;

    if(values!== 1)
    {
        currentScore += values;
        document.querySelector(`.current-score-p${activePlayer}`).textContent = currentScore.toString();
    }

    if(values === 1)
    {
        currentScore = 0;
    }
})