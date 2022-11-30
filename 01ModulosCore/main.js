/*
var myClock = require('./reloj');

console.log(myClock.Clock);
*/

//Pero hay varias formas de usarse, por ejemplo:
//Código de Samu

// CON module.exports.clock = Clock;

var reloj = require("./reloj");

var miReloj = new reloj();

miReloj.on("tictac", ()=>{
    miReloj.theTime();
});
