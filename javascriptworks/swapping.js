// var num1=10;
// var num2=20;
// var num3;
// num3=num2;
// num2=num1;
// num1=num3;
// console.log(`num1 is ${num1} num2 ${num2}`);
// //num1=num1+num2
// //num2=30-20
// //num1=30-10


//*********square */
// var num=5
// var res=num**2
// console.log(res)


//****area triangle */
// 

//****** second largest among 3 */
var num1=63,num2=132,num3=254;
if(num1>num2 & num1>num3)
{
    if(num2>num3){
        console.log(num2);

    }
    else{
        console.log(num3);
    }
}
if(num2>num3 & num2>num1)
{
    if(num3>num1)
    {
        console.log(num3);
    }
    else
    {
        console.log(num1);
    }
}
if(num3>num1 & num3>num2)
{
    if(num2>num1)
    {
        console.log(num2);
    }
    else{
        console.log(num1);
    }
}




//***************largest */

var num1=1043,num2=834,num3=1043;
if(num1>num2 & num1>num3)
{
    console.log(num1);
}
if(num2>num3 & num2>num1){
    console.log(num2);
}
if(num3>num1 & num3>num2)
{
    console.log(num3);
}


////****prime */


// var num=25,flag=0
// for(i=2;i<num;i++)
// {
//     if(num%i==0)
//     {
//      flag += 1;
//     }
// }
// console.log(flag==0?" prime": " not prime");



//*********** */
var flag=0,low=3,upp=10
for(i=low;i<=upp;i++)
{
    for(j=2;j<i;j++)
    {
    if(i%j==0)
    {
     flag = 1;
     break;
    }
    }
    
console.log(flag==0? i: "");
}