class GenericClass<T>{
    parameter:T

    constructor(param:T){
        this.parameter = param;
    }

    getParameter():T{
        return this.parameter;
    }
}

let getparams = new GenericClass<string>("Mehmet");
getparams.getParameter();