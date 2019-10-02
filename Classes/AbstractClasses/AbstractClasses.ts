abstract class CreditBase{
    constructor(){

    }

    save():void{
        console.log("saved");
    }

    abstract hesapla():void;
}

class PersonCredit extends CreditBase{
    constructor(){
        super();
    }   

    hesapla():void{
        console.log("Tüketici kredisine göre hesap yapıldı");
    }
}

class MorgageCredit extends CreditBase{
    constructor(){
        super();
    }

    hesapla():void{

    }
}

let mortgage = new MorgageCredit();
mortgage.hesapla();
mortgage.save();