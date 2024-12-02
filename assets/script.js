let title = document.querySelector(".title");
let restart = document.getElementById("restart-btn");
let turn = 'x';
let squares = [];

// Winning 
// [0, 1, 2] First row
// [3, 4, 5] Second row
// [6, 7, 8] Third row
// [0, 3, 6] First column
// [1, 4, 7] Second column
// [2, 5, 8] Third column
// [0, 4, 8] Main diagonal
// [2, 4, 6] Second diagonal

function end(num1, num2, num3) {
    title.innerHTML = `<span>${squares[num1]}</span> is the winner!`;
    `${squares[num1]}`
    document.getElementById('item' + num1).style.backgroundColor = "#73EC8B";
    document.getElementById('item' + num2).style.backgroundColor = "#73EC8B";
    document.getElementById('item' + num3).style.backgroundColor = "#73EC8B";
    setInterval(function () { title.innerHTML += '.' }, 1000);
    setTimeout(function () { location.reload() }, 4000);
}

function winner() {
    for (let i = 0; i < 9; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }
    let notwinner = true;
    if (squares[0] == squares[1] && squares[1] == squares[2] && squares[0] != '') {
        end(0, 1, 2);
        notwinner = false;
    }
    else if (squares[3] == squares[4] && squares[4] == squares[5] && squares[3] != '') {
        end(3, 4, 5);
        notwinner == false;
    }
    else if (squares[6] == squares[7] && squares[7] == squares[8] && squares[6] != '') {
        end(6, 7, 8);
        notwinner = false;
    }
    else if (squares[0] == squares[3] && squares[3] == squares[6] && squares[6] != '') {
        end(0, 3, 6);
        notwinner = false;
    }
    else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '') {
        end(1, 4, 7);
        notwinner = false;
    }
    else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != '') {
        end(2, 5, 8);
        notwinner = false;
    }
    else if (squares[0] == squares[4] && squares[4] == squares[8] && squares[0] != '') {
        end(0, 4, 8);
        notwinner = false;
    }
    else if (squares[2] == squares[4] && squares[4] == squares[6] && squares[2] != '') {
        end(2, 4, 6);
        notwinner = false;
    }
    if (notwinner && squares.every(square => square != '')) {
        title.innerHTML = `It's a Draw!`;
    }
}

function game(id) {
    let element = document.getElementById(id);
    if (turn === 'x' && element.innerHTML == '') {
        element.innerHTML = '<i class="fi fi-br-cross"></i>';
        turn = 'o';
        element.style.color = "white";
        title.innerHTML = '<span><i class="fi fi-br-circle"></i> </span> Turn';
    }
    else if (turn === 'o' && element.innerHTML == '') {
        element.innerHTML = '<i class="fi fi-br-circle"></i>'
        turn = 'x';
        element.style.color = "#FEEC37";
        title.innerHTML = '<span><i class="fi fi-br-cross"></i> </span> Turn';
    }
    winner();
}

restart.addEventListener("click", restartGame);

function restartGame() {
    // Clear all the squares
    for (let i = 0; i < 9; i++) {
        document.getElementById('item' + i).innerHTML = '';
        document.getElementById('item' + i).style.backgroundColor = '';
    }

    turn = 'x';
    title.innerHTML = '<span><i class="fi fi-br-cross"></i> <i class="fi fi-br-circle"></i> </span>GAME';
    squares = [];
}
