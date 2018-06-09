var [foo3=3]=[];
console.log(foo3);

// 3
undefined
null===undefined
false
null==undefined
true

var [m4=n4,n4=1]=[];
console.log(m4,n4);
// undefined 1

let a=[];
let b=[2,3,4];
[a[0],a[1],a[2]]=b;
console.log(a);
console.log(a==b);
//  （3） [2, 3, 4]
// false

let a=[];
let b=[1,2,3,4,5];
[a[0],,a[1],,a[2]]=b;
console.log(a);
// (3) [1, 3, 5]


//ES6中变量的解构赋值
//数组、对象的解构赋值
//什么是解构赋值？ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构赋值
//这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值
//数组的解构赋值
let [,,third]=["foo","bar","baz"];
console.log(third);

let [x, ,y]=[1,2,3];
console.log(x,y);//1 3

let [head,...tail]=[1,2,3,4];
console.log(head,tail);

let [d,e,...f]=['a'];
console.log(d,e,f);