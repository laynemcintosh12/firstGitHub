document.addEventListener("DOMContentLoaded", function(){
    let start = document.getElementById("startBtn");
    let highScoreDiv = document.getElementById("highScore");
    highScore = localStorage.getItem("highScore");
    highScoreDiv.innerText = highScore;
    start.addEventListener("click", startGame);
   
})


function startGame(event){
    let start = document.getElementById("startBtn");
    let newGame = document.getElementById('newGameBtn');
    let gameOver = document.getElementsByClassName("gameOver")[0];
    let newGameBtn = document.getElementById('newGameBtn');
    let scoreContainer = document.getElementById("scoreContainer");
    if(event.target === start || event.target === newGame){
        sessionStorage.clear('score');
        let scoreDiv = document.getElementById('score');
        let score = 0;
        scoreDiv.innerText = score;
        createDivsForPokemon(shuffled);
        start.style.display = "none";
        newGameBtn.style.display = "none";
        gameOver.classList.remove('gameOver');
        scoreContainer.style.display = "flex";
    }
}


// set and shuffle the pokemon
const pokemon = [
    "goldeen",
    "crabby",
    "squirtle",
    "magicarp",
    "arceus",
    "arceus",
    "goldeen",
    "squirtle",
    "crabby",
    "magicarp",
    "arceus",
    "goldeen",
    "squirtle",
    "crabby",
    "arceus",
    "goldeen",
    "squirtle",
    "crabby",
  ];


let shuffled = shuffle(pokemon);


function shuffle(array){
    let counter = array.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
return array;
}






// create divs for the shuffled pokemon
const gameContainer = document.getElementById('gameContainer');


function createDivsForPokemon(pokemonArray) {
    for (let poke of pokemonArray) {
      const newDiv = document.createElement("div");
      let id = poke;
      newDiv.classList.add(id);
      newDiv.addEventListener("click", handleCardClick); // how to handle when a card is clicked
      gameContainer.append(newDiv);
    }
}






// handling a card click
const goldeen = document.getElementsByClassName("goldeen");
const crabby = document.getElementsByClassName("crabby");
const squirtle = document.getElementsByClassName("squirtle");
const magicarp = document.getElementsByClassName("magicarp");
const arceus = document.getElementsByClassName("arceus");


let clickCounter = [];
let gameCounter = [];
function handleCardClick (event){
    event.target.classList.add("event");
    event.target.classList.add("hasValue");
    if (event.target.classList.contains('goldeen')){
        event.target.style.backgroundImage = "url('https://crystal-cdn3.crystalcommerce.com/photos/6506869/1475277.jpg')";;
        clickCounter.push("goldeen");
        gameCounter.push("count");
       
    }
    else if (event.target.classList.contains('crabby')){
        event.target.style.backgroundImage = 'url("https://tools.toywiz.com/_images/_webp/_products/lg/pokemonfossil051edition.webp")';
        clickCounter.push("crabby");
        gameCounter.push("count");
     
    }
    else if (event.target.classList.contains('squirtle')){
        event.target.style.backgroundImage = 'url("https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1475493.jpg")';
        clickCounter.push("squirtle");
        gameCounter.push("count");
    }
    else if (event.target.classList.contains("magicarp")){
        event.target.style.backgroundImage = "url('https://m.media-amazon.com/images/I/51uKri+DkTL._AC_UF894,1000_QL80_.jpg')";
        clickCounter.push("magicarp")
        gameCounter.push("count");
    }
    else { // arceus
        event.target.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdxczVFrEAWagTIFjvThaGyEYFc_Pgr9MlYqfmoh_sikSv3D4qSExA8PVMdNt-J3aRNvA&usqp=CAU")';
        clickCounter.push("arceus");
        gameCounter.push("count");
    }
        matchPokemon(clickCounter);
        setTimeout(checkWin, 500);
}




function matchPokemon(arr){
    if (arr.length === 2){  
        let scoreDiv = document.getElementById("score");
        let highScoreDiv = document.getElementById("highScore");  
        let firstClick = arr[0];
        let secondClick = arr[1];
        let score = JSON.parse(sessionStorage.getItem('score')) || 0;
        let highScore = JSON.parse(localStorage.getItem("highScore")) || 0;
        if (!(firstClick === secondClick)){
            setTimeout ( function(){
            let firstFlip = document.getElementsByClassName('event')[0];
            let secondFlip = document.getElementsByClassName('event')[1];
            firstFlip.style.backgroundImage = 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4f7705ec-8c49-4eed-a56e-c21f3985254c/dah43cy-a8e121cb-934a-40f6-97c7-fa2d77130dd5.png/v1/fill/w_759,h_1053/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQyMCIsInBhdGgiOiJcL2ZcLzRmNzcwNWVjLThjNDktNGVlZC1hNTZlLWMyMWYzOTg1MjU0Y1wvZGFoNDNjeS1hOGUxMjFjYi05MzRhLTQwZjYtOTdjNy1mYTJkNzcxMzBkZDUucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.9GzaYS7sd8RPY5FlHca09J9ZQZ9D9zI69Ru-BsbkLDA")';
            secondFlip.style.backgroundImage = 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4f7705ec-8c49-4eed-a56e-c21f3985254c/dah43cy-a8e121cb-934a-40f6-97c7-fa2d77130dd5.png/v1/fill/w_759,h_1053/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQyMCIsInBhdGgiOiJcL2ZcLzRmNzcwNWVjLThjNDktNGVlZC1hNTZlLWMyMWYzOTg1MjU0Y1wvZGFoNDNjeS1hOGUxMjFjYi05MzRhLTQwZjYtOTdjNy1mYTJkNzcxMzBkZDUucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.9GzaYS7sd8RPY5FlHca09J9ZQZ9D9zI69Ru-BsbkLDA")';
            firstFlip.classList.remove('event');
            secondFlip.classList.remove('event');
            clickCounter.splice(0, clickCounter.length);
        }, 600);
        }
        else {
            if (!(score === 0)){
                score = JSON.parse(sessionStorage.getItem('score')) + 100;
                scoreDiv.innerText = score;
                sessionStorage.setItem('score', JSON.stringify(score));
            }
            else if (score === 0){
                score = 100;
                sessionStorage.setItem('score', JSON.stringify(score));
            }
            scoreDiv.innerText = score;
            if (score > highScore){
                highScore = score;
                highScoreDiv.innerText = highScore;
            }
            let first = document.querySelector('.event');
            first.classList.remove('event');
            let second = document.querySelector(".event");
            second.classList.remove('event');
            localStorage.setItem("highScore", JSON.stringify(highScore));
            clickCounter.splice(0,clickCounter.length);
        }
    }
}




function checkWin(){
    let score = JSON.parse(sessionStorage.getItem('score'));
    let body = document.getElementById("newGame");
    let scoreContainer = document.getElementById("scoreContainer");
    let newGame = document.getElementById('newGameBtn');
    if (score === 900){
        sessionStorage.clear('score');
        body.classList.add("gameOver")
        scoreContainer.style.display = "none";
        gameContainer.innerHTML = '';
        newGame.style.display = "flex";
        newGame.addEventListener("click", startGame);
        alert('Congrats, You Win');
    }
}
