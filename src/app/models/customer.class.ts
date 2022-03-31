export class Customer {
    id:number = 0; 
    name:string = "";
    stateCode:string = "OH";
    active:boolean = true;
    sales:number = 0;

    constructor( id:number, name:string, stateCode:string) {
        this.id = id;
        this.name = name;
        this.stateCode = stateCode;
    }
}