var superObj={
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.__proto__.x=5;
console.log(subObj_Second.x);
//5


var BaseClass = function() {}
BaseClass.prototype.f2 = function (){
     console.log("This is a prototype method");
};
BaseClass.f1 = function(){
    console.log("This is a stativ method");
}
BaseClass.f1();
var instance1=new BaseClass();
instance1.f2();
// This is a stativ method
// This is a prototype method