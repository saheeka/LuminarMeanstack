// //********************map******************

// var arr1=[2,3,4,5,6];
// //var sqr=(num)=>num**2;

// // function square(num)
// // {
// //     return num**2;
// // }

// // console.log( arr1.map(square));

// console.log(arr1.map(num=>num**2));
// var names=["ram","ravi","arun"]
// console.log(names.map(name=>name.toUpperCase()));

// var nums=[2,3,4,6,7,8];

// console.log(nums.map(num=>num<5?num-1:num+1));



// //*************filter*****************

// //even numbers
// var arr=[10,11,12,13,14,15,17,19];
// console.log(arr.filter(num=>num%2==0))



// //print names starting with r
// var names=["ram","ravi","arun"]
// console.log(names.filter(name=>name[0]=="r"));


// //print employee names
// var employees=[
//     [1000,"ram",225000,"developer"],
//     [1001,"ravi",122000,"developer"],
//     [1002,"raju",327000,"qa"],
//     [1003,"nikil",122000,"qa"]
// ]

// console.log(employees.map(employee=>employee[1]));
// console.log(employees.map(employee=>employee[3]));
// //details of cdeveloper
// console.log(employees.filter(emp=>emp[3]=="developer"));
// //salary grtr than 220000
// console.log(employees.filter(emp=>emp[2]>220000));

// //print all eployees whose dsalry>220000 and designation=develpr

// console.log(employees.filter(emp=>emp[2]>220000 & emp[3]=="developer"));


//*****************reduce*************
var arr=[10,11,12,13,14,15,17,19];
var sum=arr.reduce((num1,num2)=>num1+num2);
console.log(sum);


//min element
var min=arr.reduce((num1,num2)=>num1<num2?num1:num2);
console.log(min);

//max
var max=arr.reduce((num1,num2)=>num1>num2?num1:num2);
console.log(max);




//**********find*****************

// examples in products.js

//************sum */
// in products.js