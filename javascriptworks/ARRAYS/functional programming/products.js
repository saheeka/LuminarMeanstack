var products=[
    ["001","complan",275,50],
    ["002","boost",255,20],
    ["003","horlicks",225,5],
    ["004","bournvita",230,0],
    ["005","pediasure",220,10]

    
]
//print product names

//console.log(products.map(pr=>pr[1]));


//print available product namr
//console.log(products.filter(pr=>pr[3]>0).map(pr=>pr[1]));

//print out of stock details
//console.log(products.filter(pr=>pr[3]==0));

//list all products whose price>250
//console.log(products.filter(pr=>pr[2]>250));


//low cost product
//reduce
// var low=products.reduce((pr1,pr2)=>pr1[2]<pr2[2]?pr1:pr2);
// console.log(low);


// var high=products.reduce((pr1,pr2)=>pr1[2]>pr2[2]?pr1:pr2);
// console.log(high);


// //highest stock
// var h_stock=products.reduce((pr1,pr2)=>pr1[3]>pr2[3]?pr1:pr2);
// console.log(h_stock);

//is there any item available under 200
//console.log(products.filter(pr=>pr[2]<200));


// function fibonacci(n)
// {
//     if(n==0 | n==1){
//         return n;
//     }
//     else{
//         return fibonacci(n-1 )+ fibonacci(n-2)
//     }
// }
// fibonacci(8)



//************8find */
console.log(products.find(item=>item[1]==="complan"));


//*************some*/
console.log(products.some(item=>item[2]>100));

//*************foreach */
products.forEach((item)=>console.log(item[1]));

console.log(products.some((item)=>item[2]>=200 &item[2]<=250));


//******************sort */

products.sort((item1,item2)=>item1[2]-item2[2]).forEach(item=>console.log(item));