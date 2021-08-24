var olympics=[
    
    {country:"unitedstates",gold:30,silver:35,bronze:27,total:92},
    {country:"japan",gold:27,silver:10,bronze:15,total:47},
    {country:"aus",gold:17,silver:06,bronze:20,total:43},
    {country:"china",gold:34,silver:24,bronze:16,total:74},
    {country:"india",gold:0,silver:2,bronze:3,total:05},
    {country:"germany",gold:6,silver:10,bronze:16,total:25}
]

// print country names
for(let country of olympics)

{
    console.log(country.country);
}
// or 
//olympics.map(nation=>nation.country).forEach(c_name=>console.log(c_name)); 

//which country got most gold medal

var m_gold=olympics.reduce((nation1,nation2)=>nation1["gold"]>nation2["gold"]?nation1:nation2);
console.log(m_gold);

//which country got most medals

var m_medal=olympics.reduce((nation1,nation2)=>nation1["total"]>nation2["total"]?nation1:nation2);
console.log(m_medal);

//sort countries based on gold medals

var sort_gold=olympics.sort((nation1,nation2)=>nation1.gold-nation2.gold);
console.log(sort_gold);
//sort countries based on total medals

var sort_medal=olympics.sort((nation1,nation2)=>nation1.total-nation2.total);
console.log(sort_medal);

// country got silver>10

 var silver_ten=olympics.filter((nation)=>nation.silver>10);
 console.log(silver_ten);
//countries gold medal=0
//country gold medal >20
//is pakistan participatin

var is_present=olympics.some((nation)=>nation.country=="pakistan");
console.log(is_present);