const today = new Date()
let date = today.getDate()
let mm = today.getMonth() + 1
const fullYear = today.getFullYear()
if(date < 10){
    date = `0${date}`
}
if(mm < 10){
    mm = `0${mm}`
}
console.log(`Todays date: ${date}/${mm}/${fullYear}`)


/*let today = new Date();
let dd = today.getDate();

let mm = today.getMonth()+1; 
const yyyy = today.getFullYear();
if(dd<10) 
{
    dd=`0${dd}`;
} 

if(mm<10) 
{
    mm=`0${mm}`;
} 
today = `${mm}-${dd}-${yyyy}`;
console.log(today);
today = `${mm}/${dd}/${yyyy}`;
console.log(today);
today = `${dd}-${mm}-${yyyy}`;
console.log(today);
today = `${dd}/${mm}/${yyyy}`;
console.log(today);*/