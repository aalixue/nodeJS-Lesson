var base64Str = 'emhhbmdzYW46MtIzNDU2';
var buf2 = Buffer.from(base64Str,"base64");
var ustf8Str = base64Str.toString("utf-8");
console.log(ustf8Str);