var num=123;
var i= 0 ,sum =0;
while(num!=0){//        12!=0 1!=0 0!=0
    let digit=num%10;// 2, 1
    //console.log(digit); //3,2,1
    sum =sum*10+digit;    // reverse the number
    sum += digit*digit*digit;
    num = Math.floor(num/10);//12 ,1, 0
}
console.log(sum);