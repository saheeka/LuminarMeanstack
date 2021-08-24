arr1=[1,2,3,4,5];
arr2=[4,3,5,1,2];
console.log(arr2.sort());
if(arr1.length==arr2.length)
{
    for (let num=0;num<arr1.length;num++ )
    {if(arr1[num]==arr2[num])
        {
            console.log(arr1[num]);
        }
    }
}
else{
    console.log("not same");
}


