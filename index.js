let fruits = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
let transformedArray = fruits.map(fruit => {
    if(fruit.trim() === '') {
        return 'empty string'
    } else {
        return fruit
    }
})

console.log(transformedArray);