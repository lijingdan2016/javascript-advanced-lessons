var obj1={x:1};
var obj2=Object.create(obj1);
obj2.y=2;
var Obj3=function(){this.z=3;}
var obj3=new Obj3();
console.log(obj1,obj2,obj3);
// {x: 1}x: 1__proto__: Object {y: 2}y: 2__proto__: Object Obj3 {z: 3}

var obj={
    x:1,
    y:2
};
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}//y 2

var obj={
    x:1,
    y:2
};
for(var k in obj){
    console.log(k,obj[k]);
}
//x 1
//y 2

var obj={x:1};
Object.defineProperty(obj,"y",{
     value:2,
     writable:false
});
var xDes=Object.getOwnPropertyDescriptor(obj,"x");
var yDes=Object.getOwnPropertyDescriptor(obj,"y");
console.log(xDes,yDes);
//{value: 1, writable: true, enumerable: true, configurable: true}
// {value: 2, writable: false, enumerable: false, configurable: false}

var obj2=Object.create({x:1});
obj2.y=0;
Object.keys(obj2);
["y"]
Object.defineProperty(obj2,"z",{value:3});
console.log(Object.keys(obj2));
console.log(Object.getOwnPropertyNames(obj2));
//6 ["y"]
//7 (2) ["y", "z"]

for(var k in obj2){
    console.log(k,obj2[k]);
}

// y 0
// x 1
