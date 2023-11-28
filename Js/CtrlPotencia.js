/*
function potencial(){

  var numero = document.getElementById("base").value;

  result= numero*numero;

  document.getElementById("resultado").innerHTML= result;
    
}*/

"use strict";
var forma = document.getElementById("forma"),
  resultado = document.getElementById("resultado");

forma.addEventListener("submit", procesa, false);
function procesa(){
  
  var base = parseInt(forma["base"].value);
  var res="";
  var aux=1;
  var ant;

  for(var i=0; i<=10; i++){
    if(i===0){
      res = base + " a la" + i + "=" + aux + "\n";
      
    }else{
      ant = base * aux;
      res = res + base + " a la" + i + "=" + ant + "\n";
      aux = ant;
    }
  }
  forma["resultado"].value = res;
}
