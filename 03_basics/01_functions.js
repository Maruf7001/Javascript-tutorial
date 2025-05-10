/*function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}*/

//sayMyName()

/*function addtwoNumbers(number1, number2) {
console.log(number1 + number2);

}

addtwoNumbers(4, 8)  */


function addtwoNumbers(number1, number2) {
   // let result = number1 + number2
    //return result

    return number1 + number2 //alternative process
}

let result = addtwoNumbers(5, 8)

//console.log("Result: ", result);

function loginUserMessage(username = "Maruf") {

if (username === undefined) {
    console.log("Please enter a username");
    
    return
}


return `${username} just logged in`
}

//console.log(loginUserMessage("Maruf"));
//console.log(loginUserMessage("Hitesh"));





function calculateCartPrice(...num1) {
    return num1
}

//console.log(calculateCartPrice(200, 400, 700));


const user = {
    username: "Maruf",
    price: 678
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

//handleObject(user)

handleObject(
    {
        username: "Maruf",
        price: 678
    }
)


const myNewArray = [200, 400, 700]

function returnSecondValue(getArray) {
    return getArray[3]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([500, 800, 900, 698]));

