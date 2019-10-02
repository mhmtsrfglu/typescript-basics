/* number format */
let number: number;

/* true useage(Doğru kullanım) */
number = 10;
number = 10.5;

/* wrong usage(Hatalı kullanım) */
number = "9";

/* -----------------------------------------------------------------*/

/* string format */
let city: string = "Adana";

/* true useage(Doğru kullanım) */
city = "Ankara";
city = 'Hatay';

/* wrong usage(Hatalı kullanım) */
city = 123;

/* -----------------------------------------------------------------*/

/* logical format */
let isTrue: boolean;

/* true useage(Doğru kullanım) */
isTrue = true;
isTrue = false;

/* wrong usage(Hatalı kullanım) */
isTrue = "true";
isTrue = 123;

/* -----------------------------------------------------------------*/

/* array format */
let numbers: number[];

/* true useage(Doğru kullanım) */
numbers = [1, 2, 3, 4];

/* wrong usage(Hatalı kullanım) */
numbers = [1, 2, 3, "4"];

/* -----------------------------------------------------------------*/
/* generic types */

let genericNumberArray: Array<Number>;

/* true useage(Doğru kullanım) */
genericNumberArray = [1, 2, 3, 4];

/* wrong usage(Hatalı kullanım) */
genericNumberArray = [1, 2, 3, "4"];

/* tupple types */
/* if i need to keep data in array like [number,string] (Eğer datayı [number, string] formatında bir array'de tutmak istersem) */

let arrayList: [number, string] = [10, "Hatay"];

/* wrong usage(Hatalı kullanım) */
arrayList[3] = "world"; // Error, Property '3' does not exist on type '[string, number]'(Hata, 3.index belirtilen tipler arasında bulunamadı).

/* enum types */
enum Data {
  city = "Ankara",
  currency = "TL",
  code = 6
}

let code = Data.code
/* any type */
/* We may need to describe the type of variables in TypeScript. These values may come from web service or etc. If we don't know type of value then we can use any value */
/* TypeScript'te değişkenin tipini belirtmeliyiz. Eğer veri web sunucusundan veya benzeri bir uygulamadan gelebilir. Eğer gelecek verinin tipine dair bir bilgimiz yoksa any tipini kullanabiliriz. */
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

//* void */ 
/* void does not return value after execute */
/* void çalıştıktan sonra geriye değer döndürmez */

/* true useage(Doğru kullanım) */
function warnUser(): void {
  console.log("This is my warning message");
}

/* wrong usage(Hatalı kullanım) */
function warnUserWrong(): void {
  //console.log("This is my warning message");

  return "This is my warning message";
}