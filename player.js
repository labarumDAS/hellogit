//fix hardcoding, generalize sizing
//player shouldn't have to check for game end via -2,
//shouldn't have to make a "new player" in move, repeat turn
  //public function, move?
export class BadPlayer {
  constructor (player) {
    this.player = player
  }
  findValidMove(Board) {
    //var max = (Board.board._length-2)/2;
    var max = 7*this.player + 7;
    //var end = this.player*max + max;
    //var start = this.player*max+1;
    var start = this.player*7 + 1;
    var currentNode =Board.board.searchNodeAt(start);
    var track = 0;
    while(start < max) {
      if(currentNode.data > 0) {
        var index_of_currentNode = start + track;
        if(index_of_currentNode == 7 || index_of_currentNode == 14) {
          //console.log("cant pick pot");
          console.log("gameover?"); //all zeros on side
          return -2;
        }
        //return index_of_currentNode;
        return index_of_currentNode %7;
      }
      currentNode = currentNode.next;
      track++;
      start++;
    }
  };

    findMove0(Board) {
      var currentNode = Board.board.searchNodeAt(1);
      var track = 1;
      while (currentNode.data == 0) {
        currentNode = currentNode.next;
        track++;
        if(track == 7) { return -2; }
      }
      return track;
    };

    findMove1(Board) {
      var currentNode = Board.board.searchNodeAt(8);
      var track = 8;
      while (currentNode.data == 0) {
        currentNode = currentNode.next;
        track++;
        if(track == 14) { return -2; console.log("gameover"); }
      }
      return track %7;
    };

};

/*
export class PlayerA{
  constructor () {

  }

  findMove (board) {
    //for i in board.board
    //return index of highest
  }

  goodMove (board) {
    for i in board.board
      //new board after move at i
      child[i] = new board = board.board.move(player, i);

    iterate new boards and select best
    return i corresponding to best
  }

  greatMove (board) {
    /*
    for i in board.board
      new board after move at i
    iterate new boards and create j layers of new boards
    return i corresponding to best at bottom layer
    */
    /*
  }
*/
/*
  masterMove (board) {
    //opening sequence
    //greatmoves, with slimmer optimized trees
  }

};

*/
