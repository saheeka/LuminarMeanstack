var text="hello hai hello hai hello";
// word count

// console.log(text);
// var words=text.split(" ");
 var cnt={}
// for (let word of words){
//     if(word in cnt)
//     {
//             cnt[word]+=1
//     }
//     else{
//         cnt[word]=1;
//     }
// }
// console.log(cnt);

text.split(" ").map(word=>word in cnt? cnt[word]+=1:cnt[word]=1 );
console.log(cnt);