const dice = document.querySelector('.imgdice');
const roll_dice = document.querySelector('.roll-dice');
const hold_btn = document.querySelector('.hold');
const popup = document.querySelector('.popup');
const dark = document.querySelector('.dark');
const cross = document.querySelector('.cross');
const new_game = document.querySelector('.new-game');

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
    else if(values === 1)
    {
        currentScore = 0;
        if(activePlayer === 0)
        {
            activePlayer = 1;
            document.querySelector('.current-score-p0').textContent = 0;
            alert('Player 2 turn.');
        }
        else if(activePlayer === 1)
        {
            activePlayer = 0;
            document.querySelector('.current-score-p1').textContent = 0;
            alert('Player 1 turn.');
        }
    }
})

hold_btn.addEventListener('click', function()
{

    if(activePlayer === 0)
    {
        let random_value = parseInt(document.querySelector('.total-score-p0').textContent);
        random_value += currentScore;
        document.querySelector('.total-score-p0').textContent = random_value.toString();
        activePlayer = 1;
        document.querySelector('.current-score-p0').textContent = 0;
        alert('Player 2 turn.');
    }
    else if(activePlayer === 1)
    {
        let random_value = parseInt(document.querySelector('.total-score-p1').textContent);
        random_value += currentScore;
        document.querySelector('.total-score-p1').textContent = random_value.toString();
        activePlayer = 0;
        document.querySelector('.current-score-p1').textContent = 0;
        alert('Player 1 turn.');
    }
    if(parseInt(document.querySelector('.total-score-p0').textContent) >= 100)
    {
        popup.classList.remove('hidden');
        dark.classList.remove('hidden');
        document.querySelector('.playerName').textContent = 'Player-1 has won.'
    }
    else if(parseInt(document.querySelector('.total-score-p1').textContent) >= 100)
    {
        popup.classList.remove('hidden');
        dark.classList.remove('hidden');
        document.querySelector('.playerName').textContent = 'Player-2 has won.'
    }
    currentScore = 0;
})

cross.addEventListener('click', function()
{
    popup.classList.add('hidden');
    dark.classList.add('hidden');
})

new_game.addEventListener('click', function()
{
    document.querySelector('.current-score-p0').textContent = 0;
    document.querySelector('.current-score-p1').textContent = 0;
    document.querySelector('.total-score-p0').textContent = 0;
    document.querySelector('.total-score-p1').textContent = 0;
    currentScore = 0;
    activePlayer = 0;
})



