let senha = document.getElementById('senha');
let senhaCorreta1 = '20012023';
let senhaCorreta2 = 'master';
var sec=0;
let audio = document.getElementById('audio');

function confirmar(){
    if(senha.value === senhaCorreta1 || senha.value === senhaCorreta2) {
    amor();
    start();
    } else{
        alert('essa nao é a senha burra, vc nao é minha mulher mais, pqp');
    }
};

function start(){
    setInterval(number,100)
}

function number(){
    sec++
    document.getElementById('number').innerText=sec
}

function amor (){
    document.getElementById('container').innerHTML = 
    `<p id="text1"> te amo </p>
    <p id="number"> 0 </p>
    <p id="text2"> vezes rs </p> 
    <p id="text3">eu n criei um botão para pausar, jae? <br>agr ce sabe que meu amor por vc é infinito, tmj.</p>
    `;
    remove()
    audio.play()
}

function remove(){
    var header = document.getElementById('header');
    var carta = document.getElementById('carta');
    header.removeChild(carta);
    var form = document.getElementById('form');
    var btn = document.getElementById('btn');
    form.removeChild(senha);
    form.removeChild(btn);
}

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
      btn.click();
    }
});
