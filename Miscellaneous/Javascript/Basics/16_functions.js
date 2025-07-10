function analyse(val1, val2, ...num){
    console.log(val1, val2, num);
}

//analyse(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function shoppingCart(...num1){ // rest operator : num1 -> object
    console.log(num1);
}

shoppingCart(1,2,3,4,5,6,7,8,9,10);