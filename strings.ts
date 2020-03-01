let nameData = "James William Bond";

console.log('Length of ' + nameData + '  = ' + nameData.length);
console.log(nameData.toUpperCase());
console.log(nameData.toLowerCase());
console.log(nameData.charAt(4));
console.log(nameData.charCodeAt(3)); // print Unicode value or ASCII
console.log(nameData.substring(2,6));

// concatination

let fname:string = "Mahesh";
let mname:string = "Rameshrao";
let lname:string = "Sabnis";

console.log('Traditional Concatination ' + fname + '   ' + mname + ' ' + lname);
console.log(`Template String ${fname}
         ${mname} ${lname}`);
console.log(`${100 * 200}`);



