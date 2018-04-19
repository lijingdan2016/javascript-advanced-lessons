console.log(Object instanceof Function);
console.log(Object instanceof Object);
console.log(Boolean instanceof Function);
console.log(Boolean instanceof Object);
console.log(String instanceof Function);
console.log(String instanceof Object);
console.log(Number instanceof Function);
console.log(Number instanceof Object);
console.log(Function instanceof Function);
console.log(Function instanceof Object);
console.log(Array instanceof Function);
console.log(Array instanceof Object);
console.log(Date instanceof Function);
console.log(Date instanceof Object);
console.log(Math instanceof Function);//f
console.log(Math instanceof Object);//t
console.log(JSON instanceof Function);//f
console.log(JSON instanceof Object);//t
console.log(new(new Function()) instanceof Function);//f
console.log(new Function() instanceof Function);//t

console.log(typeof Array);
console.log(typeof Function);
console.log(typeof Date);
console.log(typeof Number);
console.log(typeof String);
console.log(typeof Boolean);
console.log(typeof Math);//object
console.log(typeof JSON);//object

var o={
    _x:1.0,
    get x(){
        return this._x;
    },
    set x(val){
        this._x=val;
    }
};
console.log(o.x);//1
o.x=2;
console.log(o.x,o._x);//2 2

var o={
    x:1.0,
    get x(){
        return this._x;
    },
    set x(val){
        this._x=val;
    }
};
console.log(o.x);//undefined
o.x=2;
console.log(o.x,o._x);//2 2

var o={
    x:1.0,
    get x(){
        return this.x;
    },
    set x(val){
        this._x=val;
    }
};
console.log(o.x);//因递归调用而报错
o.x=2;
console.log(o.x,o._x);

var o={
    _x:1.0,
    get x(){
        return this.x;
    },
    set x(val){
        this._x=val;
    }
};
console.log(o.x);//因递归调用而报错
o.x=2;
console.log(o.x,o._x);


var o={
    _x:1.0,
    get x(){
        return this._x;
    },
};
console.log(o.x);//1
o.x=2;//只是在对象中写入了x:2
console.log(o.x);//1


var p1={
	_name:"jack",
    _age:23,
    set age(val){
        if(val>0&&val<150){
            this._age=val;
        }else{
			console.log("请设置正常年龄");
        }

    },
    get age(){
        return this._age;
    }
};
p1.age=178;
console.log(p1.age);
//请设置正常年龄
//23

({})._proto_===Object.prototype//false
var Person=function(name){
}
undefined
var Person=function(name){
    this.name=name;
}
var p=new Person("abc");
p._proto_===Person.PROTOTYPE
true
Person._proto_===Function.PROTOTYPE
true
Person._proto_._proto_===Object.PROTOTYPE
true
Person._proto_._proto_._proto_===null;
true

var obj3 = {};
for(var i=0;i<10;i++){
    obj3.i = i;
}//9

var obj4 = {};
for(var i=0;i<10;i++){
    obj4[i] = i;
}

