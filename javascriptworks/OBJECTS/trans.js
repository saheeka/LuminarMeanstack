var datas=[
    {accno:1000,ac_type:"savings",balance:5000,transactions:[
        {to:1001,amount:500,note:"food"},
        {to:1003,amount:600,note:"travel"},
        {to:1001,amount:700,note:"ball"}
    ]} ,
    {accno:1001,ac_type:"savings",balance:16000,transaction:[
        {to:1000,amount:550,note:"bill"},
        {to:1002,amount:600,note:"emi"},
        {to:1002,amount:700,note:"bill"}
    ]},
    {accno:1002,ac_type:"savings",balance:800,transaction:[
        {to:1001,amount:600,note:"clothing"},
        {to:1000,amount:800,note:"travel"},
        {to:1000,amount:6700,note:"cycle"}
    ]},
]

//chk for 1005 account
// console.log(datas.some(account=>account.acno==1005));
// console.log();
// console.log(datas.reduce((acc1,acc2)=>acc1.balance<acc2.balance?acc2:acc1));


// datas.sort((acc1,acc2)=>acc2.balance-acc1.balance).forEach(acc=>console.log(acc));
    
// debit transactions of acc 1000

//datas.filter(account=>account.accno==1000).forEach(account=>console.log(account.transactions));

//credit transaction accno 1000
var credit_trans=datas.map(account=>account.transactions).forEach(transactions=>{
    transactions.forEach(trans=>{
        trans.to==1000?trans:""
    })
}) 
console.log(credit_trans);  



//payment history of 1001
//datas.filter(account=>account.accno==1001).forEach(account=>console.log(account.transactions));