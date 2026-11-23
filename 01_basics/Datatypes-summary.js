// primitive 

// 7 types : string, Number, boolean, null, undefined, symbol, BigInt, 

// Reference (Non primitive)
// Arrays, Objects, Functions
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSidetemp = null
let Email;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);


// **************************************
// Stack(primitive), Heap(Non primitive)

let myyoutubeName = "Haris-khan"
let anotherName = myyoutubeName
anotherName = "Haris"
console.log(myyoutubeName)
console.log(anotherName)

let userOne = {
    email : "hello@gmail.com",
    id : "hy321"
}

let userTwo = userOne
userTwo.email = "Hy@Google.com"

console.log(userOne.email)
console.log(userTwo.email)


