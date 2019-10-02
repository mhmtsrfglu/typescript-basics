class Person{
    save(){
        console.log("Person was saled");
    }
}

class Costumer extends Person{
    sell(){
        console.log("Product was sold");
    }
}

class Staff extends Person{
    paySalary(){
        console.log("Salary was paid");
    }
}   


let costumer=new Costumer();
costumer.save();
costumer.sell();


let staff=new Staff();
staff.save();
staff.paySalary();
