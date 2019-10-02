interface IProduct{
    id:number;
    name:string;
    price:number;
    save?:()=>void
}

function save(product:IProduct){
    console.log(product.name + " was saved");
}

class ProductCls implements IProduct{
    id:number
    name:string
    price:number

    //override
    save():void{
        console.log("saved");
    }
}

save({id:1,name:"Mehmet",price:15});
let product = new ProductCls;
product.save();