
// Anonymous function using Arrow function

let arrayNumber = [3, 14, 22, 14, 75, 79, 99, 37, 93, 87, 25, 79]

//1. odd numbers in an array
let resultArray = (function (arrayNumber) {

    return (arrayNumber.filter((item) => {

        return item % 2 !== 0

    }))
})(arrayNumber);

console.log("odd numbers in an array: " + resultArray)

//2.Convert all the strings to title caps in a string array
let stringArray = ["castro", 'is', 'a', 'great', 'physicist']

let result = (function (stringArray) {

    return (stringArray.map((item) => {

        return item.toUpperCase()

    }))
})(stringArray);

console.log("Title caps string in an array: " + result)

//3.Sum of all numbers in an array

let resultSumArray = (function (arrayNumber) {

    return (arrayNumber.reduce((currentTotal, item) => {

        return currentTotal + item

    }))
})(arrayNumber);

console.log("Sum of numbers in an array: " + resultSumArray)


//4.Return all the prime numbers in an array

let PrimeArray = (function (arrayNumber) {

    return (arrayNumber.filter((item) => {

        for (let i = 2; i < item; i++) {
            if (item % i === 0)
                return false
        }

        return true

    }))
})(arrayNumber);

console.log("Prime numbers in an array: " +  PrimeArray)

//5.Return all the palindromes in an array

let arrayPallindrome = [444, 109, 22, 676, 777, 126, 809, 88]


    let resultP = (function(arrayPallindrome){
    return(arrayPallindrome.filter((item) => {

        let temp = item + ''

        if (temp.split('').reverse().join('') === temp)
            return true

        return false
    }))

    })(arrayPallindrome);
    console.log("Pallindrome Numbers in array are: " + resultP)


// 7.Remove duplicates from an array
    let arrayWithDup = [22, 22, 11, 10, 11, 56, 10, 1, 2, 6, 7, 56, 3, 9]

let resultDup = ((arrayWithDup, index) => {

    return [...new Set(arrayWithDup)]

})(arrayWithDup)

console.log("Array without Duplicates " + resultDup)

//8.Rotate an array by k times and return the rotated array
let arrforrotation = [1, 3, 4, 6, 7, 8]
let resultArrayShifted = ((array, k) => {

    for (let i = 0; i < k; i++) {
        let temp = array.shift()
        array.push(temp)
    }
    return array

})(arrforrotation, 3)

console.log("Array roatated k times: " + resultArrayShifted)




