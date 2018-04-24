var a={};
a._proto_===Object.prototype//true
var b=new Object();
b._proto_===Object.prototype//true
b._proto_._proto_//null

var obj={
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
var obj2=Object.create(obj);
obj2.y=2;
var obj3=Object.create(obj);
obj3.y=3;
console.log(obj,obj2,obj3);
obj2.num//10
obj3.num//10
obj2._proto_.num=9;
obj3.num//9


function Person(){
    this.name="jack";
    console.log("hi");
}
var p=new Person();
console.log(p);
//3 hi
//Person {name: "jack"}
undefined
var proObj = {
   z:3
};

var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log("z" in obj);//true
console.log(obj.hasOwnProperty("z"));//false

///////////Part2 原型链属性操作////////////
obj.z = 5;

console.log(obj.hasOwnProperty("z"));
console.log(obj.z);
console.log(proObj.z);

obj.z = 8;
console.log(obj.z);

delete obj.z;//true
console.log(obj.z);

delete obj.z;//true
console.log(obj.z);//still 3

//如何删除原型上的属性
delete  obj.__proto__.z;//或者delete proObj.z;
console.log(obj.z)
//1
//2
//11 3
// true
// false
// true
//20 5
//21 3
//24 8
//27 3
//30 3
//34 undefined


function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.sayHi=function(){
    console.log(this.name,this.age);
}
var p=new Person("M",20);
p.sayHi()
//M 20


function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.sayHi=function(){
    console.log(this.name,this.age);
}
var p=new Person("M",20);
p.sayHi()
//M 20


Person.__proto__===Function.prototype;//true
Person.__proto__.__proto__===Object.prototype;//true
Person.__proto__.__proto__.__proto__===null;//true

var arr =new Array();
arr.__proto__===Array.prototype;//true


var div=document.createElement("div");
div
//<div>​</div>​
div.__proto__
//{constructor: ƒ, Symbol(Symbol.toStringTag): "HTMLDivElement"}
