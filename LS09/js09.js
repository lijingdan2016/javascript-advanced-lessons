console.log(a);//undefined
var a=1;
console.log(a);//1

var a;
console.log(a);//undefined
a=1;
console.log(a);//1

console.log(a,b);//undefined undefined
var b=23;
console.log(a,b);//undefined 23
var a=b;
console.log(a,b);//23 23

console.log(obj1,obj2);//undefined undefined
var obj1={x:23};
console.log(obj1,obj2);//Objectx: 25__proto__: Object undefined
var obj2=obj1;
console.log(obj1,obj2);//Objectx: 25__proto__: Object Objectx: 25__proto__: Object
obj2.x=25;
console.log(obj1,obj2)//Objectx: 25__proto__: Object Objectx: 25__proto__: Object

console.log(obj1,obj2);//undefined undefined
var obj1={x:23};
console.log(obj1,obj2);//Objectx: 23__proto__: Object undefined
var obj2=obj1;
console.log(obj1,obj2);//Objectx: 23__proto__: Object Object {x: 23}

foo();//f_2
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}

function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
foo();//f_2

foo();//报错   Uncaught TypeError: foo is not a function
var foo = function(){
    console.log("foo");
};

console.log(foo);//undefined
var foo = function(){
    console.log("foo");
};
foo();//foo

AA();
function AA(){
   console.log("AA_1");//AA_1
}
var AA=function AA(){
    console.log("AA_2");
};
AA();//AA_2


function AA(){
    console.log("AA_1");
}
var AA;
AA();//AA_1
AA = function AA(){
    console.log("AA_2");
};
AA();//AA_2


if(true){
    var i=0;
}
function foo(){
    console.log("j:",j);
    var j=10;
    console.log("j:",j);
}
foo();//j:undefined  j:10
console.log("i:",i);//i:0
console.log("j:",j);//报错  Uncaught ReferenceError: j is not defined


//上边代码等价于
var i;
if(true){
    i = 0;
}

function foo(){
    var j;
    console.log("j:",j);//undefined
    j = 10;
    console.log("j:",j);//10
}
foo();

console.log("i:",i);//0
console.log("j:",j);//报错


var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();//jack



var x = "outside f1";
var f1 = function () {
    var x = "inside f1";
    console.log(x);
};
f1();//inside f1
console.log(x);//outside f1


var x = "outside f1";
var f1 = function () {
    console.log(x);
};
f1();//outside f1
console.log(x);//outside f1


ar f2 = function () {
    var y = "局部";
    console.log(y);
};
f2();//局部
console.log(y);//报错 Uncaught ReferenceError: y is not defined

var f2 = function () {
	y = "全局";
    console.log(y);
};
f2();//全局
console.log(y);//全局



if(true){
    var z = 23;
}
console.log(z);//正常输出23
//？？？？？