
//Declarando listas.
let sons = ["pom", "clap", "tim", "puff", "splash", "toim", "psh", "tic", "tom"];
const listaDeTeclas = document.querySelectorAll('.tecla');

//Declarando variáveis;
let som;

//Função que toca o som;
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        console.log('What are you doing?');
    }

    const verificaElemento = (elemento.localName === 'audio');

    if (elemento && verificaElemento === true) {
        elemento.play();
    }

    else {
        console.log('Isso não é um elemento de áudio po')
    }
    
}

//Looping;
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string id;
    
    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {

        console.log(evento.code);

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}
