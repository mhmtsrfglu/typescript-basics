function genericFunction<T>(value:T):T{
    return value;
}

console.log(genericFunction<string>("mehmet"));
console.log(genericFunction<number>(1));
