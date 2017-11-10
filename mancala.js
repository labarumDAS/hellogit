//import * as math from "./index"
//console.log("2π = " + math.sum(math.pi, math.pi))
//  otherApp.js
//import { sum, pi } from "./index"
//console.log("2π = " + sum(pi, pi))
//http://es6-features.org/#ValueExportImport


//*************************************************
//implement player class, that fills input to move()
//gameover clause...

import { Board } from "./board"

import { BadPlayer } from "./player"
//console.log(board.sz)

//players are specific to a side, move function maps 1-6 to hole index

var manc = new Board(6);

var Player1 = new BadPlayer(1);
var Player0 = new BadPlayer(0);

//primitive, findValidMove not working yet
//console.log(Player0.findValidMove(manc));

manc.display();
var i = 0;
while(i < 90) {
  if(i%2 == 0) {
    if(manc.move(0,Player0.findMove0(manc))==-2) {
      i=90; console.log("gameover mancala count winner");
    }
  }
  else if(i%2 == 1) {   manc.move(1,Player1.findValidMove(manc)); }
  i++;
};



//is manc passed by reference or value here?
//findValidMove acts weird late game... unit test to pinpoint the bug

//manc.move(0,4);
//manc.move(1,3);
//manc.move(0,3);
