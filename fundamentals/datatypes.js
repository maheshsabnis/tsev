// explicit datatype declaration
var n1;
n1 = 100; // success
//n1="ddd"; // fail
// implicit
var n2 = 100; // n2 is implicitely declared as number
//n2="fff"; // error
// equality
var a = 100;
console.log('a = ' + a + '  type of a =  ' + typeof (a));
var b = "100";
console.log('b = ' + b + '  type of b =  ' + typeof (b));
console.log(a == b); // value euqality in JavaSript --> true
console.log(a === b); // value + type equality aka deep equality --> false 
// object equality
var o1 = { x: 10 }; // JSON object aka object literal
console.log('o1.x = ' + o1.x);
var o2 = o1; // o1 and o2 points to same x
console.log('o2.x = ' + o2.x);
o2.x = 100;
console.log('o1.x after o2.x is changed = ' + o1.x);
console.log('o2.x after o2.x is changed = ' + o2.x);
// create a clone of o1 with same schema and value
// blank object is created {} and schema and value of o1
// will be put into the blank object {x:100}
var o3 = Object.assign({}, o1);
console.log('o1.x = ' + o1.x);
console.log('o3.x = ' + o3.x);
o3.x = 500;
console.log('o1.x after o3.x is changed = ' + o1.x);
console.log('o3.x after o3.x is changed = ' + o3.x);
