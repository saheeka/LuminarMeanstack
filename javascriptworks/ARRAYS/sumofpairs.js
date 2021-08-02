 var arr=[5,2,3,4,6,1];
 var sum=4;
// for(let i of arr)
// {
//     for(let j of arr)
//     {
//         if(i+j==sum){
//             console.log(i,j);

//             break;
//         }
//     }
// }


//*****************************
var low=0,upp=arr.length-1;
while(low<upp)
{
    let total=arr[low]+arr[upp]
    //case 1
    if(total==sum)
    {
        console.log(arr[low],arr[upp]);
        break;
    }
    //case 2
    else if(total>sum)
    {
        upp--;
    }
    //cse 3
    else 
    {
        low++
    }

}

