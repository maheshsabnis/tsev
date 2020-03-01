class Base {
    constructor(private a:number){}
    print(){
        console.log(`Base ${this.a}`);
    }
}

class Derive extends Base {
    constructor(private b: number) {
        super(b); // call base class ctor
    }
     
    newprint(){
        console.log(`Derive ${this.b}`);
    }
}
let obj: Derive = new Derive(10);
obj.print();
obj.newprint();
