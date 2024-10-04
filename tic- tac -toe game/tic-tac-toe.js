let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;
let mode = '2-player';  // default mode

// Wait until the DOM is fully loaded
window.onload = function () {
    const statusDisplay = document.getElementById('status');
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Set the mode (2-player or Human vs Computer)
    window.setMode = function(selectedMode) {
        mode = selectedMode;
        resetGame();
        statusDisplay.innerText = `Mode: ${mode.replace('-', ' ')}`;
    };

    // Function to handle a move
    window.makeMove = function(index) {
        if (board[index] === '' && gameActive) {
            board[index] = currentPlayer;
            document.getElementById(`cell-${index}`).innerText = currentPlayer;
            checkWinner();
            if (gameActive) {
                if (mode === '2-player') {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                } else if (mode === 'human-vs-computer' && currentPlayer === 'X') {
                    currentPlayer = 'O';
                    computerMove();  // Let computer make its move
                }
            }
        }
    };

    // Simple random AI move
    function computerMove() {
        let availableCells = board
            .map((cell, index) => (cell === '' ? index : null))
            .filter(index => index !== null);

        if (availableCells.length > 0 && gameActive) {
            const randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
            makeMove(randomIndex);
            currentPlayer = 'X';  // Switch back to human
        }
    }

    function checkWinner() {
        let roundWon = false;
        for (let i = 0; i < winningConditions.length; i++) {
            const winCondition = winningConditions[i];
            let a = board[winCondition[0]];
            let b = board[winCondition[1]];
            let c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            statusDisplay.innerText = `Player ${currentPlayer} wins!`;
            gameActive = false;
            return;
        }

        if (!board.includes('')) {
            statusDisplay.innerText = 'Game is a draw!';
            gameActive = false;
            return;
        }
    }

    // Function to reset the game
    window.resetGame = function() {
        board = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        gameActive = true;
        document.querySelectorAll('.cell').forEach(cell => (cell.innerText = ''));
        statusDisplay.innerText = '';
    };
};
