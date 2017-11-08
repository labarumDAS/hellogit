//singly linked list code from codes.tutsplus.com
//numbering and sizing convention of board can be better,
//think indexes of pots

function Node(data) {
    this.data = data;
    this.next = null;
}

function SinglyList() {
    this._length = 0;
    this.head = null;
}

SinglyList.prototype.add = function(value) {
    var node = new Node(value),
        currentNode = this.head;

    // 1st use-case: an empty list
    if (!currentNode) {
        this.head = node;
        this._length++;

        return node;
    }

    // 2nd use-case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;

    this._length++;

    return node;
};

SinglyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};

    // 1st use-case: an invalid position
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    // 2nd use-case: a valid position
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;
};

SinglyList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 0,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;

    // 1st use-case: an invalid position
    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }

    // 2nd use-case: the first node is removed
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;

        return deletedNode;
    }

    // 3rd use-case: any other node is removed
    while (count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;

    return deletedNode;
};

////////////////////end linked list//////////////////////////////

export class Board {
    constructor (sz) {
        this.sz = sz+2;
        var counter = 0;
        this.board = new SinglyList();
        this.board.add(0);
        while(counter < sz) {
          this.board.add(4);
          counter++;
        }
        this.board.add(0);
    };

    display () {
      var i = 2;
      var max = this.sz/2 + 1;
      console.log('  ' + this.board.searchNodeAt(1).data + ' ');
      while(i < max) {
        console.log(this.board.searchNodeAt(i).data + '  ' + this.board.searchNodeAt(i+4).data);
        i++;
      }
      console.log(' ' + this.board.searchNodeAt(this.sz).data + ' ');
    };

    move (player, pos) {
      this.board.searchNodeAt(pos).data = 0;
      this.board.searchNodeAt(pos).next.data += 1;
    };

    clear () {
      console.log(' ');
    };
}

////////////////////main statement basically/////////////////////////////
var manc = new Board(12);
manc.display();
manc.move(1,3);
manc.clear();
manc.display();

//make move() super generic, to incorporate all variations of the rules


////////////////////////old code///////////////////////////////////////
/*
function createBoard() {
  var size = 8;
  var counter = 0;
  var board = new SinglyList();
  while(counter < size) {
    board.add(4);
    counter++;
  }
  return board;
};

function display(board) {
  var size = 8;
  var i = 1;
  var max = size/2 + 1;
  while(i < max) {
    console.log(board.searchNodeAt(i).data + '  ' + board.searchNodeAt(i+4).data);
    i++;
  }
}
*/

//main
