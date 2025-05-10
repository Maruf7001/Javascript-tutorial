
/*
const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc  + currval
}, 0)

console.log(myTotal);
*/



/*
const myNums = [1, 2, 3]

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)


console.log(myTotal);  */





const shoppingCart = [
{
    itemName: "js course",
    price: 7900
},
{
    itemName: "html course",
    price: 900
},
{
    itemName: "css course",
    price: 8987
},
{
    itemName: "js course",
    price: 6879
}
]


const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
