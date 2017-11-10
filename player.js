//fix hardcoding, generalize sizing

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
          console.log("cant pick pot");
          return -1;
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
      var currentNode = Board.board.searchNodeAt(7);
      var track = 7;
      while (currentNode.data == 0) {
        currentNode = currentNode.next;
        track++;
        if(track == 14) { return -2; console.log("gameover"); }
      }
      return track;
    };

}
