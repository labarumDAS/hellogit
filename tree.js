
import { Board } from "./board"
import { PlayerA } from "./player.js"
import { BadPlayer } from "./player"


function Node(data) {
    this.data = data;
    this.next = null;
}

class Tree {
  constructor(board, data) {
    this.node = new Node(data);
    this.board = new Board(board);
    //up to as many children as possible moves  //from that board state
    this.child = [];
  }

  addlayer() {
    //verify move only lets legal moves through
    //need a "quiet" version of move that doesn't display board
    var keep = this.board;
    for (var i=1; i<7; i++) {
      this.child[i] = keep.move(0,i);
    }

  }

  addlayers() {
    //make recursive, and use consecutive nodes, not child arrays
  }
}

var koo = new Board(6);

var foo = new Tree(koo, 3);

console.log(foo.node.data);
foo.addlayer();
