let currMoleTile; // to keep a track of which tile has a mole
let currPlantTile;
let score=0;
let gameOver = false;



//when our page loads
window.onload=function()
{
    setGame();
}

function setGame()
{
  //setting up the grid for the game board
  // so in game it is 3*3 tile so total 9 tiles
  for(let i=0;i<9;i++)  //i goes from 0 to 8 stops at < 9
  {
    //basically creating a <div id="0-8"></div> tag like so in html
    let tile=document.createElement("div");
    tile.id=i.toString();
    tile.addEventListener("click", selectTile);
    // in this below statement what we did is basically taking  9 tags that we created in javascript and 
    //accessing with id="board" and inserting them inside <div> tag in html
    document.getElementById("board").appendChild(tile);
  }
  //calling the func setMole to set the mole on a randomtiles
  setInterval(setMole,1000);// 1000 milliseconds = 1 seconds for every 2 secs setMole() is called
  setInterval(setPlant,2000);// 200 milliseconds= 2 seconds
}
function getRandomTile()
{
    //Math.random() returns a number b/w 0-1 and it is multiplied by 9 -->(0-1)*9=(0-9) (but it does not include 9)--> rounding off with
    //Math.floor() we are gng to get an integers from (0-8)
   let num=Math.floor(Math.random() * 9);
   //returning the number as a string to that we can use it for the id
   return num.toString();

}

function setMole()
{
   if(gameOver)
   {
    return;
    }
     // for clearing the prev tile that has the mole
    if(currMoleTile)
    {
        currMoleTile.innerHTML =""; //
    }


    //basically creating a <img src="monty-mole.png"></img>
    let mole=document.createElement("img");
    mole.src="./monty-mole.png"
   
    //now we need to randomly place the mole on each of the tiles
    //so to do that
    let num=getRandomTile();
    // this below if condition is executed if the mole and plant occupy the same tile
    if(currPlantTile && currPlantTile.id==num) //that means the tile already has the plant on it
    {
        return;
    }
    currMoleTile=document.getElementById(num);// it is going to take a random tile(which is a div tag) and add the image tag inside it
    currMoleTile.appendChild(mole);
}

function setPlant()
{
    if(gameOver)
   {
    return;
    }
    if(currPlantTile)
    {
        currPlantTile.innerHTML = "";
    }

    let plant =document.createElement("img");
    plant.src="./piranha-plant.png";

    let num=getRandomTile();
    if(currMoleTile && currMoleTile.id==num)
    {
        return;
    }
    currPlantTile=document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile()
{
    if(gameOver)
    {
        return;
    }
    if(this ==currMoleTile)
    {
        score += 10;
        document.getElementById("score").innerText= score.toString();//updates the score for the header tag
    }
    if(this==currPlantTile)
    {
        document.getElementById("score").innerText="GAME OVER: "+ score.toString();
        gameOver=true;
    }
}