const num = Math.floor(Math.random() 
* 10)

const gnum = prompt("guess the correct number from 1 to 10")

if(gnum === num){
    console.log("you got the right number")
}else{
    console.log("better luck next time"+ " " +gnum)
}