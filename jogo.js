
var altura = 0 
var largura = 0
var vidas = 1
var tempo = 10
var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'Normal'){
    criaMosquiToTempo = 1500
} else if (nivel === 'Dificil'){
    criaMosquitoTempo = 1000
} else if (nivel ==='MuitoDificil'){
    criaMosquitoTempo = 750
}



function ajustaTamanho() {
    altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)

}
ajustaTamanho()

var cronomento = setInterval(function() {

    tempo-=1
    
    if(tempo < 0) {
        clearInterval(cronomento)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronomento').innerHTML = tempo
    }

}, 1000)
function posicaoRandomica() {

    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        
        if(vidas > 3 ) {
            window.location.href = 'fim_de_jogo.html'
        }
        else {
            document.getElementById('v' + vidas).src='imagens/coracao_vazio.png'
    
        vidas++
    }
    
}
var posicaoX = Math.floor(Math.random() * largura) - 90
var posciaoY = Math.floor(Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posciaoY = posciaoY < 0 ? 0 : posciaoY

console.log(posicaoX, posciaoY)

var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className = tamanhoAleatorio() + ' ' + ladoaleatorio()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posciaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function() {
   this.remove()
}



document.body.appendChild(mosquito)

}

    

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'

            default: return 'mosquito1'
            
    }
}

function ladoaleatorio() {
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'

            default: return 'ladoB'
            
    }
}