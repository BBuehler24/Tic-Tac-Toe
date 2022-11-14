 // Variables:
 let click = 0;
 let player1score = 0;
 let player2score = 0;
 let cells = document.getElementsByClassName("cell");
 let reset = document.getElementById("reset");

// Input player names:
document.getElementById("name1").onclick = function(){
	var name = prompt("Enter Player O Name");
  document.querySelector("#player_score1").innerText = name + ":";
}
document.getElementById("name2").onclick = function(){
	var name2 = prompt("Enter Player X Name");
  document.querySelector("#player_score2").innerText = name2 + ":";
}

 // Adds cell click listener for plays:
 for (let i = 0; i < cells.length; i++) {
   cells[i].addEventListener("click", gamePlay);
 }

// Allows "O" & "X" plays + removes 'click' function after cell is played:
 function gamePlay() {
   this.style.background = "orange";
   if (click % 2 == 0) {
     this.innerHTML = "0";
     this.removeEventListener('click',gamePlay)
   } else {
     this.innerHTML = "X";
     this.removeEventListener('click',gamePlay)
   }

   // Checks possible winner combos + adds tally to player scores:
   click += 1;
   let c0 = document.getElementById("cell0");
   let c1 = document.getElementById("cell1");
   let c2 = document.getElementById("cell2");
   let c3 = document.getElementById("cell3");
   let c4 = document.getElementById("cell4");
   let c5 = document.getElementById("cell5");
   let c6 = document.getElementById("cell6");
   let c7 = document.getElementById("cell7");
   let c8 = document.getElementById("cell8");
   let player1 = document.getElementById("player1");
   let player2 = document.getElementById("player2");

   if (c0.innerText === "0" && c1.innerText === "0" && c2.innerText === "0") {
     alert("Player 'O' won");
     player1score += 1;
     player1.innerText = player1score;
     for (let i = 0; i < cells.length; i++) {
       cells[i].removeEventListener("click", gamePlay);
       c0.style.backgroundColor = "rgb(200, 89, 89)";
       c1.style.backgroundColor = "rgb(200, 89, 89)";
       c2.style.backgroundColor = "rgb(200, 89, 89)";
     }
   } else if (c3.innerText === "0" && c4.innerText === "0" && c5.innerText === "0") {
     alert("Player '0' won");
     player1score += 1;
     player1.innerText = player1score;
     for (let i = 0; i < cells.length; i++) {
       cells[i].removeEventListener("click", gamePlay);
       c3.style.backgroundColor = "rgb(200, 89, 89)";
       c4.style.backgroundColor = "rgb(200, 89, 89)";
       c5.style.backgroundColor = "rgb(200, 89, 89)";
     }
   } else if (c6.innerText === "0" && c7.innerText === "0" && c8.innerText === "0") {
     alert("Player '0' won");
     player1score += 1;
     player1.innerText = player1score;
     for (let i = 0; i < cells.length; i++) {
       cells[i].removeEventListener("click", gamePlay);
       c6.style.backgroundColor = "rgb(200, 89, 89)";
       c7.style.backgroundColor = "rgb(200, 89, 89)";
       c8.style.backgroundColor = "rgb(200, 89, 89)";
     }
   } else if (c0.innerText === "0" && c3.innerText === "0" && c6.innerText === "0") {
     alert("Player '0' won");
     player1score += 1;
     player1.innerText = player1score;
     for (let i = 0; i < cells.length; i++) {
       cells[i].removeEventListener("click", gamePlay);
       c0.style.backgroundColor = "rgb(200, 89, 89)";
       c3.style.backgroundColor = "rgb(200, 89, 89)";
       c6.style.backgroundColor = "rgb(200, 89, 89)";
     }
   } else if (c1.innerText === "0" && c4.innerText === "0" && c7.innerText === "0") {
     alert("Player '0' won");
     player1score += 1;
     player1.innerText = player1score;
     for (let i = 0; i < cells.length; i++) {
       cells[i].removeEventListener("click", gamePlay);
       c1.style.backgroundColor = "rgb(200, 89, 89)";
       c4.style.backgroundColor = "rgb(200, 89, 89)";
       c7.style.backgroundColor = "rgb(200, 89, 89)";
     }
   } else if (c2.innerText === "0" && c5.innerText === "0" && c8.innerText === "0") {
     alert("Player '0' won");
     player1score += 1;
     player1.innerText = player1score;
     for (let i = 0; i < cells.length; i++) {
       cells[i].removeEventListener("click", gamePlay);
       c2.style.backgroundColor = "rgb(200, 89, 89)";
       c5.style.backgroundColor = "rgb(200, 89, 89)";
       c8.style.backgroundColor = "rgb(200, 89, 89)";
     }
   } else if (c0.innerText === "0" && c4.innerText === "0" && c8.innerText === "0") {
     alert("Player '0' won");
     player1score += 1;
     player1.innerText = player1score;
     for (let i = 0; i < cells.length; i++) {
       cells[i].removeEventListener("click", gamePlay);
       c0.style.backgroundColor = "rgb(200, 89, 89)";
       c4.style.backgroundColor = "rgb(200, 89, 89)";
       c8.style.backgroundColor = "rgb(200, 89, 89)";
     }
   } else if (c2.innerText === "0" && c4.innerText === "0" && c6.innerText === "0") {
     alert("Player '0' won");
     player1score += 1;
     player1.innerText = player1score;
     for (let i = 0; i < cells.length; i++) {
       cells[i].removeEventListener("click", gamePlay);
       c2.style.backgroundColor = "rgb(200, 89, 89)";
       c4.style.backgroundColor = "rgb(200, 89, 89)";
       c6.style.backgroundColor = "rgb(200, 89, 89)";
     }
   } else if (c0.innerText === "X" && c1.innerText === "X" && c2.innerText === "X") {
     alert("Player 'X' won");
     player2score += 1;
     player2.innerText = player2score;
     for (let i = 0; i < cells.length; i++) {
       cells[i].removeEventListener("click", gamePlay);
       c0.style.backgroundColor = "rgb(200, 89, 89)";
       c1.style.backgroundColor = "rgb(200, 89, 89)";
       c2.style.backgroundColor = "rgb(200, 89, 89)";
     }
   } else if (c3.innerText === "X" && c4.innerText === "X" && c5.innerText === "X") {
     alert("Player 'X' won");
     player2score += 1;
     player2.innerText = player2score;
     for (let i = 0; i < cells.length; i++) {
       cells[i].removeEventListener("click", gamePlay);
       c3.style.backgroundColor = "rgb(200, 89, 89)";
       c4.style.backgroundColor = "rgb(200, 89, 89)";
       c5.style.backgroundColor = "rgb(200, 89, 89)";
     }
   } else if (c6.innerText === "X" && c7.innerText === "X" && c8.innerText === "X") {
     alert("Player 'X' won");
     player2score += 1;
     player2.innerText = player2score;
     for (let i = 0; i < cells.length; i++) {
       cells[i].removeEventListener("click", gamePlay);
       c6.style.backgroundColor = "rgb(200, 89, 89)";
       c7.style.backgroundColor = "rgb(200, 89, 89)";
       c8.style.backgroundColor = "rgb(200, 89, 89)";
     }
   } else if (c0.innerText === "X" && c3.innerText === "X" && c6.innerText === "X") {
     alert("Player 'X' won");
     player2score += 1;
     player2.innerText = player2score;
     for (let i = 0; i < cells.length; i++) {
       cells[i].removeEventListener("click", gamePlay);
       c0.style.backgroundColor = "rgb(200, 89, 89)";
       c3.style.backgroundColor = "rgb(200, 89, 89)";
       c6.style.backgroundColor = "rgb(200, 89, 89)";
     }
   } else if (c1.innerText === "X" && c4.innerText === "X" && c7.innerText === "X") {
     alert("Player 'X' won");
     player2score += 1;
     player2.innerText = player2score;
     for (let i = 0; i < cells.length; i++) {
       cells[i].removeEventListener("click", gamePlay);
       c1.style.backgroundColor = "rgb(200, 89, 89)";
       c4.style.backgroundColor = "rgb(200, 89, 89)";
       c7.style.backgroundColor = "rgb(200, 89, 89)";
     }
   } else if (c2.innerText === "X" && c5.innerText === "X" && c8.innerText === "X") {
     alert("Player 'X' won");
     player2score += 1;
     player2.innerText = player2score;
     for (let i = 0; i < cells.length; i++) {
       cells[i].removeEventListener("click", gamePlay);
       c2.style.backgroundColor = "rgb(200, 89, 89)";
       c5.style.backgroundColor = "rgb(200, 89, 89)";
       c8.style.backgroundColor = "rgb(200, 89, 89)";
     }
   } else if (c0.innerText === "X" && c4.innerText === "X" && c8.innerText === "X") {
     alert("Player 'X' won");
     player2score += 1;
     player2.innerText = player2score;
     for (let i = 0; i < cells.length; i++) {
       cells[i].removeEventListener("click", gamePlay);
       c0.style.backgroundColor = "rgb(200, 89, 89)";
       c4.style.backgroundColor = "rgb(200, 89, 89)";
       c8.style.backgroundColor = "rgb(200, 89, 89)";
     }
   } else if (c2.innerText === "X" && c4.innerText === "X" && c6.innerText === "X") {
     alert("Player 'X' won");
     player2score += 1;
     player2.innerText = player2score;
     for (let i = 0; i < cells.length; i++) {
       cells[i].removeEventListener("click", gamePlay);
       c2.style.backgroundColor = "rgb(200, 89, 89)";
       c4.style.backgroundColor = "rgb(200, 89, 89)";
       c6.style.backgroundColor = "rgb(200, 89, 89)";
     }
   } else if (click === 9){
    alert ("It's A Draw!!...Reset Game To Play Again!!")
   }
 }

 // Game Reset:
reset.addEventListener("click", function () {
   for (let i = 0; i < cells.length; i++) {
     cells[i].innerHTML = "";
     cells[i].style.background = "#f3e0a0";
     click = 0;
     for (let i = 0; i < cells.length; i++) {
       cells[i].addEventListener("click", gamePlay);
       cells[i].style.color = "black";
     }
   }
 });