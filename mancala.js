//import * as math from "./index"
//console.log("2π = " + math.sum(math.pi, math.pi))
//  otherApp.js
//import { sum, pi } from "./index"
//console.log("2π = " + sum(pi, pi))
//http://es6-features.org/#ValueExportImport


//*************************************************

import { Board } from "./board"

import { BadPlayer } from "./player"

//players are specific to a side, move function maps 1-6 to hole index
//generalize in later iteration

var manc = new Board(6);

var Player1 = new BadPlayer(1);
var Player0 = new BadPlayer(0);


manc.display();
var i = 0;
var max = 90;
while(i < max) {
  if(i%2 == 0) {
    if(manc.move(0,Player0.findValidMove(manc))==-2) {
      i=max; console.log("gameover 0 mancala count winner");
    }
  }
  else if(i%2 == 1) {
    if(manc.move(1,Player1.findValidMove(manc)) ==-2) {
      i=max; console.log("gameover 1 mancala count winner");
    }
  }
  i++;
};



/*

manc.display();
var i = 0;
var max = 90;
while(i < max) {
  if(i%2 == 0) {
    if(manc.move(0,Player0.findMove0(manc))==-2) {
      i=max; console.log("gameover mancala count winner");
    }
  }
  else if(i%2 == 1) {
    if(manc.move(1,Player1.findValidMove(manc)) ==-2) {
      i=max; console.log("gameover 1 mancala count winner");
    }
  }
  i++;
};

*/

/*
manc.display();
var i = 0;
var max = 90;
while(i < max) {
  if(i%2 == 0) {
    if(manc.move(0,Player0.findMove0(manc))==-2) {
      i=max; console.log("gameover mancala count winner");
    }
  }
  else if(i%2 == 1) {
    if(manc.move(1,Player1.findMove1(manc)) ==-2) {
      i=max; console.log("gameover 1 mancala count winner");
    }
  }
  i++;
};
*/


/*
manc.display();
var i = 0;
var max = 90;
while(i < max) {
  if(i%2 == 0) {
    if(manc.move(0,Player0.findValidMove(manc))==-2) {
      i=max; console.log("gameover mancala count winner");
    }
  }
  else if(i%2 == 1) {
    if(manc.move(1,Player1.findValidMove(manc)) ==-2) {
      i=max; console.log("gameover 1 mancala count winner");
    }
  }
  i++;
};

*/
//is manc passed by reference or value here?
//manc.move(0,4);
//manc.move(1,3);
//manc.move(0,3);
