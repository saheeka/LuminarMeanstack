//var expr=12+5*8;
//console.log(eval(expr));

// function functionName(param1,param2....paramn)
// {
//     function  defenition

//     return value
// }
// functionName(); // function calling

//******adding numbers function */

function add(num1,num2){
    let res=num1+num2;
    return res;
}
console.log(add(10,20));


// **********Cube of a number

function cubeNum(num){
    return num**3;

}
console.log(cubeNum(3));

// *** square of a number

function square(num){


    return num**2;

}
console.log(square(4));

// ********factorial function

function factorial(num)
{
    let fact=1;
    for(let i=1;i<=num;i++){
        fact*=i;
    }
    return fact
}
console.log(factorial(5));

// ********recursive


function facto(num){
    if (num==0||num==1){
        return 1;
        
    }
    return num*facto(num-1)
}
console.log(facto(3));



function add(...args)
{
    console.log(args);
}
add(1,2,3,4);