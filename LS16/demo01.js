var a=1;
function f1(){
    var b=2;
    function f2(){
        console.log(a,b);
    }
    f2();
}
f1();
//1 2


var a=1;
function f1(){
    var b=2;
    function f2(){
        console.log(a,b,c);
    }
    f2();
}
f1();
//5 Uncaught ReferenceError: c is not defined
   // at f2 (<anonymous>:5:25)
    //at f1 (<anonymous>:7:5)
    //at <anonymous>:9:1

    var a=10,b="Hi";
    function thisTest(){
        this.a=20;
        delete this.b;
        this.c="新添加的全局变量";
    }
    thisTest();
    console.log(a,c);
    //8 20 "新添加的全局变量"

    function thisTest(){
        var a=b=2;
    }
    thisTest();
    console.log(b);
    // 2
  //若是console.log(a) 报错


  var point={
    x:0,
    y:0,
    moveTo:function(x,y){
        this.x=x;
        this.y=y;
    }
};
point.moveTo(1,1);
console.log(point);
// {x: 1, y: 1, moveTo: ƒ}


function Person(age){
    this.age=age;
}
var p=new Person(23);
p.age
//23
var p2=new Person(50);
p2.age
//50


var Person=function(name,age){
    this.name=name;
    this.age=age;
    this.showMe=function(){
        console.log(this.name,this.age);
    }
}
var p1=new Person("Make",23);
var p2=new Person("Lucy",22);
p1.showMe();
p2.showMe();

//Make 23
// Lucy 22


objA={name:"AA",x:1};
objB={name:"BB",x:5};
function test(){
    console.log(this.name,this.x);
}
objA.fun=test;
objA.fun();
objA.fun.call(objB);
//AA 1
//BB 5



function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        //此处that为实例化出来的p对象
        function moveX(x) {
            this.x+=x;//this改为that
        }
        function moveY(y) {
            this.y+=y;//this改为that
        }
        moveX.bind(this,x)();
        moveY.bind(this,y)();
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);//输出为Point{x:3,y:4}，移动了(1,1)
//Point {x: 3, y: 4, moveXY: ƒ}




function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        //此处that为实例化出来的p对象
        function moveX(x) {
            this.x+=x;//this改为that
        }
        function moveY(y) {
            this.y+=y;//this改为that
        }
        moveX.call(this,x);
        moveY.apply(this,[y]);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);//输出为Point{x:3,y:4}，移动了(1,1)
//Point {x: 3, y: 4, moveXY: ƒ}
