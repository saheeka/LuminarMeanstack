var low=3, upper=50;

for(let i=low; i<=upper;i++){
    let flag=0;
    for(let j=2; j<i; j++){
        if(i%j==0){
            flag++;
            break;
        }
    }

console.log(flag==0?i:"");
}