//http://es6-features.org/#ValueExportImport
export function sum (x, y) { return x + y }
export var pi = 3.141593

import { Board } from "./board.js"

import { Player } from "./player.js"
//export { Player}


//export Board, and everything from index

/////////////////////////////////////////////

//do I need all these node_modules?


//import * as math from "./index"
//console.log("2π = " + math.sum(math.pi, math.pi))
//  otherApp.js
//import { sum, pi } from "./index"
//console.log("2π = " + sum(pi, pi))
//http://es6-features.org/#ValueExportImport
