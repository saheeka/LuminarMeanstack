var num=20;
if(num%3==0 && num%5==0 && num%15==0){
    console.log("fizzbuzz");
}

else if(num%3==0)
{
    console.log("fizz");

}
 else if(num%5==0)
{
    console.log("buzz");
    
}
 else if(num%15==0)
{
    console.log("fizzbuzz");
}
else{
    console.log("the number is not divisible by 3, 5 and 15");
}