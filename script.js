'use strict';

function firstGame() {
    let randomNum = Math.floor(Math.random() * 100 + 1);

    function secondGeme() {
        let game = +prompt('Угадай число от 1 до 100');
        console.log(game);

        if (game >= randomNum) {
            alert('Загаданное число меньше');
            secondGeme();
        } else if (game <= randomNum) {
            alert('Загаданное число больше');
            secondGeme();
        } else if (game === randomNum) {
            alert('Угадали!!!');
            return;
        }
    }

    secondGeme();
}

firstGame();
