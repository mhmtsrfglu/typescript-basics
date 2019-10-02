/* this function takes number1 and number2 and types must be number. And also must return number */
/*fonksiyon number1 ve number2 almalı ve tipleri number olmalı ayrıca return ettiği tipte number olmalı */
function sum(number1: number, number2: number): number {
    return number1 + number2;
}

const sum2 = function (number1: number, number2: number): number {
    return number1 + number2;
}

const sum3 = function (number1: number, number2: number): void {
    console.log(number1 + number2);
}

/* number2 is optional, if we don't give number2 to function, error will not occur. */
/* number2 kullanıcıya bağlı verilmek zorunda değil. Eğer verilmezse herhangi bir hata olmayacak */

const minus = (number1: number, number2?: number): number => {
    if (number2)
        return number1 - number2;
    else
        return number1;
}

minus(10,15);
minus(10);