
//user impressions..
//make board a singly list, not a class with one
//or use Board member functions tactically

import { BadPlayer } from "./player.js"
//import { PlayerA } from "./player.js"
import { SinglyList } from "./singlylist.js"


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
      //if hole is empty, invalid
      if (this.board.searchNodeAt(pos+player*7).data == 0) {
        console.log("empty hole");
        return
      }
      //if gameover
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
        //wrap around
        if(currentNode == null) {
          currentNode = this.board.searchNodeAt(1); console.log("head?, skip");
        }
        //don't place in the opponents pot
        currentNode.data +=1;
          count--;
          track++;

      };


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
        this.display();
        var foo = new BadPlayer(1);
        return this.move( player , foo.findMove1(this) );
        //return;
      }

      this.clear();
      this.display();

      return
    };

    clear () {
      console.log(' ');
    };
}

//make move() super generic, to incorporate all variations of the rules
