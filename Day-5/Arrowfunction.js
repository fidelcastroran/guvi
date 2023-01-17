const arr= [1,2,3,4,5,6,7,8,9]


const odds= arr.filter(number =>{
return number % 2 !== 0;
})

console.log("Odd Numbers in arr: " + odds)

let stringArray = ["fidel", "is", "a", "great", "physicist"]

stringArray = stringArray.map((item) => {

    return item.toUpperCase()

})

console.log("Converted String Array is: " + stringArray)

let sum = arr.reduce((a, b) => {

    return a + b

})

console.log("Sum of elements in arr: " + sum)

console.log("Prime Number is Array are: " +
    arr.filter((item) => {

        for (let i = 2; i < item; i++) {
            if (item % i === 0)
                return false;
        }
        return item !== 1;

    }))

    let arrayPallindrome = [444, 109, 22, 676, 777, 126, 809, 88]

console.log("Pallindrome Numbers in array are: " +
    arrayPallindrome.filter((item) => {

        let temp = item + ''

        if (temp.split('').reverse().join('') === temp)
            return true

        return false

    }))