const events = require("events");
const EventEmitter = events.EventEmitter;

function radio(a,b) {
    EventEmitter.call(this);
    this.a=a;
    this.b=b;
    var that = this;
    this.play = function() {
        console.log(this.a, this.b, "opened");
        setTimeout(function() {
            console.log("lalala...");
        }, 2000);
    }
    this.stop = function() {
        console.log(this.a, this.b, "closed");
    }

}
module.exports = {
    radio:radio
}





// //const events = require("events");
// const util = require("util");

// //const EventEmitter = events.EventEmitter;//继承

// function Parent(name){
//     this.name = name;
// }
// Parent.prototype.show = function(){
//     console.log(this.name);
// }

// function Child(){

// }
// util.inherits(Child,Parent);

/**
 * 1. Parent.call(this)
 * Child.prototype.__proto__ = Parent.prototype
 * 2. Child extents Parent{}
 * 3. util.inherits(Child,Parent);
 */