export class MyClass {
    constructor(private x:number, private y: number){}

    private display(){
        console.log('I am Private');
    }

    add(): number {
        return this.x + this.y;
    }
    // expression functions purely in ES 6
    sub=()=>{
        return this.x - this.y;
    }
    // set never return a value
    set X(value: number) {
        this.x  =value;
    }
    // get always returns
    get X(): number {
        return this.x;
    }
}

let obj = new MyClass(300,200);
console.log(`Add = ${obj.add()}`);
console.log(`Sub = ${obj.sub()}`);
obj.X = 600;
console.log(`X = ${obj.X}`);
console.log(`Add = ${obj.add()}`);
console.log(`Sub = ${obj.sub()}`);