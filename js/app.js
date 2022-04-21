// Importacion de clases
import Board from './class/board';
import Ball from './class/ball';
import Bar from './class/bar';
import BoardView from './class/boardView';

// Instancias de clases
const board = new Board(800, 400);
const ball = new Ball(350, 100, 10, board);
const bar = new Bar(20, 100, 20, 100, board);
const barTwo = new Bar(760, 100, 20, 100, board);
const boardView = new BoardView(canvas, board);
