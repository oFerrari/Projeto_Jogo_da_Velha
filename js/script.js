let x = document.querySelector('.x')
let o = document.querySelector('.o')
let boxes = document.querySelectorAll('.box')
let buttons = document.querySelectorAll('.buttons-containers button')
let messageContainer = document.querySelector('#message')
let messageText = document.querySelector('#message p')
let segundoJogador

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