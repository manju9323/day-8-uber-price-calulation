// uber price calculation using class static program


class calc{
    ans(val1,val2){
        let val=[{"name":"chennai","rs":0},{"name":"vellore","rs":71},{"name":"ambur","rs":71},{"name":"thirupattur","rs":30},{"name":"uthangarai","rs":22},{"name":"banglore","rs":90}];

let from1=val1
let from=val.findIndex((valu)=>{return valu.name==from1})


let fromto1=val2
let fromto=val.findIndex((valu)=>{return valu.name==fromto1})


 if (from===fromto)
 {
     console.log("please enter destinaton place otherwise we can't book ticket")
 }
 else if(from<fromto){
     let temp=0
    for(let i=from;i<=fromto;i++)
    {
        temp+=val[i].rs
        
    } 
    console.log(from1,`to`,fromto1,`fair price is ${temp} $rs for up Good Luck`);

    console.log(from1,"to", fromto1,`fair price is ${temp*2} $rs for up and down Good Luck`);
    //temp.forEach((element)=>{console.log(`fair price is${element.rs}`)});
} 
else if(from>fromto){
    temp=0
   for(let i=fromto;i<=from;i++)
   {
       temp+=val[i].rs
       console.log(temp)
       
   } 
   console.log(from1,`to`,fromto1,`fair price is ${temp} $rs for up Good Luck`);

   console.log(from1,"to", fromto1,`fair price is ${temp*2} $rs for up and down Good Luck`);
   //temp.forEach((element)=>{console.log(`fair price is${element.rs}`)});
}
    }
}
let obj=new calc();
obj.ans("chennai","banglore")


//o/p
//chennai to banglore fair price is 284 $rs for up Good Luck
//chennai to banglore fair price is 568 $rs for up and down Good Luck





//---------------------------------------------------------------

//uber calc using classes in get input dynamic value from user

const readline = require ("readline");
const inp = readline.createInterface
({
    input: process.stdin
});
     var a;
inp.on("line", (data) =>
{
    a = data;
});
inp.on("close", () =>
{
    let main=(a.split(" "));
    let arr=main[0];
    let des=main[1];
    
    class calc{
    
    ans(val1,val2)
    
    {
        let val=[{"name":"chennai","rs":0},{"name":"vellore","rs":71},{"name":"ambur","rs":71},{"name":"thirupattur","rs":30},{"name":"uthangarai","rs":22},{"name":"banglore","rs":90}];

let from1=val1
let from=val.findIndex((valu)=>{return valu.name==from1})


let fromto1=val2
let fromto=val.findIndex((valu)=>{return valu.name==fromto1})


 if (from===fromto)
 {
     console.log("please enter destinaton place otherwise we can't book ticket")
 }
 else if(from<fromto){
     let temp=0
    for(let i=from;i<=fromto;i++)
    {
        temp+=val[i].rs
        
    } 
    console.log(from1,`to`,fromto1,`fair price is ${temp} $rs for up Good Luck`);

    console.log(from1,"to", fromto1,`fair price is ${temp*2} $rs for up and down Good Luck`);
    //temp.forEach((element)=>{console.log(`fair price is${element.rs}`)});
} 
else if(from>fromto){
    let temp=0
   for(let i=fromto;i<=from;i++)
   {
       temp+=val[i].rs
       
   } 
   console.log(from1,`to`,fromto1,`fair price is ${temp} $rs for up Good Luck`);

   console.log(from1,"to", fromto1,`fair price is ${temp*2} $rs for up and down Good Luck`);
   //temp.forEach((element)=>{console.log(`fair price is${element.rs}`)});
}
    }
}
let obj=new calc();
obj.ans(main[0],main[1])
    
});

//o/p
//chennai to ambur fair price is 142 $rs for up Good Luck
//chennai to ambur fair price is 284 $rs for up and down Good Luck









