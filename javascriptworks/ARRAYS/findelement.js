var arr=[10,20,30,40,50];
var element=90,flag=0;
for (let num of arr){
    if(num==element){
        flag++;
        break;
    }
}
console.log(flag==0?"element not found":"element found");