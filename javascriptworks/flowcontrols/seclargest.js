var num1=834;
var num2=530;
var num3=770;
// if(num1>num2 &  num1>num3)
// {
//     if(num2>num3)
//     {
//         console.log(" second largest is " +num2);
//     }
//     else
//     {
//         console.log(" second largest is " +num3);
//     }
// }
// if(num2>num1 & num2>num3)
// {
//     if(num1>num3)
//     {
//         console.log(" second largest is " +num1);
//     }
//     else{
//         console.log(" second  largest is " +num3);
//     }
    
// }
// if(num3>num1 & num3>num2)
// {
//     if(num1>num2)
//     {
//         console.log(" second largest is " +num2);
//     }
//     else{
//         console.log(" second largest is " +num2);
//     }

// }
var res=num1>num2 & num1>num3 ? num2>num3 ?num2 :num3 : num2>num1 & num2>num3 ? num1>num3 ? num1:num3 : num3>num1 & num3>num2?num1>num2 ? num1:num2: "equal";
console.log(res);