// punteros del documento
var btn_start = document.getElementById('start');
var btn_stop = document.getElementById('stop');
var input_number = document.getElementById('numero');
var div_result = document.getElementById('resultado');
var max = 10;//numero maximo
var min = 1;//numero minimo
var numero_secreto = 0;//aqui guardara el numero random
var chances = 0;//aqui guardara el numero de oportunidades

// boton de iniciar
btn_start.addEventListener("click",start);
// boton detener
btn_stop.addEventListener("click",stop);
// presiona enter
input_number.onkeypress = function(e){
  // el numero 13 es el codigo del Enter
  if (e.keyCode == 13) {
    // si tienes chances
    if (chances > 0) {
      // si es un numero
      if (!isNaN(this.value)) {
        if (this.value > max || this.value < min) {
          this.value = "";
          div_result.innerHTML = '<div class="card-panel red lighten-2 animated fadeInDown"><h4 class="center-align">El rango es de '+min+' a '+max+'!</h4></div>';
          validarChances();
        } else {
          MagicNum(parseInt(this.value));
        }
      } else {
        this.value = "";
        div_result.innerHTML = '<div class="card-panel red lighten-2 animated fadeInDown"><h2 class="center-align">NO!</h2></div>';
        validarChances();
      }
    } else {
      stop();
    }
  }
};

function MagicNum(num) {
  if (num == numero_secreto) {
    input_number.value = "";
    div_result.innerHTML = '<div class="card-panel green lighten-2 animated rotateIn">'+
    '<h2 class="center-align">'+num+'</h2>'+
    '<p class="center-align">Felicitaciones!!</p>'+
    '</div>';
    stop();
  } else {
    input_number.value = "";
    div_result.innerHTML = '<div class="card-panel red lighten-2 animated fadeInDown">'+
    '<h2 class="center-align">'+num+'</h2>'+
    '<p class="center-align">Sigue intentando!!</p>'+
    '</div>';
    validarChances();
  }
}

function stop(){
  numero_secreto = 0;
  chances = 0;
  input_number.value = "";
  input_number.setAttribute("disabled","disabled");
}

function start(){
  numero_secreto = parseInt(Math.random() * (max - min) + min);
  chances = 3;
  input_number.removeAttribute("disabled");
}

function validarChances() {
  chances--;
  if (chances === 0) {
    div_result.innerHTML = '<div class="card-panel red lighten-2 animated fadeInDown">'+
    '<h2 class="center-align">¡Que pena!</h2>'+
    '<p class="center-align">Se acabaron tus intentos</p>'+
    '</div>';
    stop();
  }
}
