// const stream = require("stream");
// var reader = new stream.Readable();

// // function MyReadable(arr){
// //     this.arr = arr;
// //     var brr = arr.split(",");
// //     for(var i = 0;i < brr.length;i++){
// //         reader.push(brr[i]);
// //     }
// //     return reader.pipe(process.stdout);
// // };

// for(var i = 97;i <= i+26;i++){
//     reader.push(String.fromCharCode(i));
// }
// reader.push(null);
// reader.pipe(process.stdout);

const stream = require("stream");

function MyReadable() {
    stream.Readable.call(this);
}

MyReadable.prototype.__proto__ = stream.Readable.prototype;

var reader = new MyReadable();

for (var i = 0; i < 26; i++) {
    reader.push(String.fromCharCode(97 + i));
}
reader.push(null);
reader.pipe(process.stdout);



