const countingSheep = function(sheep) {
    if (sheep < 1) {
        console.log('All sheep jumped over the fence')
    }
    else {
        console.log(`${sheep}: Another sheep jumps over the fence`)
        countingSheep(sheep - 1) 
    }

}

countingSheep(3)

const powerCalculator = function(base, exponent) {
    if (exponent < 0) {
        return 'exponent should be >= 0'
    }

    if (exponent === 0) {
        return 1 
    }

    return base * powerCalculator(base, exponent - 1)
}

console.log(powerCalculator(10, 2))
console.log(powerCalculator(10, -2))

const reverseString = function(string) {
    if (string.length === 1 ) {
        return string
    }
    return string.slice(-1) + reverseString(string.slice(0, -1))
}

console.log(reverseString("exponent"))

const triangularNumber = function(num) {
    if (num <= 0) {
        return "Number needs to be greater or equal to one"
    }

    if (num === 1) {
        return num
    }

    return num + triangularNumber(num - 1)
}

console.log(triangularNumber(3))

const stringSplitter = function(input, seperator) {

    if (input.indexOf(seperator) === -1) {
        return [input.slice(0, input.length)]
    }
    return [input.slice(0, input.indexOf(seperator)), ...stringSplitter(input.slice(input.indexOf(seperator) + 1), seperator)]
}

console.log(stringSplitter('02/20/2020/30', '/'))

const fibonacci = function(number) {
    if (number <= 2) {
        return [1, 1]
    }
    let fibArray = fibonacci(number - 1)
    fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2])
    return fibArray
}

console.log(fibonacci(10))

const factorial = function(number) {
    if (number === 1) {
        return number
    }
    return number * factorial(number - 1)
}

console.log(factorial(3))

