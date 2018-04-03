/**
 * Created by qie on 2018/4/3
 */
//JS 词法作用域

var name="jack";
function echo(){
    console.log(name);
}
echo();//jack

//词法作用域 与调用形式无关 实例一
var name="jack";
function echo(){
    console.log(name);
}
function foo(){
    var name="Bill";
    echo();
}
foo();//jack

//词法作用域 与调用形式无关 实例二
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    function fee(){
        var name = "Lucy";
        echo();
    }
    fee();
}
foo();//Jack

//通过new Function实例化的函数对象，不一定遵从静态词法作用域
var scope = "g";
function foo(){
	var scope = "l";
	return new Function("console.log(scope);")
}
foo()();//g
