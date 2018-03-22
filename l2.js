function max(a,b){
    return a>b?a:b;
}
max(2,3);
3
var max=function(a,b){
    return a>b?a:b;
};
max(2,3)
3
var max=new Function("a","b","return a>b?a:b");
max(2,3);
3

function test1(){
    console.log("this is",this);
}
test1();
VM355:2 this is Window {speechSynthesis: SpeechSynthesis, webkitStorageInfo: DeprecatedStorageInfo, indexedDB: IDBFactory, webkitIndexedDB: IDBFactory, ondeviceorientationabsolute: null…}
undefined
function test2(){
    function test3(){
        console.log("this is",this);
    }
    test3();
}
test2();
VM477:3 this is Window {speechSynthesis: SpeechSynthesis, webkitStorageInfo: DeprecatedStorageInfo, indexedDB: IDBFactory, webkitIndexedDB: IDBFactory, ondeviceorientationabsolute: null…}
undefined
var obj={
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test();
VM594:5 23 Object {name: "obj", x: 23}
undefined
var sayHi=function(){
    console.log("Hi,i'm",this.name);
}
obj.sayHi=sayHi;
obj.sayHi();
VM720:2 Hi,i'm obj
undefined

var fish={
    name:"fish",
    swim:function(m,n){
        console.log("i'm"+this.name+"i can swim __",m,n);
    }
};
var bird={
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+"i can fly __",m,n);
    }
};
var me={
    name:"ABC"
};
bird.fly(5,6);
fish.swim.call(me,3,4);
bird.fly.call(me,7,8);

VM1190:10 i'm:pollyi can fly __ 5 6
VM1190:4 i'mABCi can swim __ 3 4
VM1190:10 i'm:ABCi can fly __ 7 8
undefined
function test(){
    console.log(Array.prototype.slice.call(arguments));
}
test(1,2,3,"4",5);
VM1360:2 [1, 2, 3, "4", 5]
function Person(name){
    this.name=name;
}
Person.prototype.sayHi=function(){
    console.log("Hi,i'm"+this.name);
}
var p1=new Person("Jack");
p1.sayHi();
VM1584:5 Hi,i'mJack
undefined
function test1() {
    console.log("this is",this);
}
test1();
VM1596:2 this is Window {speechSynthesis: SpeechSynthesis, webkitStorageInfo: DeprecatedStorageInfo, indexedDB: IDBFactory, webkitIndexedDB: IDBFactory, ondeviceorientationabsolute: null…}
undefined
function test2() {
    function test3(){
        console.log("this is",this);
    }
    test3();
}
test2();
VM1598:3 this is Window {speechSynthesis: SpeechSynthesis, webkitStorageInfo: DeprecatedStorageInfo, indexedDB: IDBFactory, webkitIndexedDB: IDBFactory, ondeviceorientationabsolute: null…}
undefined
var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test();
VM1600:5 23 Object {name: "obj", x: 23}
undefined
var sayHi = function () {
    console.log("Hi，i'm",this.name);
};
obj.sayHi = sayHi;
obj.sayHi();
VM1602:2 Hi，i'm obj
undefined
objA = {name:"AA"};
objB = {name:"BB"};
objA.foo = function(){
    console.log(this.name);
};
objA.foo();
objA.foo.call(objB);

VM1603:4 AA
VM1603:4 BB
undefined
function test(){
    console.log(arguments);
    console.log(Array.prototype.slice.call(arguments));
    var s="";
    for(var i=0;i<arguments.length;i++){
        s+=arguments[i];
    }
    return s;
}
test("hello,","world!");
VM1915:2 ["hello,", "world!"]
VM1915:3 ["hello,", "world!"]
"hello,world!"
var sum=function(a,b,c){
    b=b||4;
    c=c||5;
    return s;
}
test("hello,","world!");
VM1915:2 ["hello,", "world!"]
VM1915:3 ["hello,", "world!"]
"hello,world!"
var sum=function(a,b,c){
    b=b||4;
    c=c||5;
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));
VM2155:6 6
VM2155:7 8
VM2155:8 10
undefined


var a = 1;
function foo(x) {
    console.trace("a:",a," x:",x);
    x = 2;//step 2222
    console.trace("a:",a," x:",x);//step 3333
}

console.trace("a:",a);
foo(a);// step 1111
console.trace("a:",a);
VM2157:8 a: 1
(anonymous) @ VM2157:8
VM2157:3 a: 1  x: 1
foo @ VM2157:3
(anonymous) @ VM2157:9
VM2157:5 a: 1  x: 2
foo @ VM2157:5
(anonymous) @ VM2157:9
VM2157:10 a: 1
(anonymous) @ VM2157:10
undefined
var obj = {x:1};
function fee(o){
    console.trace("obj.x :",obj.x," o.x :",o.x);
    o.x = 3;// step 2222
    console.trace("obj.x :",obj.x," o.x :",o.x);// step 3333
}

console.trace("obj.x :",obj.x);
fee(obj);// step 1111
console.trace("obj.x :",obj.x);//step 4444  obj.x被改写为3

//打开index.html 学习chrome的Sources调试
document.onclick = function () {//测试Event Listener Breakpoints
    alert("click");
    //var body =  document.getElementsByName("body");
};
VM2159:8 obj.x : 1
(anonymous) @ VM2159:8
VM2159:3 obj.x : 1  o.x : 1
fee @ VM2159:3
(anonymous) @ VM2159:9
VM2159:5 obj.x : 3  o.x : 3
fee @ VM2159:5
(anonymous) @ VM2159:9
VM2159:10 obj.x : 3
(anonymous) @ VM2159:10
function () {//测试Event Listener Breakpoints
    alert("click");
    //var body =  document.getElementsByName("body");
}