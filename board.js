//singly linked list code from codes.tutsplus.com
//numbering and sizing convention of board can be better,
//think indexes of pots
//user impressions..

import { BadPlayer } from "./player.js"

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
  //get rid of hardcoded numbers
    constructor (sz) {
      var firstpot = 7;
      this.sz = sz*2;
      var counter = 1;
      this.board = new SinglyList();
      while(counter <= 6) {
        this.board.add(4);
        counter++;
      }
      this.board.add(0);
      while(counter <= 12) {
        this.board.add(4);
        counter++;
      }
      this.board.add(0);
    };

    display () {
      //arguments and parameters need to be genralized from sz
      //get rid of hardcoded numbers
      var i = 1;
      var j=1;
      var firstPot = 7;
      var secondPot = 14;
      //var max = this.sz/2;
      console.log('  ' + this.board.searchNodeAt(secondPot).data + ' ');
      while(i <= 6) {
        console.log(this.board.searchNodeAt(i).data + '  ' + this.board.searchNodeAt(secondPot-j).data);
        i++; j++;
      }
      console.log(' ' + this.board.searchNodeAt(firstPot).data + ' ');
    };

    move (player, pos) {
      if(pos == -2 ) { console.log ("gameover"); return -2; }
      if(pos == -1 ) { console.log ("error: invalid move"); return };
      console.log("player: " + player + "hole: " + pos);
      //check bounds
      //respond to enumerated player types, 0,1
      //var count = this.board.searchNodeAt(pos).data;
      var count = this.board.searchNodeAt(pos+player*7).data;
      var currentNode = this.board.searchNodeAt(pos+player*7);
      var track = 0;
      //(pos +i) can do it, but not good use of "next"
      this.board.searchNodeAt(pos+player*7).data = 0;
      while (count > 0) {
        currentNode = currentNode.next;
        //not wrapping around?
        if(currentNode == null) { currentNode = this.board.searchNodeAt(1); console.log("head?, skip"); }
        currentNode.data +=1;
          count--;
          track++;

      };

      //track quite working for sinks
      //shouldn't be able to pull from pot
      //get rid of hardcoding, derive from size, _length
      var currentPlayer = player;
      var index_of_currentNode = pos + player*7 + track;
      if(index_of_currentNode < 7 && currentPlayer == 0 && currentNode.data > 0) {
      //recurse if ther're beans & its on your side
        this.display();
        return this.move(player, index_of_currentNode);
      }

      if(index_of_currentNode == 7 && currentPlayer == 0) {
        console.log("Sink! implement repeat turn");
        this.display();
        var foo = new BadPlayer(0);
        return this.move( player , foo.findMove0(this) );
      }

      else if (index_of_currentNode > 7 && index_of_currentNode < 14 && currentPlayer ==1 && currentNode.data > 0) {
        this.display();
        return this.move(player, index_of_currentNode %7);
      }

      if(index_of_currentNode == 14 && currentPlayer == 1) {
        console.log("Sink! implement repeat turn");
        return
      }

      this.clear();
      this.display();

      return
    };

    clear () {
      console.log(' ');
    };
}

////////////////////main statement basically/////////////////////////////
//var manc = new Board(12);
//manc.display();
//manc.move(1,3);
//manc.clear();
//manc.display();

//make move() super generic, to incorporate all variations of the rules
