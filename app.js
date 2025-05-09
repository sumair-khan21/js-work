// // switch case

// let day = 5;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }



// let word = "hello world";

// let count = 0;

// for (let i = 0; i < word.length; i++) {
//     switch (word[i]) {
//         case "a":
//             count++;
//             break;
//         case "e":
//             count++;
//             break;
//         case "i":
//             count++;
//             break;
//         case "o":
//             count++;
//             break;
//         case "u":
//             count++;
//             break;
//         default:
//             break;
//     }
// }
// console.log(count);




//while loop
// jab tak condition true hoga tab tak loop chalega

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// }


// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let text = "";
// let i = 0;
// while (i < cars.length) {
//   text += cars[i] ;
//   i++;
//   console.log(text);
// }







// let correctPassword = "1234";
// let userInput;
// let attempts = 0;
// let maxAttempts = 3;

// while (userInput !== correctPassword && attempts < maxAttempts) {
//   userInput = prompt("Enter your password:");
//   attempts++;

//   if (userInput === correctPassword) {
//     alert("Login successful!");
//   } else if (attempts < maxAttempts) {
//     alert(`Wrong password. You have ${maxAttempts - attempts} attempt(s) left.`);
//   } else {
//     alert("Account locked. Too many attempts.");
//   }
// }



// let item;
// let cart = [];

// while (true) {
//   item = prompt("Enter item to add to cart (type 'done' to finish):");

//   if (item.toLowerCase() === 'done') {
//     break; 
//   }

//   cart.push(item);
//   alert(`${item} added to cart.`);
// }

// alert("Your final cart: " + cart.join(", "));




// let items;
// let cart = []

// while(true){
// items = prompt("Enter your items (type 'done' to finish cart)")
// if(items.toLowerCase()== 'done'){
//     break;
// }
// cart.push(items)
// alert( `${items} add in your cart`)
// }
// alert(`Your final cart is: ${cart.join(", ")}`)


// let words = ['apple','banana','grapes','orange','peach']

// let newWords = []

// for(let i = 0; i < words.length; i++){

//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
//     newWords.push(words[i])
// }
// console.log(newWords);



// let words =  prompt("Enter any words")
// let newWords = []

// for(let i = 0; i < words.length; i++){

//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
//     newWords.push(words[i])
// }
// console.log(newWords);



let str = `Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.
`
let find = "video"
let counter = 0;
let match = false;

for(let i = 0; i < str.length; i++){
    // console.log(str.slice(i,i+3));
    if(!match && find == str.slice(i,i+find.length).toLowerCase()){
        ++counter;   
        match = true
        console.log("Match");
    }
}
console.log(counter);






// do while loop
// do while loop ek bar chalaega fir condition check hoga

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 10);




