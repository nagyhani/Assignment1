
// 1

//  let x = "123"
//  let y = Number(x)
//  let z = y + 7
//  console.log(z)


// 2

// function checkValue(x){
//     if(x){
//         console.log("value valid")
//     } else{
//         console.log("value invalid")
//     }
// }
// checkValue(0)


// 3 

// for(i=0 ; i < 10 ; i++){
//     if(i%2 == 0){
//         continue
//     }
//     console.log(i);
// }


// 4

//let x = [1,2,3,4,5,6,7,8]
// let evenNumbers = x.filter(number => number %2 == 0 )
// console.log(evenNumbers);



// 5 

// let x = [1,2,3,4,5]
// let y= [6,7,8,9,10]
// let mergedArrays = [...x,...y]
// console.log(mergedArrays);



// 6
// let output;
// function daysAndWeeks(x){

//     switch(x){
//         case 1:
//            return console.log(output = "Sunday");
         
//         case 2:
//            return console.log(output = "Monday");
         
//         case 3:
//            return console.log(output = "Tuesday");
        
//          case 4:
//            return console.log(output = "Wedenday");
            
//          case 5:
//            return console.log(output = "Thursday");
            
//          case 6:
//            return oconsole.log(output = "Friday");
             
//          case 7:
//            return console.log(output = "Saturday");        
//     }
// }
// daysAndWeeks(5)


// 7

// let x = ["a" , "ab" , "abc" , "abcd" , "abcde"]

// x.map((ele)=>{

//     console.log(ele.length);
    
// })


// 8
// function divide(x){

//     if (x % 3 == 0 && x % 5==0) {

//         console.log("Divisible by both");
        
//     } else{

//         console.log("Not Divisible");

//     }
// }

// divide(55)


// 9

// let square = (x)=> {
//     return console.log(x**2)}
// square(6)


// 10

// function nameAge(x,y){
//     let z = {
//         name : x,
//         age : y
//     }

//     console.log(z.name + " is " + z.age +" years old");
    
// }
// nameAge("Nagy" , 25)


// 11

// let arr = []

// function sum(...arr){ 
//     let total = 0;
//     arr.forEach(num =>{
//         total += num
//     })

//     return console.log(total); 
// }
// sum(1,8,9,10)


// 12

// function success(){
//     setTimeout(()=>{
//         console.log("Success");
        
//     } , 3000)
// }
// success()



// 13
// let arr = []
// function largestNumber(...arr){

//     let biggestNumber = Math.max(...arr)

//     console.log(biggestNumber);
// }


// largestNumber(1,8,20,9,11,15,5,2)


// 14

// let object = {
//     Name : "Nagy",
//     age : 25
// }
// function keys(obj){

// let key = Object.keys(obj)

// console.log(key);

// }

// keys(object)


// 15 

// function arrayOfWords(x){

//     let y = x.split(" ")

//     console.log(y);
// }

// arrayOfWords("Nagy Hani Botros")






// Bonus

//  function createCounter(x){

//     let count = x

//     return {

//         increment(){

//             count++

//             return count
//         },


//         decrement(){

//             count--

//             return count
//         },


//         reset(){

//             count = x

//             return count
//         }

//     }

  
    

//  }

// let counter = createCounter(10)

// console.log(counter.increment());
// console.log(counter.decrement());

