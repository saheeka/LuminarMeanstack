var pattern="ABABCC";
//find first recursive character

var cnt={}
for (let char of pattern)
{
    if(! char in cnt){
        cnt[char]=1;
    }
    else{
        console.log(char);
        break;
    }
}






