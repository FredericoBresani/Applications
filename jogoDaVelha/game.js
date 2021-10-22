function tabuleiro(){
    for (let linhas = 0; linhas < 3; linhas++){
      let linha = document.createElement('div');
      linha.setAttribute('class', 'linhas');
      document.querySelector(".corpo").insertAdjacentElement('beforeend', linha);
      for (let squares = 0; squares < 3; squares++){
        

        let slot = document.createElement('div');
        slot.setAttribute('class', 'square');
        slot.setAttribute('id', linhas.toString()+squares.toString());
        document.querySelectorAll(".linhas")[linhas].insertAdjacentElement('beforeend', slot);
      }
    }
}
tabuleiro();

let quemJoga = 0;
let linha0X = 0, linha1X = 0, linha2X = 0;
let coluna0X = 0, coluna1X = 0, coluna2X = 0;
let D0X = 0, D1X = 0, D0O = 0, D1O = 0;
let linha0O = 0, linha1O = 0, linha2O = 0;
let coluna0O = 0, coluna1O = 0, coluna2O = 0;
let pointsO = 0;
document.querySelector(".roundx").style.borderColor = "#A3E635";
function inserir(){
  if (quemJoga % 2 == 0){
    let qualSquare = this.getAttribute('id');
    if (this.innerHTML == ""){
      let xs = document.createElement('div');
      xs.setAttribute('class', 'x');
      let divImg = document.createElement('img');
      divImg.setAttribute('src', 'x.svg');
      xs.insertAdjacentElement('beforeend', divImg);
      this.insertAdjacentElement('beforeend', xs);
      quemJoga++;
      document.querySelector(".roundO").style.borderColor = "#A3E635";
      document.querySelector(".roundx").style.borderColor = "#C4B5FD";
      //------------------------- LINHAS X -----------------------------------//
      if (qualSquare == "00" || qualSquare == "01" || qualSquare == "02"){
        linha0X++;
      }
      else if (qualSquare == "10" || qualSquare == "11" || qualSquare == "12"){
        linha1X++;
      }
      else if (qualSquare == "20" || qualSquare == "21" || qualSquare == "22"){
        linha2X++;
      }
      //--------------------------------------------------------------------//

      //------------------------ COLUNAS X ---------------------------------//
      if (qualSquare == "00" || qualSquare == "10" || qualSquare == "20"){
        coluna0X++;
      }
      else if (qualSquare == "01" || qualSquare == "11" || qualSquare == "21"){
        coluna1X++;
      }
      else if (qualSquare == "02" || qualSquare == "12" || qualSquare == "22"){
        coluna2X++;
      }
      //-------------------------------------------------------------------//

      //---------------------- DIAGONALS X --------------------------------//
      if (qualSquare == "00" || qualSquare == "11" || qualSquare == "22"){
        D0X++;
      }
      if (qualSquare == "02" || qualSquare == "11" || qualSquare == "20"){
        D1X++;
      }
      //------------------------------------------------------------------//
      if (coluna0X == 3 || coluna1X == 3 || coluna2X == 3 
        || linha0X == 3 || linha1X == 3 || linha2X == 3 || D0X == 3 || D1X == 3){
          stop("X");
      }
    }
  } else {
    if (this.innerHTML == ""){
      let Os = document.createElement('div');
      let qualSquare = this.getAttribute('id');
      Os.setAttribute('class', 'O');
      this.insertAdjacentElement('beforeend', Os);
      quemJoga++;
      document.querySelector(".roundx").style.borderColor = "#A3E635";
      document.querySelector(".roundO").style.borderColor = "#C4B5FD";
      //------------------------- LINHAS X -----------------------------------//
      if (qualSquare == "00" || qualSquare == "01" || qualSquare == "02"){
        linha0O++;
      }
      else if (qualSquare == "10" || qualSquare == "11" || qualSquare == "12"){
        linha1O++;
      }
      else if (qualSquare == "20" || qualSquare == "21" || qualSquare == "22"){
        linha2O++;
      }
      //--------------------------------------------------------------------//

      //------------------------ COLUNAS X ---------------------------------//
      if (qualSquare == "00" || qualSquare == "10" || qualSquare == "20"){
        coluna0O++;
      }
      else if (qualSquare == "01" || qualSquare == "11" || qualSquare == "21"){
        coluna1O++;
      }
      else if (qualSquare == "02" || qualSquare == "12" || qualSquare == "22"){
        coluna2O++;
      }
      //-------------------------------------------------------------------//

      //---------------------- DIAGONALS X --------------------------------//
      if (qualSquare == "00" || qualSquare == "11" || qualSquare == "22"){
        D0O++;
      }
      if (qualSquare == "02" || qualSquare == "11" || qualSquare == "20"){
        D1O++;
      }
      //------------------------------------------------------------------//
      if (coluna0O == 3 || coluna1O == 3 || coluna2O == 3 
        || linha0O == 3 || linha1O == 3 || linha2O == 3 || D0O == 3 || D1O == 3){
          stop("O");
      }
    }
  }
  if (quemJoga == 9 && 
    (coluna0O != 3 && coluna1O != 3 && coluna2O != 3 && 
      linha0O != 3 && linha1O != 3 && linha2O != 3 && D0O != 3 && D1O != 3) && 
    (coluna0X != 3 && coluna1X != 3 && coluna2X != 3 &&
      linha0X != 3 && linha1X != 3 && linha2X != 3 && D0X != 3 && D1X != 3)) {
        empate();
      }
  
}
let quantidadeDeQuadrados = document.querySelectorAll('.square').length;
for (let x = 0; x < quantidadeDeQuadrados; x++){
  document.querySelectorAll('.square')[x].addEventListener('click', inserir);
}


function stop(quemGanhou){
  setTimeout(function(){
    for (let x = 0; x < 3; x++){
      document.querySelectorAll(".linhas")[x].style.display = "none";
    }
    document.querySelector(".endGame h2").innerHTML = quemGanhou + " ganhou!";
    document.querySelector(".endGame").style.display = "flex";
  }, 50);
}
function empate(){
  setTimeout(function(){
    for (let x = 0; x < 3; x++){
      document.querySelectorAll(".linhas")[x].style.display = "none";
    }
    document.querySelector(".endGame h2").innerHTML = "Empate!";
    document.querySelector(".endGame").style.display = "flex";
    
  }, 50);
}
function reset(){
  location.reload();
}
document.querySelector(".reset button").addEventListener('click', reset);