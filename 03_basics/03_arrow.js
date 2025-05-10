const user = {
    username: "Maruf",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        
        console.log(this);
        
    }
}
/*user.welcomeMessage()

user.username = "Hasib"
user.welcomeMessage()  */

/*
function chai() {
    let username = "Hasib"
    console.log(this.username);
    
}

chai()  */

/*
const chai = function() {
    let username = "Hasib"
    console.log(this.username);
       
}
chai()  */


const chai = () => {
    let username = "Maruf"
    console.log(this);
    
}
//chai()



/*const addTwo = (num1, num2) => {
return num1 + num2
}

console.log(addTwo(6, 7)); */

//const addTwo = (num1, num2) => num1 + num2


//const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(7, 8));
