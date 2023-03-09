// 변수 선언
var title = "abc";
console.log(title);

// number
var count = 5;
console.log(count);
// string
var count ='5';

var nick = "jinju";
var nick = 'jinju';

var isMan = true;

var log = function(str){
    console.log(str);
}
function log(str){
    console.log(str);
}

log(nick);

// object
var image = {};

image.width = 100;
image.height = 100;
console.log(image);
console.log(image.width);
console.log(image['width']);

var image = ['1.jpg', '2.jpg'];
console.log(image, image.length);

image[0] = '3.jpg';
image[3] = '4.jpg';
console.log(image);

var nick = '';
var title = -1;
var isMan = null; // true, false, null

var a; // undefined
console.log(a);

var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length - 1; i++){
    console.log(arr[i])
}