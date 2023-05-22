// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// for (let i = 1; i <= 10; i++) {
//     let row = ""
//     for (let j = 1; j <= 10; j++) {
//         row += (i * j) + "\t"
//     }
//     console.log(row)
// }

// for( let i= 2; i<=2; i++){
//     let row = ""
//     for(let j=1; j<=10; j++){
//         row+=(i*j) + "\t"
//     }
//     console.log(row)
// }

// const numbers = [2,3,4,5]

// const sum = numbers.reduce((a, b ) => a+b,0)
// console.log(sum)

// function reverseNumber(arr){
//     return arr.reverse()
// }

// const number = [1,2,3,4,5]
// const numbers1 = reverseNumber(number)
// console.log(numbers1)


// const sortNum = [2,1,3,4,5]
// const sorted = sortNum.sort((a,b)=> a-b)

// console.log(sorted)

// function fln(arr) {
//     return arr.filter((num=> num>=0))
// }

// const array = [1,2,3,-3,-4,-5]
// const flN = fln(array)
// console.log(flN)

// const myString = "my name is vedant  "
// const removeSpaces = myString.replace(/\s/g,"")
// console.log(removeSpaces)

// let array = 100

// if(array % 10 === 0){
//     console.log("true")
// }else{
//     console.log("false")
// }

// function countVowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0

//     for (let i = 0;i< str.length; i++)  {
//         if (vowels.includes(str[i].toLowerCase())) {
//             count++
//         }
//     } 
//     return count;
// }
// console.log(countVowels("Hello World"));

// let stringArray = "helloo"

// const vowels = ['a', 'e', 'i', 'o', 'u']
// let count = 0
// for (let index = 0; index < stringArray.length; index++) {
//     if(vowels.includes(stringArray[index].toLowerCase())){
//         count++
//     }
// }
// console.log(count)

function outer(){
    var a =1;
    function inner(){
        console.log(a)
    }
    return inner;
}
outer()();
