class SimpleClassExample{
    
    _roomCount:number;
    _windowCount:number;
    _floor:number;

    constructor(roomCount:number, windowCount:number,floor:number){
        this._roomCount=roomCount;
        this._windowCount=windowCount;
        this._floor=floor;
    }

    information(){
        console.log(`This home have ${this._roomCount} room, ${this._windowCount} window and ${this._floor} floor.`)
    }
}


const home = new SimpleClassExample(1,2,3);
home.information();