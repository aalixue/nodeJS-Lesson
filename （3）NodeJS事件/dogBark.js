var Dog = require("./dog.js");
//console.log(Dog);
var dog1 = new Dog("taidi",5);
var dog2 = new Dog("zangao",8);

function barkFun(){
    console.log(this.name+" barked!!!",this.energy);
    //console.log(this.energy);
}

dog1.on("bark",barkFun);
var intervalId = setInterval(function(){
    if(dog1.energy >= 0 && dog2.energy >= 0){
        dog1.emit("bark");
    }
    else{
        //clearInterval(intervalId);
        intervalId.unref();
    }
    dog1.energy = dog1.energy - 1;
},1000);
dog2.on("bark",barkFun);
var intervalId1 = setInterval(function(){
    if(dog2.energy >= 0 && dog1.energy >=0){
        dog2.emit("bark");
    }
    else{
        //clearInterval(intervalId);
        intervalId1.unref();
    }
    dog2.energy = dog2.energy - 1;
},1000);

