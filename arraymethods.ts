let charachetrs: Array<string> =[]; 
charachetrs.push('James Bond');
charachetrs.push('Ethan Hunt');
charachetrs.push('Indiana Jones');
charachetrs.push('Jason Bourn');
charachetrs.push('Sherlock Holmes');

// using method for iteration
function printData(v: string,i: number){
    console.log(`Name at ${i}th index is = ${v}`);
}
charachetrs.forEach(printData); // <--- the call back function explictle passed
console.log();
console.log('pass the function body as callback');
// charachetrs.forEach(function(v,i){
//     console.log(`Name at ${i}th index is = ${v}`);
// });
// console.log('Use the Arrow Operator');
// charachetrs.forEach((v,i)=>{
//     console.log(`Name at ${i}th index is = ${v}`);
// });

let res: Array<string> = [];
charachetrs.forEach((v,i)=> {
   if(v.charAt(0) === 'J') {
       res.push(v);
   }
});
console.log(JSON.stringify(res));

res = charachetrs.filter((v,i)=> {
   return v.charAt(0) === 'J';
});
console.log(JSON.stringify(res));
console.log(JSON.stringify(charachetrs.reverse()));
console.log(JSON.stringify(res.reverse()));

