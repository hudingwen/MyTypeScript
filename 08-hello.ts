console.log('hello ts')
function add(num: number, num2: number): number {
  return num + num2
}

console.info(add(1, 2))

const add2 = (num: number, num2: number): number => {
  return num + num2
}
console.info(add2(13, 2))


const add3: (num: number, num2: number) => number = (num1, num2) => {
  return num1 + num2
}
console.info(add3(2, 2))