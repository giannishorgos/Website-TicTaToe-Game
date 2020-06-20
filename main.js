let player = 1;

function game()
{
    if(player == 1)
    {
        this.classList.add("player1");
        this.innerHTML = "X";
    }
    else 
    {
        this.classList.add("player2");
        this.innerHTML = "O"
    }
}

function game()
{
    let grid = new Array(9);
    grid = document.getElementById("parent").querySelectorAll(".cell");

    console.log(grid);
    let filled = 0;
    for(let i = 0; i < 9; i++)
    {
        grid[i].addEventListener("click", function () { game(); }
    }
    console.log(filled);
}

game();
