//Write a “person” class to hold all the details
let details={name:"Manjunathan m",
sonof:"munusamy g",
studying:"full stock developer in guvi",
college:"paavai engineering college",
percentage:65.6,
yearofpass:2017,
stream:"EEE",
whychooseguvi:"tamil language",
mailid:"manjugopi610@gmail.com",
phoneno:9943215775,
}
m=Object.assign({},details,{val:"manju"})
/*console.log(details,m)*/

class person{
   detail(det){
       console.table(det)
   }
}
let obj=new person();
obj.detail(m)

//o/p
/*
┌───────────────┬────────────────────────────────┐
│    (index)    │             Values             │
├───────────────┼────────────────────────────────┤
│     name      │        'Manjunathan m'         │
│     sonof     │          'munusamy g'          │
│   studying    │ 'full stock developer in guvi' │
│    college    │  'paavai engineering college'  │
│  percentage   │              65.6              │
│  yearofpass   │              2017              │
│    stream     │             'EEE'              │
│ whychooseguvi │        'tamil language'        │
│    mailid     │    'manjugopi610@gmail.com'    │
│    phoneno    │           9943215775           │
│      val      │            'manju'             │
└───────────────┴────────────────────────────────┘
*/