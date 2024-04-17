// // //create your function below this line
// // function bmiCalculator(weight, height){
// //     var bmi=weight / (height*height);
// //     return bmi 
// // }
// // var bmi=bmiCalculator(65, 1.8);
// // console.log(bmi)

// // prompt("what is the first person name");
// // prompt("what is the first person name");

// // var loveScore = Math.random() * 100;
// // loveScore=Math.floor(loveScore) + 1;
// // console.log(loveScore);

// // function isleap(year){
// //     if(year % 4=== 0){
// //         if (year % 100 === 0){
// //             if (year % 400 === 0){
// //                 return "leap year"
// //             }else{
// //                 return 'not leap year'
// //             }
// //         }else{
// //             return "leap yaer"
// //         }
// //     }else{
// //         return "not leap year"
// //     }

// // }


// // var output = [];
// // var count = 1;

// // function fizzBuzz() {

// //     while (count <= 100){
// //         if (count % 3=== 0 && count % 5=== 0){
// //             output.push('fizzBuzz');
// //         }

// //        else if (count % 3=== 0 ){
// //             output.push('fizz');
// //         }
// //        else if (count % 5=== 0 ){
// //             output.push('buzz]');
// //         }
// //         else{
// //             output.push(count);
// //        }

// //        count++;
// //     }





// //     console.log(output);
// // }


// // var count = 99;
// // function beer() {
// //     while(count >= 0){
// //         if (count === 0){
// //             var beerSong = "No more bottles of beer on the wall, no more bottles of beer. Go to the store and but some more, 99 bottles of beer on the wall";
// //         }else if ( count  === 1){
// //             var beerSong = count + " bottle of beer on the wall, " + count + " bottles of beer, Take 1 down and Pass it around, " + " no" + " bottles of beer on the wall" ;
// //         } else{
// //             var beerSong = count + " bottles of beer on the wall, " + count + " bottles of beer, Take 1 down and Pass it around, " + (count-1) + " bottles of beer on the wall" ;
// //         }
// //         count--;
// //     console.log(beerSong);
// //     }
   
// // }





// function fibonacciGenerator (n){
//     var output = [];
//     if (n === 1){
//         output = [0];
//     }else if (n === 2){
//         output = [ 0,1 ];
//     }else {
//         output = [0, 1]
//       output.push(output[0] + output[1])  
//     }
//     if (n ===3)

//     return output;
// }

var randomNumber1 = Math.floor(Math.random() * 6 + 1)
var randomDiceImage= "image/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6 + 1)
var randomDiceImage2= "image/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector(".title").innerHTML = "&#129351; player 1 win";
}else if(randomNumber1 === randomNumber2) {
    document.querySelector(".title").innerHTML = "🤝 No body win";
}else{
    document.querySelector(".title").innerHTML = " player 2 wins &#129351; ";
}










