let names: Array<string> =[]; // explict to string
let namesD = []; // implicit to 'any'
names.push('James Bond');
names.push('Ethan Hunt');
names.push('Indiana Jones');
names.push('Jason Bourn');
names.push('Sherlock Holmes');

// traditional iteration
for(let i=0;i<names.length;i++) {
    console.log(names[i])
}
console.log('Using for..in ES 5');
for(let i in names) {
    console.log(names[i]);
}
console.log('for..of itaration in ES 6 like for..each');
for(let n of names) {
    console.log(n);
}
