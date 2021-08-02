var arr=[1,2,3,4,5,6,7,8,10,11,12];
var arrsum=0;
var mnumber;
var length=arr.length;
console.log(length);
var sum=(length+1)*((length+1)+1)/2;
console.log(sum);
for(let i of arr)
{
     arrsum+=i;
}
console.log(arrsum);
mnumber=sum-arrsum;
console.log(mnumber);
