let s=Symbol();
typeof s;
var s1=Symbol('foo');
var s2=Symbol('bar');
console.log(s1);
console.log(s2);
// Symbol(foo)
// Symbol(bar)

var mySymbol= Symbol();
var a={};
a[Symbol]='Hello';
var a={
     [Symbol]:'Hello'
};
var a={};
Object.defineProperty(a,mySymbol,{value:'Hello'});
a[mySymbol]
//"Hello"


var sy1 = Symbol("xx");
var sy2 = Symbol("xx");
var st1="xx";
var st2="xx";
var obj = {};
obj[sy1] = "12";
obj[sy2] = "34";
obj[st1] = "56";
obj[st2] = "78";
obj;
//{xx: "78", Symbol(xx): "12", Symbol(xx): "34"}



var mySymbol = Symbol();
var a = {};
a.mySymbol = 'Hello';
console.log(a[mySymbol]);
console.log(a['mySymbol']);
//undefined
//Hello


var obj = {};
var s1 = Symbol();
var s2 = Symbol();
obj[s1]=123;
obj[s2]=345;
obj["s1"] = 678;
obj.s2 = 910;
for(var k in obj){
    console.log(k,typeof k);
}
// s1 string
//s2 string
Object.getOwnPropertySymbols(obj);
//(2) [Symbol(), Symbol()]


var obj = {};
var s1 = Symbol();
var s2 = Symbol();
obj[s1]=123;
obj[s2]=345;
obj["s1"] = 678;
obj.s2 = 910;
Object.getOwnPropertySymbols(obj).forEach((v)=>{console.log(obj[v])})
// 123
// 345


var obj = {};
var s1 = Symbol();
var s2 = Symbol();
obj[s1]=123;
obj[s2]=345;
obj["s1"] = 678;
obj.s2 = 910;
Object.getOwnPropertySymbols(obj).forEach(function(v){console.log(obj[v])})
// 123
// 345



let s1 = new Set([1,2,3,4,5,5,6,2,2]);
console.log(s1);

var s2 = new Set();
[2,3,5,4,5,2,2].map(x=>s2.add(x));
for(let i of s2){
    console.log(i);
}
//Set(6) {1, 2, 3, 4, 5, …}
//2
//3
//5


//数组去重
var set = new Set([1,2,3,3,3,4,5,6]);
console.log([...set]);
// (6) [1, 2, 3, 4, 5, 6]



var set = new Set();
var a={};
var b=a;
set.add(a);
console.log(set.size)
set.add(b);
console.log(set.size);
// 1
// 1
