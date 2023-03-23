let defaultName = "Anonim"

function sayHI(name) {
  if(name == null){
    alert("HI, " + defaultName + "!");
  } else {
    alert("Hi, " +  name + "!");
  }
}

function printVars(a,b,c,d){
  console.log(a,b,c,d)
}

let var1,Var2,$var3,_var4

var1 = 1; Var2 = 2; $var3 = 3; _var4 = 4

printVars(var1,Var2,$var3,_var4)  // 1 2 3 4 

var1 = 4; Var2 = 3; $var3 = 2; _var4 = 1

printVars(var1,Var2,$var3,_var4)

