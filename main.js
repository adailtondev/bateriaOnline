// Função principal, a que seleciona o id do áudio e da o play // 
function tocaSom(seletorAudio) {
    
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }else {
        console.log('Elemento não encontrado!')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//Loop que aciona a função principal, colocando como parâmetro a tecla que o usuário digitar/clicar//
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    //const que seleciona a tecla que o usuário usou no momento//
    const tecla = listaDeTeclas[contador];
    //const para pegar o final do id do áudio//
    const instrumento = tecla.classList[1];
    //const para concatenar o inicio do id(#som_) com o final//
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function(event) {

        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa')
    }
}
