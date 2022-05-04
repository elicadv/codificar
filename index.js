var selecao = document.querySelector ("#selecao")
var botao = document.querySelector("#botao")
var botaoRadio = document.querySelector("#botaoradio")


selecao.addEventListener('click', function(){
  var passo = document.querySelector ("#passo")
        
        if(selecao.value === '1'){
          passo.style.display = "flex";
        }else{
          passo.style.display = "none";
        }
    });

botaoRadio.addEventListener("click", function(e){
      var botaoCodificar = document.querySelector("#codificar")
      var botaoDecodificar = document.querySelector("#decodificar")
  
      if(botaoCodificar.checked){
        botao.innerHTML = `<input class="btn2" id="btn2" type="button" value="Codificar mensagem" onclick ="baseCodificar()">`
        document.querySelector("#btn2").addEventListener("click", coder)
      }
      else if(botaoDecodificar.checked){
        botao.innerHTML = `<input class="btn2" id="btn3" type="button" value="Decodificar mensagem" onclick ="baseDecodificar()">`
        document.querySelector("#btn3").addEventListener("click", decoder)
      }
});

function baseCodificar(){
  var botaoCodificar = document.querySelector("#codificar")
  var msg = document.querySelector("#msg")
  var msg2 = document.querySelector("#msg2")

    if(selecao.value =="2" && botaoCodificar.checked){
        valor = msg.value
        msg2.value = btoa(valor)

    }else if(selecao.value == "1" && botaoCodificar.checked){
        cesarCodificar()
    }

}
function baseDecodificar(){
  var botaoDecodificar = document.querySelector("#decodificar")
  var msg = document.querySelector("#msg")
  var msg2 = document.querySelector("#msg2")

    if(selecao.value =="2" && botaoDecodificar.checked){
        valor = msg.value
        msg2.value = atob(valor)

    }else if(selecao.value == "1" && botaoDecodificar.checked){
        cesarDecodificar()
    }

}
function cesarCodificar() {
  var msg = document.querySelector("#msg").value 
  var passo = document.querySelector ("#passo").value
  var msg2 = document.querySelector("#msg2")
  var resultado = "";

  for (var i = 0; i < msg.length; i++) {
    var passin = parseInt(passo);
    var tabela = msg[i].charCodeAt();
    if (tabela >= 65 && tabela <= 90) {
      var soma = tabela + passin;
      if (soma > 90) {
        soma = soma - 26;
      }
      resultado += String.fromCharCode(soma);
    } else if (tabela >= 97 && tabela <= 122) {
      var soma = tabela + passin;
      if (soma > 122) {
        soma = soma - 26;
      }
      resultado += String.fromCharCode(soma);
    } else {
      resultado += msg[i];
    }
  }
  msg2.value = resultado;
}

function cesarDecodificar() {
  var msg = document.querySelector("#msg").value 
  var passo = document.querySelector ("#passo").value
  var msg2 = document.querySelector("#msg2")
  var resultado = "";

  for (var i = 0; i < msg.length; i++) {
    var passin = parseInt(passo);
    var tabela = msg[i].charCodeAt();
    if (tabela >= 65 && tabela <= 90) {
      var soma = tabela - passin;
      if (soma < 65) {
        soma = 90 + soma - 64;
      }
      resultado += String.fromCharCode(soma);
    } else if (tabela >= 97 && tabela <= 122) {
      var soma = tabela - passin;
      if (soma < 97) {
        soma = 122 + soma - 96;
      }
      resultado += String.fromCharCode(soma);
    } else {
      resultado += msg[i];
    }
  }
  msg2.value = resultado;
}
