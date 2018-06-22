var [x,y,z,w]=["a","c","d","b"];
[x,y,z,w]=[x,w,y,z];
console.log(x,y,z,w);
//a b c d

function example(){
      return [1,2,3];
}
var [a,b,c]=example();
console.log(a,b,c);
//1 2 3

var jsonData ={
    id:42,
    status:"OK",
    data:[867,5309]
}
let{ id,data }=jsonData;
console.log(id,data);
//42 (2) [867, 5309]


let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
var arr1 = Array.prototype.slice.call(arrayLike); 
let arr2 = Array.from(arrayLike); 
console.log(arr1);
console.log(arr2);
//(3) ["a", "b", "c"]
//(3) ["a", "b", "c"]

