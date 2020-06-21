let player = 1;
let filled = 0;
let grid = new Array(9);
grid = document.getElementById("parent").querySelectorAll(".cell");

function play_at(cell)
{
    if(filled < 10 && cell.innerHTML == "")
    {
        if(player == 1)
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
    player == 1 ? 
        document.getElementById("turn_pl").innerText = "X" : 
        document.getElementById("turn_pl").innerText = "O"

    check_winner();
}

function check_winner()
{
    for(let i = 0; i < 6; i += 3)
    {
        if((grid[i].innerHTML === grid[i + 1].innerHTML && grid[i + 1].innerHTML === grid[i + 2].innerHTML) 
            && (grid[i].innerHTML === "X" || grid[i].innerHTML === "O"))
            console.log("winner");
    }
}
function game()
{
    console.log(filled);
    for(let i = 0; i < 9; i++)
    {
        grid[i].addEventListener("click", function () { play_at(grid[i]); })
    }
}

game();
