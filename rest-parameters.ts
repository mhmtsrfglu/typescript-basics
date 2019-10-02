function inviteList(firstInvited:string,...others:string[]):string{
    return firstInvited + " "+ others.join(" ");
}

console.log(inviteList("Mehmet","Ahmet","Ali","Can"));