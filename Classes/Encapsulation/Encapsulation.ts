/* if you are using get and set method in class then you should use ECMAScript 5 or higher. Otherwise you will get error! */
/* Eğer sınıf içerisinde get ve set metodlarını kullanacaksak, bunu kullanmak için ECMAScript 5 ve üzeri versiyon kullanmalıyız. Aksi halde hata alırız. */
class Encapsulation{
    private personName:string

    constructor(name:string){
        this.personName = name;
    }

    get name():string{
        return this.personName;
    }

    set name(name:string){
        this.personName = name; 
    }

    public save(){
        console.log("Person saved");
    }
}

let person = new Encapsulation("Mehmet");

console.log(person.name);
person.save();