var num=1114;
var sum=0;
while(num!=0)
{
     var res=num%10; //3,
      sum+=res;  //3+
      num=Math.floor(num/10);
}
console.log(sum);