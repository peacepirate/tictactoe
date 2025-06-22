# Tic-Tac-Toe Game

A simple, interactive Tic-Tac-Toe game built with React and Vite.

## Features

- Interactive 3x3 game board
- Two-player gameplay (X and O)
- Win detection for all possible winning combinations
- Draw detection when board is full
- Game reset functionality
- Clean, responsive design

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd tictactoe
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## How to Play

1. The game starts with player X
2. Click on any empty square to place your mark
3. Players alternate turns between X and O
4. First player to get three marks in a row (horizontally, vertically, or diagonally) wins
5. If all squares are filled without a winner, the game is a draw
6. Click "Reset Game" to start over

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Technologies Used

- React 19
- Vite
- CSS3
- JavaScript (ES6+)

## Project Structure

```
src/
├── main.jsx          # Application entry point
├── TicTacToe.jsx     # Main game component
└── TicTacToe.css     # Game styles
```

## License

This project is open source and available under the [MIT License](LICENSE).