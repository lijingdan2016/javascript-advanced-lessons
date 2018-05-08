var arr2 = new Array(5);
console.log(arr2)
// (5) [empty × 5]length: 5__proto__: Array(0)
undefined
console.log(arr2[1])
// undefined
undefined
var arr2 = new Array("5");
console.log(arr2)
//2 ["5"]


var arr2=[];
for(var i=0;i<5;i++)
{
    document.onclick =  function(){
        arr2[i]=i;
    }
}
//ƒ (){
        arr2[i]=i;
    }
arr2
//(6) [empty × 5, 5]


var arr=[1,2,3];
delete arr[2];
console.log(arr)
//3 (3) [1, 2, empty]

var arr=[1,2,3];
arr.length=2
delete arr[2];
console.log(arr)

//(2) [1, 2]

function f(){
    console.log(arguments);
}
f(1,2,3,"x");
// Arguments(4) [1, 2, 3, "x", callee: ƒ, Symbol(Symbol.iterator): ƒ]


var a3=[,,];
console.log(a3.length)
//2

var a=[][];
//Unexpected token ]  报错