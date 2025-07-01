//ex2
function isAdult(age) {
    if (age >= 18){
        Adult='Adult'
        

    }
    else {
        Adult='Minor'
        
    }
    return Adult
}
console.log(isAdult(20))

//ex3
function isCharAVowel(letter) {
    if (letter === 'A' || letter === 'a' || letter === 'E' || letter === 'e' || letter === 'I' || letter === 'i' || letter === 'O' || letter === 'o' ||letter === 'U' || letter === 'u'){
        return true
    }
    else {
        return false
    }
}
console.log(isCharAVowel('s'))
console.log(isCharAVowel('a'))


//ex4
function generateEmail(name, domain) {
    console.log(`${name}@${domain}.`)
}
generateEmail('sakeenas.kadhem', 'gmail.com')


//ex5
function greetUser(name, dayTime) {
    return `Good ${dayTime}, ${name}!`
}
console.log(greetUser('sakeena', 'Moring'))


//6
function maxOfThree(a, b, c) {
    if(a > b && a > c){
        return a
    }
    else if(b > a && b > c){
        return b
    }
    else {
        return c
    }
}

console.log(maxOfThree(17, 4, 9))

//7

function calculateTip(bill, tip) {
 const   Tip = bill*(tip/100)
 return Tip
}
console.log(calculateTip(50, 20))


//8

function convertTemprature(temp, unit) {
    if(unit === 'c'){
        f=1.8*temp+32
        return f
    }
    else {
        c=(temp-32)/1.8
        return c
    }
}
console.log(convertTemprature(32, 'c'))
console.log(convertTemprature(32, 'f'))


//9

function basicCalculator(a, s, ope) {
    if (ope === 'Add' || ope === 'add') {
        add=a+s
        return add
    }
    else if (ope === 'Subtract' || ope === 'subtract') {
        subtract=a-s
        return subtract
    }
    else if (ope === 'multiply' || ope === 'multiply') {
        multiply=a*s
        return multiply
    }
    else if (ope === 'Devide' || ope === 'devide') {
        devide=a/s
        return devide
    }

}

console.log(basicCalculator(10, 5, 'subtract'))
console.log(basicCalculator(10, 5, 'add'))
console.log(basicCalculator(10, 5, 'multiply'))
console.log(basicCalculator(10, 5, 'devide'))

//Level up
//ex 10

function calculateGrade(grade) {
    if(grade >= 90 && grade <= 100){
        return 'A'
    }
    else if(grade >= 80 && grade <= 89){
        return 'B'
    }
    else if(grade >= 70 && grade <= 79){
        return 'C'
    }
    else if(grade >= 60 && grade <= 69){
        return 'D'
    }
    else if(grade < 60){
        return 'F'
    }
}

console.log(calculateGrade(55))

//ex 11
function createUsername(first, last) {
    let f = first.substring(0, 3)
    let l = last.substring(0, 3)
    let num= first.length+last.length
    return` ${f}${l}${num}`

}
console.log(createUsername('sakeena', 'kadhem'))

//ex 12
function numArg (a, b, c, d) {
   let arg =arguments.length
    return arg
}
console.log(numArg('s','d','r','b'))
