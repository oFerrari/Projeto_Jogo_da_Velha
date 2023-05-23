let x = document.querySelector('.x')
let o = document.querySelector('.o')
let boxes = document.querySelectorAll('.box')
let buttons = document.querySelectorAll('.buttons-containers button')
let messageContainer = document.querySelector('#message')
let messageText = document.querySelector('#message p')
let segundoJogador
let cont = 0

/* Contador de jogadas */

let player1 = 0
let player2 = 0

/* Adicionando o evento de click aos boxes */

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function () {

        let controle = controlarVez(player1, player2)

        /* Verifica se ja tem x ou o */

        if (this.childNodes.length == 0) {


            let cloneElemento = controle.cloneNode(true)
            this.appendChild(cloneElemento)

            /* Computar Jogada */

            if (player1 == player2) {
                player1++
            } else {
                player2++
            }

            if (player1 + player2 >= 3) {
                checaCampeao()
            }

        }

    })

}

/* Verifica a vez de quem Jogar */

function controlarVez(player1, player2) {
    if (player1 == player2) {
        controle = x
    } else {
        controle = o
    }

    return controle
}

/* Verifica quem ganhou */

function checaCampeao() {
    let blocos = [];
    

    for (let i = 0; i < 9; i++) {
        blocos.push(document.getElementById(`block-${i + 1}`).textContent)
    }

    if ((blocos[0] === blocos[1] && blocos[1] === blocos[2] && (blocos[0] === 'X')) || // Linha 1
        (blocos[3] === blocos[4] && blocos[4] === blocos[5] && (blocos[3] === 'X')) || // Linha 2
        (blocos[6] === blocos[7] && blocos[7] === blocos[8] && (blocos[6] === 'X')) || // Linha 3
        (blocos[0] === blocos[3] && blocos[3] === blocos[6] && (blocos[0] === 'X')) || // Coluna 1
        (blocos[1] === blocos[4] && blocos[4] === blocos[7] && (blocos[1] === 'X')) || // Coluna 2
        (blocos[2] === blocos[5] && blocos[5] === blocos[8] && (blocos[2] === 'X')) || // Coluna 3
        (blocos[0] === blocos[4] && blocos[4] === blocos[8] && (blocos[0] === 'X')) || // Diagonal principal
        (blocos[2] === blocos[4] && blocos[4] === blocos[6] && (blocos[2] === 'X'))) {
        declaraCampeao('x')
    } else if ((blocos[0] === blocos[1] && blocos[1] === blocos[2] && (blocos[0] === 'O')) || // Linha 1
        (blocos[3] === blocos[4] && blocos[4] === blocos[5] && (blocos[3] === 'O')) || // Linha 2
        (blocos[6] === blocos[7] && blocos[7] === blocos[8] && (blocos[6] === 'O')) || // Linha 3
        (blocos[0] === blocos[3] && blocos[3] === blocos[6] && (blocos[0] === 'O')) || // Coluna 1
        (blocos[1] === blocos[4] && blocos[4] === blocos[7] && (blocos[1] === 'O')) || // Coluna 2
        (blocos[2] === blocos[5] && blocos[5] === blocos[8] && (blocos[2] === 'O')) || // Coluna 3
        (blocos[0] === blocos[4] && blocos[4] === blocos[8] && (blocos[0] === 'O')) || // Diagonal principal
        (blocos[2] === blocos[4] && blocos[4] === blocos[6] && (blocos[2] === 'O'))) {
        declaraCampeao('o')
    }
    else{
        cont++
        if (cont == 7) {
            declaraCampeao('')
        }
    }

}


function declaraCampeao(campeao){
    let scoreX = document.querySelector('#pontos-x')
    let scoreO = document.querySelector('#pontos-o')
    let msg = ''


if(campeao == 'x'){
    scoreX.textContent = parseInt(scoreX.textContent) + 1
    msg = "X GANHOU";
}else if(campeao == 'o'){
    scoreO.textContent = parseInt(scoreO.textContent) + 1
    msg = "O GANHOU";
}else{
    msg = "DEU VELHA!"
}

    messageText.innerHTML = msg
    messageContainer.classList.remove("hide")

    setTimeout(() => {
        messageContainer.classList.add("hide")
    },3000)

    player1 = 0
    player2 = 0

    let boxesToRemove = document.querySelectorAll('.box div')

    for (let i = 0; i < boxesToRemove.length; i++) {
            boxesToRemove[i].remove()
    }
}