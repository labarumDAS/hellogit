//import * as math from "./index"
//console.log("2π = " + math.sum(math.pi, math.pi))
//  otherApp.js
//import { sum, pi } from "./index"
//console.log("2π = " + sum(pi, pi))
//http://es6-features.org/#ValueExportImport


//*************************************************
//implement player class, that fills input to move()

import { Board } from "./board"
//console.log(board.sz)

var manc = new Board(6);
//var badPlayer = new Player();

manc.display();

manc.move(0,4);
manc.move(1,3);
manc.move(0,3);
