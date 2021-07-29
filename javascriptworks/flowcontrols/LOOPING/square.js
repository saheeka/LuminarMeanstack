var num=2, low=8, upp=28;
var i=1;
while(i<=upp)
{
    let res=i**num// res=1*3
    if(res> low && res< upp){
        console.log(i);
    }
    i++;
}