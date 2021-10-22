const printar = function digitarNumero (){
  var display = document.querySelector(".display");
  var dentroDisplay = "";
  dentroDisplay = display.value + this.innerHTML;
  display.value = dentroDisplay;
  
  
}
const apagar = function apaga (){
  if (document.querySelector(".display").value.length != 0){
    var tamanho = document.querySelector(".display").value.length;
    var display = document.querySelector(".display").value;
    var resposta = "";
    for (var x = 0; x < tamanho - 1; x++){
      resposta = resposta + display.charAt(x);
    }
    
    document.querySelector(".display").value = resposta;
  }
}
const resultado = function result (){
  var display = document.querySelector(".display").value;
  var tamanho = document.querySelector(".display").value.length;
  var numeroUm = "", numeroDois = "", operador = "";
  var n1 = 0, n2 = 0, valor = 0;
  var verifica = false, operacao = false;
  if (this.innerHTML == "=" || this.innerHTML == "√n" || this.innerHTML == "n<sup>2</sup>"){
    for(var x = 0; x < tamanho && verifica == false; x++){
      if (display.charAt(x) == "+" || display.charAt(x) == "-" || display.charAt(x) == "*" || display.charAt(x) == "/"){
        operacao = true;
        operador = display.charAt(x);
        for (var z = 0; z < x; z++){
          if (display.charAt(z) == ","){
            numeroUm = numeroUm + ".";
          } else {
            numeroUm = numeroUm + display.charAt(z);
          }
          n1 = parseFloat(numeroUm);
        }
        for (var y = z + 1; y < tamanho; y++){
          if (display.charAt(y) == ","){
            numeroDois = numeroDois + ".";
          } else {
            numeroDois = numeroDois + display.charAt(y);
          }
          n2 = parseFloat(numeroDois);
        }
        if (operador == "+"){
          
          valor = n1 + n2;
        }
        else if (operador == "*"){
          
          valor = (n1 * n2);
        }
        else if (operador == "-"){
          
          valor = (n1 - n2);
        }
        else if (operador == "/"){
          
         valor = (n1 / n2);
        }
        
      }
      
    }
    if (operacao == false){
      for (var b = 0; b < tamanho; b++){
        if (display.charAt(b) == ","){
          numeroUm = numeroUm + ".";
        } else {
          numeroUm = numeroUm + display.charAt(b);
        }
        
      }
      valor = parseFloat(numeroUm);
    }
    verifica = true;
    if ( this.innerHTML == "√n"){
      valor = Math.pow(valor, 0.5);
    }
    else if (this.innerHTML == "n<sup>2</sup>"){
      valor = valor * valor;
    } else {
      valor = valor;
    }
    document.querySelector(".display").value = valor;
  }
}
const calcular = function calcula (){
  var display = document.querySelector(".display").value;
  var tamanho = document.querySelector(".display").value.length;
  var contador = 0, n1 = 0, n2 = 0, comecoN2 = 0, quandoCalcular = 0;
  var operator = this.innerHTML;
  var primeiroOperator = "", numeroUm = "", numeroDois = "";
  for(var x = 0; x < tamanho; x++){
    
    if (display.charAt(x) == "+" || display.charAt(x) == "-" || display.charAt(x) == "*" || display.charAt(x) == "/"){
      if (contador == 0){
        primeiroOperator = display.charAt(x);
        contador++;
      }
      quandoCalcular++;
    }
  }
    
    if (quandoCalcular > 1){
      for (var y = 0; y < tamanho && display.charAt(y) != primeiroOperator;y++){
        if (display.charAt(y) == ","){
          numeroUm = numeroUm + ".";
        } else {
          numeroUm = numeroUm + display.charAt(y);
        }
          
          comecoN2 = y + 2;
      }
      for (var z = comecoN2; z < tamanho && display.charAt(z) != this.innerHTML;z++){
        if (display.charAt(z) == ","){
          numeroDois = numeroDois + "."
        } else {
          numeroDois = numeroDois + display.charAt(z);
        }
          
        
      }
      if (primeiroOperator == "+"){
        n1 = parseFloat(numeroUm);
        n2 = parseFloat(numeroDois);
        document.querySelector(".display").value = n1 + n2 + this.innerHTML;
      }
      else if (primeiroOperator == "*"){
        n1 = parseFloat(numeroUm);
        n2 = parseFloat(numeroDois);
        document.querySelector(".display").value = (n1 * n2) +this.innerHTML;
      }
      else if (primeiroOperator == "-"){
        n1 = parseFloat(numeroUm);
        n2 = parseFloat(numeroDois);
        document.querySelector(".display").value = (n1 - n2) + this.innerHTML;
      }
      else if (primeiroOperator == "/"){
        n1 = parseFloat(numeroUm);
        n2 = parseFloat(numeroDois);
        document.querySelector(".display").value = (n1 / n2) + this.innerHTML;
      }
      
    }
  
}

const limpa = function limpar (){
  document.querySelector(".display").value = "";
}





//-----------------------------------------------------------------------------------------------//



for (var quantidadeNumeros = 0; quantidadeNumeros < 10; quantidadeNumeros++){
    document.querySelectorAll(".numero")[quantidadeNumeros].addEventListener('click', printar); 
}
for (var quantidadeOperadores = 0; quantidadeOperadores < 4; quantidadeOperadores++){
  document.querySelectorAll(".operador")[quantidadeOperadores].addEventListener('click', printar);
  document.querySelectorAll(".operador")[quantidadeOperadores].addEventListener('click', calcular);
}
for (var quantidadeResult = 0; quantidadeResult < 3; quantidadeResult++){
  document.querySelectorAll(".result")[quantidadeResult].addEventListener('click', resultado);
}

document.querySelector(".clear").addEventListener('click', limpa);
document.querySelector(".delete").addEventListener('click', apagar)
document.querySelector(".virgula").addEventListener('click', printar);