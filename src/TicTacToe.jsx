import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) {
      return;
    }
    
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(square => square !== null);
  
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = "It's a draw!";
  } else {
    status = `Next player: ${isXNext ? 'X' : 'O'}`;
  }

  const renderSquare = (index) => (
    <button
      className="square"
      onClick={() => handleClick(index)}
      key={index}
    >
      {board[index]}
    </button>
  );

  return (
    <div className="game">
      <div className="game-board">
        <div className="status">{status}</div>
        <div className="board">
          {[0, 1, 2].map(row => (
            <div className="board-row" key={row}>
              {[0, 1, 2].map(col => renderSquare(row * 3 + col))}
            </div>
          ))}
        </div>
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;