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
        return index_of_currentNode;
      }
      currentNode = currentNode.next;
      track++;
    //  else console.log("Error: no move found");
      return -1;
    }


  }
}
