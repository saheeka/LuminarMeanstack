var employees=[
    [1000,"ram",225000,"developer"],
    [1001,"ravi",122000,"developer"],
    [1002,"raju",327000,"qa"],
    [1003,"nikil",122000,"qa"]
]
for(let employee of employees)
{
    console.log(employee[3]);

}
// for(let employee of employees)
// {
//     console.log(employee[3]);
// }
// for(let employee of employees){
//     if(employee[2]>230000)
//     {
//         console.log(employee[1]);
//     }
// }
// for(let employee of employees)
// {
//     if(employee[3]=="developer")
//     {
//         console.log(employee[1]);
//     }
// }
// for(let employee of employees)
// {
//     if(employee[3]=="qa")
//     {
//         console.log(employee[1]);
//     }
// }


//  highest paid
var max_sal=0;
for (let emp of employees){
    if(emp[2]>max_sal){
        max_sal=emp[2]
    }
}
console.log(max_sal);
 for (let emp of employees)
 {
     if(emp[2]==max_sal)
     {
         console.log(emp[1]);
     }
 }

