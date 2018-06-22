var name="Jack";
var person={
   name,
   showInfo(){
       console.log(this.name);
   }
}
person.showInfo();
//Jack

var obj1={a:1,b:2};
var obj2={c:3,d:4};
Object.setPrototypeOf(obj2,obj1);
console.log(obj2.a,obj2.b,obj2.c,obj2.d)
//1 2 3 4

var obj1={a:1,b:2};
var obj2=Object.create(obj1);
obj2.c=3;
obj2.d=4;
console.log(obj2.a,obj2.b,obj2.c,obj2.d)
// 1 2 3 4

Object.keys(obj2);
// ["c", "d"]
"a" in obj2
//true

var obj={foo:'baz',baz:42};
Object.entries(obj);
// [Array(2), Array(2)]0: (2) ["foo", "baz"]1: (2) ["baz", 42]length: 2__proto__: Array(0)
for(var [k,v] of Object.entries(obj)){
    console.log(k,v);
}
//foo baz
// baz 42

var max=(a,b)=>a>b?a:b;
max(2,3)
//3
var max=function(a,b){
    return a>b?a:b;
}
max(22,3)
//22

var f =(v)=>{return v+1};//如果有大括号的话，必须加return
f(2);
//3

function full(person){
    return person.last+" "+person.first;
}
full({last:"li",first:"Ming"});
//"li Ming"

//如果认定为一个对象必须用小括号括起来


var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        function moveToX() {
            this.x = x;//this绑定到了哪里？
        }
        //内部嵌套函数
        function moveToY() {
            this.y = y;//this绑定到了哪里？
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
//{x: 0, y: 0, moveTo: ƒ}


function foo(x,...y){
    console.log(y);
}
foo(1,2,3);
// (2) [2, 3]0: 21: 3length: 2__proto__: Array(0)


function a(x,y){
    console.log(x,y);
}
a.call({},1,2);
// 1 2
undefined
a.apply({},[1,2]);
// 1 2


function a(x,y){
    console.log(x,y);
 }
 var arr=[1,2];
 a.apply({},arr);
 a.call({},arr[0],arr[1]);
 a.call({},...arr);
// 1 2
// 1 2
// 1 2

function test(){
    console.log(Array.from(arguments));
}
test("a","b","c");
VM394:2 (3) ["a", "b", "c"]
undefined


VM401:1 Uncaught SyntaxError: Unexpected identifier
function test(){
    console.log(...arguments);
}
test("a","b","c");

VM404:2 a b c