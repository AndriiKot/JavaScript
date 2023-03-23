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

printVars(var1,Var2,$var3,_var4) // 4 3 2 1

const siteURL = "https://...";

//  siteURL = "http://..." Uncaught TypeError: Assignment to constant variable.
//                          at main.js:29:9
//                          main.js:29

// return

function getDistance(speed,time){
  let distance = speed * time;
  return distance;
}

let myDistance = getDistance(6,1);
console.log(myDistance)           // 6

// if

const speedLimit = 60

function amISpeeding(speed){
  if (speed >= speedLimit) {
    alert("You are speeding");
  } else{
    alert("You are not speeding.");
  }
  }

  amISpeeding(44);
  amISpeeding(70);

  const  month_min = 1;
  const  month_max = 12;

  function monthBorn(month_born){
    if((month_born >= month_min) && (month_born <= month_max)){
      alert(`You born ${month_born} month`)
    } else{
      alert (`This is impossible!!!`)
    }
  }

  // else if

  let i = 5;

  if (i == 0){
    console.log(0);
  } else if (i == 1){
    console.log(1);
  } else if (i == 2){
    console.log(2)
  } else if (i == 3){
    console.log(3)
  } else if (i == 4){
    console.log(4)
  } else if (i == 5){
    console.log(5)
  } else {
    console.log("X")
  }

  let color = "blue"

  switch(color){
    case 'red':
      console.log('red');
      break;
    case "yellow":
      console.log('yellow');
      break;
    case "black":
      console.log('black');
      break;
    case "green":
      console.log('green');
      breack;
    case "blue":
      console.log('blue');
      break;
    default:
      console.log("I do not specified color");
      break;
  }


  let number = 20;

  if (number < 10) {
    console.log("<")
  } else {
    console.log(">")
  }

  switch (number < 10){
    case true:
    console.log('<');
    break;
    case false:
    console.log('>');
    breack;
  }


