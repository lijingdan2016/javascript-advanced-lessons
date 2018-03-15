//类型检测 typeof 一般用于值类型检测
console.log(typeof 123);
console.log(typeof true);
console.log(typeof "abc");
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {name:"Make",age:20});
console.log(typeof function foo(){});
//类型检测 instanceof（左侧操作数为对象，右侧操作数为原型链中的一个类型时，返回为true)
var a={name:"Make",age:20};
console.log(a instanceof Object);

var b=[12,34,{},""];
console.log(b instanceof Array);

var Person=function(){
	//...
};
var p1=new Person();
console.log(p1 instanceof Person);
//基本（原始）数据类型与引用（对象）类型的区别 内存分配方式不同
//内存的分配方式影响变量的生命周期
//函数局部变量中的值类型变量与引用类型变量
function foo(){
    var n=10;
    var m=true;
    var str="Hello World";//str:"Hello World"存在栈中
    //obj的引用存在栈中，{value:"Hello World"}存在堆中，通过栈中的变量名obj（访问地址）访问
    var obj={value:"Hello World"};
};
foo();


(function(){
	//基本（原始）数据类型与引用（对象）类型的区别 赋值方式不同
	var str_a="a";
	var str_b=str_a;//原始类型直接访问值，是值赋值
	str_b="b";//str_b的值为"b",而str_a的值仍然是"a"
	console.log(str_a,str_b);
    
    var obj_a={v:"a"};//obj_a存的是引用，引用堆内存中的对象：{v:"a"};
    var obj_b=obj_a;//obj_b中存的是引用，引用了对内存的值{v:"a"};是引用赋值
    obj_b.v="b";//通过obj_b访问（修改）堆内存的变量，这时候堆内存的对象值为：{v:"b"},由于obj_a和obj_b引用的是堆内存中的同一个对象值，
    //所以这个时候打印的都是{v:"b"}
    console.log(obj_a,obj_b);
    obj_b={v:"c"};//注意：因为改的是整个对象，这里会在堆内存中创建一个新的对象值：{v:"c"},而现在的obj_b引用的是这个对象，
    //所以这里打印的obj_a依旧是

})