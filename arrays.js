var names = []; // explict to string
var namesD = []; // implicit to 'any'
names.push('James Bond');
names.push('Ethan Hunt');
names.push('Indiana Jones');
names.push('Jason Bourn');
names.push('Sherlock Holmes');
// traditional iteration
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
console.log('Using for..in ES 5');
for (var i in names) {
    console.log(names[i]);
}
console.log('for..of itaration in ES 6 like for..each');
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var n = names_1[_i];
    console.log(n);
}
