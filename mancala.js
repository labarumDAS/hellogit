//import * as math from "./index"
//console.log("2π = " + math.sum(math.pi, math.pi))
//  otherApp.js
//import { sum, pi } from "./index"
//console.log("2π = " + sum(pi, pi))
//http://es6-features.org/#ValueExportImport

import { Board } from "./board"
//console.log(board.sz)

var manc = new Board(6);
manc.display();
manc.move(1,4);
manc.clear();
manc.display();
