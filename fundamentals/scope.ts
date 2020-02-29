for(let i=0; i<5; i++) {
    console.log('Inside Loop' + i);
}

console.log('Out side Loop' + i);

function doWork(x) {
    if(x){
        let y = 10;
        console.log('If Block ' + y);
    }
    console.log('Out of if ' + y);
}
doWork(true);
doWork(false);

