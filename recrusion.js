function factorial(number) {
  return number === 0 ? 1 : number * factorial(number - 1)
}

console.log(factorial(3))
console.log(factorial(4))
