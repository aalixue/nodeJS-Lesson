var arg2 = process.argv[2];
if(arg2 == undefined || arg2 == "-h"){
    console.log("请输入形式为算术运算式的参数！");
}
else{
    var result = eval(arg2);
    console.log(arg2+"=%s",result);
}