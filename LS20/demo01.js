var arr1=[2,5,8];
arr1.forEach(function (a){
    console.log(a,this);
});
console.log(arr1);
// 2 Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
//5 Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
// 8 Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
// (3) [2, 5, 8]


var arr1=[2,5,8];
var arr2=[1,6,7];
arr1.forEach(function (a){
    console.log(a,this);
},arr2);
console.log(arr1);
// 2 (3) [1, 6, 7]
// 5 (3) [1, 6, 7]
//8 (3) [1, 6, 7]
// (3) [2, 5, 8]


var arr1=[2,5,8];
var arr2=[1,6,7];
arr1.forEach(function (a,i){
    console.log(a,i,this);
},arr2);
console.log(arr1);
// 2 0 (3) [1, 6, 7]
// 5 1 (3) [1, 6, 7]
//8 2 (3) [1, 6, 7]
// (3) [2, 5, 8]



var arr1=[2,5,8];
var arr2=[1,6,7];
arr3=[];
arr1.forEach(function (a,i){
    //console.log(a,i,this);
    arr3[i]=a>arr2[i]?a:arr2[i];
},arr2);
console.log(arr1);
// (3) [2, 5, 8]


var date = new Date(2017,9,18,12,34,1);
console.log(date);

//Wed Oct 18 2017 12:34:01 GMT+0800 (中国标准时间)



date6 instanceof Date;
//true
NaN instanceof Number;
//false

console.log(Date.now());//以毫秒为单位返回当前时间（从1970年1月1日00:00:00开始计算）
console.log((new Date()).getTime());
// 1525675259312
// 1525675259312

console.log(Date.UTC(2017,9,1))
// 1506816000000



var today=new Date();
today.setMonth(6);
console.log(today)
//Sat Jul 07 2018 14:45:22 GMT+0800 (中国标准时间)
console.log(today.getDay());
// 6


//50天后是星期几几月几号？
var newDate = new Date(today.getTime()+1000*3600*24*50);
console.log(newDate);

//Tue Jun 26 2018 15:02:00 GMT+0800 (中国标准时间)


var str = "aabbccdd";
str.replace("aa","XX");
//"XXbbccdd"


var str = "a fAt bat ,a faT cat";
var reg1="/[bc]at/gi";
str.replace(reg1,"XX");

//"a fAt bat ,a faT cat"
var str = "a fAt bat ,a faT cat";
var reg2=new  RegExp("/[bc]at/gi");
str.replace(reg1,"XX");
//"a fAt bat ,a faT cat"