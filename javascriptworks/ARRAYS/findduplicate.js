// var arr1=[10,20,30,40];
// var arr2=[9,10,12,20];
// let flag=0;
// for(let i of arr1)
// {
//     for(let j of arr2)
//     {
//         if(j==i)
//         {
//         console.log(i);
//         }
        
//     }
// }



var arr1=[10,20,30,40];
var arr2=[9,10,12,20 ];
let pos1=0,pos2=0;
while(pos1<arr1.length & pos2<arr2.length)
{
    if(arr1[pos1]==arr2[pos2])
    {
        console.log(arr1[pos1]);
        pos1++,pos2++;
    }
    else if(arr1[pos1]>arr2[pos2])
    {
        pos2++
    }
    else{
        pos1++
    }
}




