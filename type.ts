// typescript
var title:string="casino royale";
var studio:string="eon production,christ gopi studio";
var ratting:string="12fe"
//console.log(title,studio,ratting)

class movies{
    constructor(title,studio,ratting){
        this.titl=title;
        this.stu=studio;
        this.rat=ratting;
    }
    ans(){
        console.log(this.titl,this.stu,"PG"+this.rat)
    }

}
let obj = new movies(title,studio,ratting);
obj.ans()