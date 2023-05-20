// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { tupleExpression } = require("@babel/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

    // describe("filterArrWd", () => {
    //     it("returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
    //     expect(filterArrWd(secretCodeWord1)).toEqual("L4ck4d41s1c4l"),
    //     expect(filterArrWd(secretCodeWord2)).toEqual("G0bbl3dyg00k"),
    //     expect(filterArrWd(secretCodeWord3)).toEqual("3cc3ntr1c")
    //     })
    // })

    // GoodFail:
    // FAIL  ./code-challenges.test.js
    // filterArrWd
    //   ✕ returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (1 ms)
  
    // ● filterArrWd › returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
  
    //   ReferenceError: filterArrWd is not defined
  



const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.

    // pseudocode:
    // input: string
    // output: returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.
    // create a funtion name: filterArrWd
    // use string as parameter
    // crate a variable strToArr and use .split("") to turn string into an array
    // strToArr = string.split("")
    // use for loop, starting at 0, stop at strToArr.length, iteration is i++
    // for (let i = 0; i < strToArr.length; i++)
    // use conditional statement if the value of current alteration index in strToArr is letter 'a' or 'A', value of current alteration index is equal to '4' 
    // if (strToArr[i] === 'a' || strToArr[i] === 'A')
    // strToArr[i] = '4'
    // use conditional statement else if the value of current alteration index in strToArr is letter 'e' or 'E', value of current alteration index is equal to '3' 
    // else if (strToArr[i] === 'e' || strToArr[i] === 'E')
    // strToArr[i] = '3'
    // use conditional statement else if the value of current alteration index in strToArr is letter 'i' or 'I', value of current alteration index is equal to '1' 
    // else if (strToArr[i] === 'i' || strToArr[i] === 'I')
    // strToArr[i] = '1'
    // use conditional statement else if the value of current alteration index in strToArr is letter 'o' or 'O', value of current alteration index is equal to '0' 
    // else if strToArr[i] === 'o' || strToArr[i] === 'O'
    // strToArr[i] = '0'
    // return using .join("") method to turn array back to string.
    // return strToArr.join("")
    // pass test

    // const filterArrWd = (string) => {
    //     const strToArr = string.split("")
    //     for (let i = 0; i < strToArr.length; i++){
    //         if (strToArr[i] === 'a' || strToArr[i] === 'A'){
    //            strToArr [i] = '4'
    //         } else if (strToArr[i] === 'e' || strToArr[i] === 'E'){
    //            strToArr [i] = '3'
    //         } else if (strToArr[i] === 'i' || strToArr[i] === 'I'){
    //            strToArr[i] = '1' 
    //         } else if (strToArr[i] === 'o' || strToArr[i] === 'O'){
    //            strToArr[i] = '0'
    //         } 
    //     }
    //     return strToArr.join("")
    // }

    // Pass Test:
    // PASS  ./code-challenges.test.js
    // filterArrWd
    //   ✓ returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (3 ms)


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

    // describe("filterArrLt", () => {
    //     it("returns an array of all the words containing that particular letter.", () => {
    //     expect(filterArrLt(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"]),
    //     expect(filterArrLt(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    //     })
    // })

    // Good Fail:
    // FAIL  ./code-challenges.test.js
    // filterArrLt
    //   ✕ returns an array of all the words containing that particular letter. (1 ms)
  
    // ● filterArrLt › returns an array of all the words containing that particular letter.
  
    //   ReferenceError: filterArrLt is not defined
  
const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const filterLetterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const filterLetterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

    // pseudocode:
    // input: array, letter
    // output: returns an array of all the words containing that particular letter.
    // create a funtion name: filterArrLt
    // use array and letter as parameter
    // return array with filter with value taht includes letter or letter.toUpperCase()
    // return array.filter((value) => value.include(letter) || value.include(letter.toUpperCase()))
    // pass test

    // const filterArrLt = (array, letter) => {
    //     return array.filter((value) => value.includes(letter) || value.includes(letter.toUpperCase()))
    // }

    // Pass Test:
    // PASS  ./code-challenges.test.js
    // filterArrLt
    //   ✓ returns an array of all the words containing that particular letter. (2 ms)
  
  

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

    describe("fullHouse", () => {
        it("determines whether or not the array is a 'full house'", () => {
        expect(fullHouse(hand1)).toEqual(true),
        expect(fullHouse(hand2)).toEqual(false),
        expect(fullHouse(hand3)).toEqual(false),
        expect(fullHouse(hand4)).toEqual(true)
        })
    })

    // Good Fail:
    // FAIL  ./code-challenges.test.js
    // fullHouse
    //   ✕ determines whether or not the array is a 'full house' (2 ms)

    // ● fullHouse › determines whether or not the array is a 'full house'

    //   ReferenceError: fullHouse is not defined

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

    // pseudocode:
    // input: array
    // output: determines whether or not the array is a "full house".
    // create a funtion name: fullHouse
    // use array as parameter
    // use .sort() on array to have same number sorting for equation purpose.
    // array.sort()
    // use conditional statement if first 3 number and last 2 number is the same :
    // if (array[0] === array[1] && array[1] === array[2] && array[3] === array[4])
    // or the first 2 number and last 3 number is the same:
    // (array[0] === array[1] && array[2] === array[3] && array[3] === array[4])
    // return ture for above conditions
    // then use else and return false for other conditions.
    // pass test
    
    const fullHouse = (array) => {
        array.sort()
        if ((array[0] === array[1] && array[1] === array[2] && array[3] === array[4]) || (array[0] === array[1] && array[2] === array[3] && array[3] === array[4])) {
            return true
        } else {
            return false
        }
    }

    // Pass Test:
    // PASS  ./code-challenges.test.js
    // fullHouse
    //   ✓ determines whether or not the array is a 'full house' (4 ms)
  