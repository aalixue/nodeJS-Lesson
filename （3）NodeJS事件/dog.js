//原生模块  核心模块
const events = require("events");
var EventEmitter = events.EventEmitter;
function Dog(name,energy){
    EventEmitter.call(this);//改变当前函数this指向   是当前实例化的this指向
    this.name = name;
    this.energy =  energy;
}
Dog.prototype.__proto__ = EventEmitter.prototype;
module.exports = Dog;