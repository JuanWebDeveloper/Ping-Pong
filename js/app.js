// Importacion de clases
import Board from './class/board.js';
import Ball from './class/ball.js';
import Bar from './class/bar.js';
import BoardView from './class/boardView.js';

// Instancias de clases
const board = new Board(800, 400);
const ball = new Ball(350, 100, 10, board);
const bar = new Bar(20, 100, 20, 100, board);
const barTwo = new Bar(760, 100, 20, 100, board);
const boardView = new BoardView(canvas, board);

// Configuracion de las teclas del canvas
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    bar.up();
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    bar.down();
  } else if (e.key === 'W' || e.key === 'w') {
    e.preventDefault();
    barTwo.up();
  } else if (e.key === 'S' || e.key === 's') {
    e.preventDefault();
    barTwo.down();
  } else if (e.key === ' ') {
    e.preventDefault();
    board.playing = !board.playing;
  }
});

// Primera vista del juego
boardView.draw();

// Inicio del juego
const main = () => {
  boardView.play();
  window.requestAnimationFrame(main);
};

window.requestAnimationFrame(main);
