try{
    try{
        throw "oops";
    }
    catch(ex){
        console.log("inner",ex);
    }
    finally{
        console.log("finally");
    }
}
catch(ex){
    console.log("outer",ex);
}
VM129:6 inner oops
VM129:9 finally
undefined
try{
    try{
        throw "oops";
    }
    catch(ex){
        console.log("inner",ex);
        throw ex;
    }
    finally{
        console.log("finally");
    }
}
catch(ex){
    console.warn("outer",ex);
}
VM135:6 inner oops
VM135:10 finally
VM135:14 outer oops
(anonymous) @ VM135:14
undefined
try{
    var x=y;
}catch(e){
    console.log(e.name,e.message);
}
finally{
    console.log("finally");
}
VM178:4 ReferenceError y is not defined
VM178:7 finally
undefined