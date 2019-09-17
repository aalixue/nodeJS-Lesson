function circleFun(r){
    function circumference(){
        return 2*Math.PI*r;
    };
    function area(){
        return Math.PI*r*r;
    }
    // var circle = {
    //     circumference:circumference(),
    //     area:area()
    // }
    // return circle;

    return {circumference:circumference,area:area};
}

module.exports = {
    circleFun:circleFun
}

