
import { Board } from "./board"
import { PlayerA } from "./player.js"
import { BadPlayer } from "./player"


function Node(data) {
    this.data = data;
    this.next = null;
}

class Tree {
  constructor(board, data) {
    this.node = data;
    //up to as many children as possible moves
    //from that board state
    this.child = null;
  }
}

var koo = new Board(6);

var foo = new Tree(koo, 3);
