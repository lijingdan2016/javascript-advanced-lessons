var str = "xx-xyy-xx";
undefined
var  a=str.split("-");
console.log(a);
// (3) ["xx", "xyy", "xx"]

var str = "xx-x*y-xx";
var  a=str.split("/[-*/gi");
console.log(a);
// ["xx-x*y-xx"]

var str = "xx-x*y-xx";
var  a=str.split("/[-*]/gi");
console.log(a);
// ["xx-x*y-xx"]
undefined
"a2d5".replace(/\d/gi,"X");
"aXdX"
"a2d5".replace(/\w/gi,"X");

"XXXX"
"a2d5".replace(/\D/gi,"X");

"X2X5"
"a2d5".replace(/\W/gi,"X");

"a2d5"
var str = "xx-x*y-xx";
var a = str.split("/[-*]/gi");
console.log(a);
// ["xx-x*y-xx"]

"a2d5".replace(/\S/gi,"X");
"XXXX"
"a2d5".replace(/\s/gi,"X");
"a2d5"

"12345678".replace(/\d{3,6}/,'X');
//"X78"
"12345678".replace(/\d{3,6}?/,'X');
//"X45678"
"12345678".replace(/\d{3,6}/g,'X');
//"X78"