/*
var EventEmitter = require('events').EventEmitter
var Clock = function (){
    setInterval(function (){
        console.log('ET SECH');
    }, 1000);
}
Clock.prototype.theTime = function (){
    var date = new Date(),
        hrs = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        msg = hrs + ':' + min + ':' + sec
    console.log(msg);
}
var tula = new Clock();
*/


/*
var EventEmitter = require('events').EventEmitter,
    hereda = require('util').inherits

var Clock = function ()
{
    var self = this
    setInterval(function (){
        self.emit('tictac')
    }, 1000)    
}
hereda(Clock, EventEmitter)
Clock.prototype.theTime = function ()
{
    var date = new Date(),
        hrs = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        msg = hrs + ':' + min + ':' + sec

    console.log(msg)
}
var tula = new Clock()
tula.on('tictac', function(){
    tula.theTime()
})
*/


/*
 * Clase Clock en ES6
 * Para evitar el deprecated del inherit en visual studio code.
 */

var EventEmitter = require('events').EventEmitter;
class Clock extends EventEmitter {

    constructor(){
        super();
        setInterval(() => {
            this.emit('tictac')
        }, 1000);
    }

    theTime() {
        var date = new Date(),
        hrs = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        msg = hrs + ':' + min + ':' + sec;

        console.log(msg);
    }
}

var tula = new Clock()
tula.on('tictac', function(){
    tula.theTime()
})

