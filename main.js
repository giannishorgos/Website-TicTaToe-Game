let player = 1;
let filled = 0;
let grid = new Array(9);
grid = document.getElementById("parent").querySelectorAll(".cell");


//put's the correct player move at correct signature and with corrects styles
function playAt(cell)
{
    if(filled < 10 && cell.innerHTML === "")
    {
        if(player === 1)
        {
            cell.classList.add("player1");
            cell.innerHTML = "X";
            filled++; 
            player = player == 1 ? 2 : 1;
            document.getElementById("turn_pl").classList.remove("player1");
            document.getElementById("turn_pl").classList.add("player2");
        }
        else 
        {
            cell.classList.add("player2");
            cell.innerHTML = "O"
            filled++;   
            player = player == 1 ? 2 : 1;
            document.getElementById("turn_pl").classList.remove("player2");
            document.getElementById("turn_pl").classList.add("player1");
        }
    }
    player === 1 ? 
        document.getElementById("turn_pl").innerText = "X" : 
        document.getElementById("turn_pl").innerText = "O"

    checkWinner();
} 

//check if someone win the game
function checkWinner()
{
    for(let i = 0; i < 3; ++i)
    {
        if(grid[i].innerHTML === grid[i + 3].innerHTML && grid[i + 3].innerHTML === grid[i + 6].innerHTML
            && (grid[i].innerHTML === "X" || grid[i].innerHTML === "O"))
            displayWinner(grid[i].innerHTML);
    }
    for(let i = 0; i < 7; i += 3)
    {
        if(grid[i].innerHTML === grid[i + 1].innerHTML && grid[i + 1].innerHTML === grid[i + 2].innerHTML
            && (grid[i].innerHTML === "X" || grid[i].innerHTML === "O"))
            displayWinner(grid[i].innerHTML);
    }
    let i = 0;
    if(grid[i].innerHTML === grid[i + 4].innerHTML && grid[i + 4].innerHTML === grid[i + 8].innerHTML 
        && (grid[i].innerHTML === "X" || grid[i].innerHTML === "O"))
        displayWinner(grid[i].innerHTML);

    i = 2;
    if(grid[i].innerHTML === grid[i + 2].innerHTML && grid[i + 2].innerHTML === grid[i + 4].innerHTML
        && (grid[i].innerHTML === "X" || grid[i].innerHTML === "O"))
        displayWinner(grid[i].innerHTML);
    if(filled == 9)
        displayWinner("");
}

//Display the Winning Message
function displayWinner(winner)
{
    document.getElementById("after").innerText = "";
    let elem = document.getElementById("turn_pl");
    if(winner != "")
    {
        document.getElementById("before").innerText = "WINNER   ";
        elem.innerHTML = winner;
        if(elem.classList.contains("player1"))
        {
            elem.classList.remove("player1");
            elem.classList.add("player2");
            document.getElementById("before").classList.add("player2");
            document.getElementById("before").style.fontSize = "50px";
        } 
        else 
        {
            elem.classList.remove("player2");
            elem.classList.add("player1");
            document.getElementById("before").classList.add("player1");
            document.getElementById("before").style.fontSize = "50px";
        }
    }
    else
    {
        document.getElementById("before").innerText = "DRAW !";
        elem.innerHTML = "";

    }
    retry();
}

//show-off the retry button
function retry()
{
    let btn = document.getElementById("retry");
    btn.classList.remove("hide");
    btn.addEventListener("click", reset);
    setTimeout(reset, 2500);
}

//empty the board and reset all the setting
function reset()
{
    let elem = document.getElementById("turn_pl");
    elem.innerText = "X"
    if(elem.classList.contains("player2"))
    {
        elem.classList.add("player1");
        elem.classList.remove("player2");
    }
    let firstMessage = document.getElementById("before");
    if(firstMessage.classList.contains("player2"))
    {
        firstMessage.classList.remove("player2");
    }
    else
    {
        firstMessage.classList.remove("player1");
    }
    firstMessage.innerText = "It's";
    firstMessage.style.fontSize = 'x-large';
    let secondMessage = document.getElementById("after");
    if(secondMessage.classList.contains("player1"))
    {
        secondMessage.classList.remove("player1");
    }
    else
    {
        secondMessage.classList.remove("player2");
    }
    secondMessage.innerText = "turn!"

    for(let i = 0; i < 9; ++i)
    {
        grid[i].innerHTML = "";
        grid[i].className = "cell";
    }
    player = 1;
    filled = 0;
    document.getElementById("retry").classList.add('hide');
}
    
//the "game-loop"
function game()
{
    console.log(grid);
    for(let i = 0; i < 9; i++)
    {
        grid[i].addEventListener("click", function () { playAt(grid[i]); });
    }
}

game();
